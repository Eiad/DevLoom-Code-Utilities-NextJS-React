// Tauri detection and utilities

/**
 * Check if running inside Tauri desktop app
 */
export const isTauri = () => {
  if (typeof window === 'undefined') return false;
  return window.__TAURI_INTERNALS__ !== undefined;
};

/**
 * Open URL in external browser (works in both Tauri and web)
 */
export const openExternal = async (url) => {
  if (isTauri()) {
    const { open } = await import('@tauri-apps/plugin-shell');
    await open(url);
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
