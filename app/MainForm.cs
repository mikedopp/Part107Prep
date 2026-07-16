using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text.Json;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

namespace Part107Prep;

/// <summary>
/// Thin desktop shell: extracts its embedded offline site into versioned LocalAppData,
/// then hosts it in WebView2 through a virtual host so progress persists between runs.
/// </summary>
public sealed class MainForm : Form
{
    private readonly WebView2 _web = new();

    public MainForm()
    {
        Text = "Part 107 Prep v1.5 — Remote Pilot Exam Trainer";
        Width = 1200;
        Height = 900;
        MinimumSize = new Size(900, 640);
        StartPosition = FormStartPosition.CenterScreen;
        BackColor = Color.FromArgb(23, 24, 28);

        _web.Dock = DockStyle.Fill;
        Controls.Add(_web);

        Load += async (_, _) => await InitAsync();
    }

    private async Task InitAsync()
    {
        try
        {
            var appDataDir = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Part107Prep");
            var dataDir = Path.Combine(appDataDir, "WebView2");
            Directory.CreateDirectory(dataDir);

            var content = ExtractEmbeddedWebContent(appDataDir);

            var env = await CoreWebView2Environment.CreateAsync(userDataFolder: dataDir);
            await _web.EnsureCoreWebView2Async(env);

            var core = _web.CoreWebView2;
            core.SetVirtualHostNameToFolderMapping(
                "app.local", content, CoreWebView2HostResourceAccessKind.Allow);

            core.Settings.AreDefaultContextMenusEnabled = false;
            core.Settings.IsStatusBarEnabled = false;
            core.Settings.AreDevToolsEnabled = false;

            var hostInfo = new
            {
                mode = "desktop",
                appVersion = Application.ProductVersion,
                architecture = RuntimeInformation.ProcessArchitecture.ToString(),
                webView2Version = CoreWebView2Environment.GetAvailableBrowserVersionString(),
                contentPath = content,
                contentPackaging = "Embedded in the executable; extracted per version at first launch",
                dataPath = dataDir,
                dotnetRuntime = "Self-contained .NET 8",
                networkRequired = false
            };
            var hostJson = JsonSerializer.Serialize(hostInfo);
            await core.AddScriptToExecuteOnDocumentCreatedAsync(
                $"window.PART107_HOST = Object.freeze({hostJson});");

            // Real external links (faa.gov, github, PSI) open in the user's browser, not in-app.
            core.NewWindowRequested += (_, e) =>
            {
                e.Handled = true;
                OpenExternal(e.Uri);
            };
            core.NavigationStarting += (_, e) =>
            {
                if (e.Uri.StartsWith("http", StringComparison.OrdinalIgnoreCase) &&
                    !e.Uri.StartsWith("https://app.local", StringComparison.OrdinalIgnoreCase))
                {
                    e.Cancel = true;
                    OpenExternal(e.Uri);
                }
            };

            core.Navigate("https://app.local/index.html");
        }
        catch (Exception ex)
        {
            MessageBox.Show(
                "Could not start the WebView2 runtime.\n\n" + ex.Message +
                "\n\nInstall the Microsoft Edge WebView2 Runtime and try again.",
                "Part 107 Prep", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }

    private static string ExtractEmbeddedWebContent(string appDataDir)
    {
        const string prefix = "wwwroot/";
        var version = Application.ProductVersion;
        var contentRoot = Path.Combine(appDataDir, "Content", version);
        var readyMarker = Path.Combine(contentRoot, ".ready");
        var indexPath = Path.Combine(contentRoot, "index.html");

        if (File.Exists(readyMarker) && File.Exists(indexPath))
        {
            return contentRoot;
        }

        Directory.CreateDirectory(contentRoot);
        var assembly = typeof(MainForm).Assembly;
        var resources = assembly.GetManifestResourceNames()
            .Where(name => name.StartsWith(prefix, StringComparison.Ordinal))
            .ToArray();

        if (resources.Length == 0)
        {
            throw new InvalidOperationException("No embedded offline content was found in the application.");
        }

        var safeRoot = Path.GetFullPath(contentRoot) + Path.DirectorySeparatorChar;
        foreach (var resourceName in resources)
        {
            var relativePath = resourceName[prefix.Length..]
                .Replace('/', Path.DirectorySeparatorChar);
            var targetPath = Path.GetFullPath(Path.Combine(contentRoot, relativePath));
            if (!targetPath.StartsWith(safeRoot, StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException($"Unsafe embedded content path: {resourceName}");
            }

            Directory.CreateDirectory(Path.GetDirectoryName(targetPath)!);
            using var source = assembly.GetManifestResourceStream(resourceName)
                ?? throw new InvalidOperationException($"Could not read embedded content: {resourceName}");
            using var target = File.Create(targetPath);
            source.CopyTo(target);
        }

        File.WriteAllText(readyMarker, $"Part 107 Prep {version}\n{resources.Length} embedded files\n");
        return contentRoot;
    }

    private static void OpenExternal(string uri)
    {
        try
        {
            Process.Start(new ProcessStartInfo(uri) { UseShellExecute = true });
        }
        catch
        {
            // best-effort; ignore failures to launch the external browser
        }
    }
}
