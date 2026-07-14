using System.Diagnostics;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

namespace Part107Prep;

/// <summary>
/// Thin desktop shell: hosts the offline web app (bundled in wwwroot) in WebView2,
/// served from a virtual host so localStorage progress persists between runs.
/// </summary>
public sealed class MainForm : Form
{
    private readonly WebView2 _web = new();

    public MainForm()
    {
        Text = "Part 107 Prep — Remote Pilot Exam Trainer";
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
            var dataDir = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "Part107Prep", "WebView2");
            Directory.CreateDirectory(dataDir);

            var env = await CoreWebView2Environment.CreateAsync(userDataFolder: dataDir);
            await _web.EnsureCoreWebView2Async(env);

            var core = _web.CoreWebView2;
            var content = Path.Combine(AppContext.BaseDirectory, "wwwroot");
            core.SetVirtualHostNameToFolderMapping(
                "app.local", content, CoreWebView2HostResourceAccessKind.Allow);

            core.Settings.AreDefaultContextMenusEnabled = false;
            core.Settings.IsStatusBarEnabled = false;
            core.Settings.AreDevToolsEnabled = false;

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
