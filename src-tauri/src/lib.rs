use tauri::{
    menu::{Menu, MenuBuilder, MenuItemBuilder, PredefinedMenuItem, SubmenuBuilder},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Emitter, Manager,
};
use tauri_plugin_opener::OpenerExt;

fn setup_menu(app: &tauri::App) -> Result<(), Box<dyn std::error::Error>> {
    // DevLoom App Menu (macOS first submenu becomes app menu)
    let app_menu = SubmenuBuilder::new(app, "DevLoom")
        .about(None)
        .separator()
        .quit()
        .build()?;

    // File Menu
    let file_menu = SubmenuBuilder::new(app, "File")
        .close_window()
        .build()?;

    // Edit Menu
    let edit_menu = SubmenuBuilder::new(app, "Edit")
        .undo()
        .redo()
        .separator()
        .cut()
        .copy()
        .paste()
        .select_all()
        .build()?;

    // View Menu
    let reload_item = MenuItemBuilder::with_id("reload", "Reload")
        .accelerator("CmdOrCtrl+R")
        .build(app)?;
    let fullscreen_item = MenuItemBuilder::with_id("fullscreen", "Toggle Fullscreen")
        .accelerator("Ctrl+CmdOrCtrl+F")
        .build(app)?;

    let view_menu = SubmenuBuilder::new(app, "View")
        .item(&reload_item)
        .item(&fullscreen_item)
        .build()?;

    // Tools Menu - Quick access to utilities
    let json_formatter = MenuItemBuilder::with_id("tool_json", "JSON Formatter")
        .accelerator("CmdOrCtrl+1")
        .build(app)?;
    let html_formatter = MenuItemBuilder::with_id("tool_html", "HTML Formatter")
        .accelerator("CmdOrCtrl+2")
        .build(app)?;
    let css_formatter = MenuItemBuilder::with_id("tool_css", "CSS Formatter")
        .accelerator("CmdOrCtrl+3")
        .build(app)?;
    let base64_encoder = MenuItemBuilder::with_id("tool_base64", "Base64 Encoder")
        .accelerator("CmdOrCtrl+4")
        .build(app)?;
    let json_yaml = MenuItemBuilder::with_id("tool_jsonyaml", "JSON to YAML")
        .accelerator("CmdOrCtrl+5")
        .build(app)?;
    let regexp_tester = MenuItemBuilder::with_id("tool_regexp", "RegExp Tester")
        .accelerator("CmdOrCtrl+6")
        .build(app)?;
    let markdown_preview = MenuItemBuilder::with_id("tool_markdown", "Markdown Preview")
        .accelerator("CmdOrCtrl+7")
        .build(app)?;
    let lorem_ipsum = MenuItemBuilder::with_id("tool_lorem", "Lorem Ipsum")
        .accelerator("CmdOrCtrl+8")
        .build(app)?;

    let tools_menu = SubmenuBuilder::new(app, "Tools")
        .item(&json_formatter)
        .item(&html_formatter)
        .item(&css_formatter)
        .separator()
        .item(&base64_encoder)
        .item(&json_yaml)
        .separator()
        .item(&regexp_tester)
        .item(&markdown_preview)
        .item(&lorem_ipsum)
        .build()?;

    // Window Menu
    let window_menu = SubmenuBuilder::new(app, "Window")
        .minimize()
        .separator()
        .close_window()
        .build()?;

    // Help Menu
    let docs_item = MenuItemBuilder::with_id("help_docs", "Documentation")
        .build(app)?;
    let support_item = MenuItemBuilder::with_id("help_support", "Contact Support")
        .build(app)?;

    let help_menu = SubmenuBuilder::new(app, "Help")
        .item(&docs_item)
        .item(&support_item)
        .build()?;

    // Build complete menu
    let menu = MenuBuilder::new(app)
        .items(&[
            &app_menu,
            &file_menu,
            &edit_menu,
            &view_menu,
            &tools_menu,
            &window_menu,
            &help_menu,
        ])
        .build()?;

    app.set_menu(menu)?;

    Ok(())
}

fn setup_tray(app: &tauri::App) -> Result<(), Box<dyn std::error::Error>> {
    // Tray menu items
    let show_item = MenuItemBuilder::with_id("tray_show", "Show DevLoom").build(app)?;
    let quit_item = MenuItemBuilder::with_id("tray_quit", "Quit").build(app)?;

    // Quick tools submenu for tray
    let tray_json = MenuItemBuilder::with_id("tool_json", "JSON Formatter").build(app)?;
    let tray_html = MenuItemBuilder::with_id("tool_html", "HTML Formatter").build(app)?;
    let tray_base64 = MenuItemBuilder::with_id("tool_base64", "Base64 Encoder").build(app)?;

    let tools_submenu = SubmenuBuilder::new(app, "Quick Tools")
        .item(&tray_json)
        .item(&tray_html)
        .item(&tray_base64)
        .build()?;

    let tray_menu = Menu::with_items(
        app,
        &[
            &show_item,
            &tools_submenu,
            &PredefinedMenuItem::separator(app)?,
            &quit_item,
        ],
    )?;

    let _tray = TrayIconBuilder::new()
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&tray_menu)
        .show_menu_on_left_click(true)
        .on_menu_event(|app, event| {
            let id = event.id.as_ref();
            match id {
                "tray_show" => {
                    if let Some(window) = app.get_webview_window("main") {
                        let _ = window.show();
                        let _ = window.set_focus();
                    }
                }
                "tray_quit" => {
                    app.exit(0);
                }
                _ => {
                    // Tool navigation - handled by common handler
                    handle_tool_navigation(app, id);
                }
            }
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                if let Some(window) = tray.app_handle().get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                }
            }
        })
        .build(app)?;

    Ok(())
}

fn handle_tool_navigation(app: &tauri::AppHandle, id: &str) {
    let route = match id {
        "tool_json" => "/formatters/JSONFormatter",
        "tool_html" => "/formatters/HTMLFormatter",
        "tool_css" => "/formatters/CSSFormatter",
        "tool_base64" => "/converters/Base64Encoder",
        "tool_jsonyaml" => "/converters/JSONYAMLConverter",
        "tool_regexp" => "/debuggers/RegExpTester",
        "tool_markdown" => "/previewers/MARKDOWNPreviewer",
        "tool_lorem" => "/tools/LoremIpsum",
        _ => return,
    };

    let _ = app.emit("navigate", route);
}

fn handle_view_action(app: &tauri::AppHandle, id: &str) {
    if let Some(window) = app.get_webview_window("main") {
        match id {
            "reload" => {
                let _ = app.emit("reload", ());
            }
            "fullscreen" => {
                if let Ok(is_fullscreen) = window.is_fullscreen() {
                    let _ = window.set_fullscreen(!is_fullscreen);
                }
            }
            _ => {}
        }
    }
}

fn handle_help_action(app: &tauri::AppHandle, id: &str) {
    match id {
        "help_docs" => {
            // Navigate to internal about page
            let _ = app.emit("navigate", "/about-devloom");
        }
        "help_support" => {
            let _ = app.opener().open_url("mailto:support@devloom.net", None::<&str>);
        }
        _ => {}
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // Setup logging in debug mode
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }

            // Setup native menu
            setup_menu(app)?;

            // Setup system tray
            setup_tray(app)?;

            Ok(())
        })
        .on_menu_event(|app, event| {
            let id = event.id().0.as_str();

            // Handle tool navigation
            if id.starts_with("tool_") {
                handle_tool_navigation(app, id);
                return;
            }

            // Handle view actions
            if matches!(id, "reload" | "fullscreen" | "devtools") {
                handle_view_action(app, id);
                return;
            }

            // Handle help actions
            if id.starts_with("help_") {
                handle_help_action(app, id);
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
