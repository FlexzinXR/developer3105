(() => {
  const systemAppearance = window.matchMedia('(prefers-color-scheme: dark)');
  const readSelection = () => {
    try {
      const value = localStorage.getItem('3105-appearance') || 'system';
      return value === 'light' || value === 'dark' ? value : 'system';
    } catch (_) {
      return 'system';
    }
  };
  const root = document.documentElement;
  let selected = readSelection();
  if (selected === 'light' || selected === 'dark') root.dataset.theme = selected;
  else delete root.dataset.theme;

  const getResolvedAppearance = () => {
    const choice = readSelection();
    if (choice === 'light' || choice === 'dark') return choice;
    return systemAppearance.matches ? 'dark' : 'light';
  };

  let manifest = document.querySelector('link[rel="manifest"]');
  if (!manifest) {
    manifest = document.createElement('link');
    manifest.rel = 'manifest';
    document.head.append(manifest);
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const favicon = document.querySelector('link[rel="icon"]');
  const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  let lastApplied = '';

  const syncAppearanceAssets = () => {
    const mode = getResolvedAppearance();
    if (mode === lastApplied) return;
    lastApplied = mode;
    manifest.href = `./manifest-${mode}.json`;
    if (themeColor) themeColor.content = mode === 'dark' ? '#000000' : '#ffffff';
    if (favicon) favicon.href = `./icon-${mode}-192.png`;
    if (appleIcon) appleIcon.href = `./icon-${mode}-180.png`;
    document.documentElement.dataset.resolvedTheme = mode;
  };

  window.sync3105AppearanceAssets = syncAppearanceAssets;
  syncAppearanceAssets();

  const onSystemAppearanceChange = () => {
    if (readSelection() !== 'system') return;
    syncAppearanceAssets();
    document.dispatchEvent(new CustomEvent('3105:system-appearance-change'));
  };
  if (systemAppearance.addEventListener) systemAppearance.addEventListener('change', onSystemAppearanceChange);
  else systemAppearance.addListener?.(onSystemAppearanceChange);

  new MutationObserver(syncAppearanceAssets).observe(root, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== '3105-appearance') return;
    selected = readSelection();
    if (selected === 'light' || selected === 'dark') root.dataset.theme = selected;
    else delete root.dataset.theme;
    syncAppearanceAssets();
    document.dispatchEvent(new CustomEvent('3105:system-appearance-change'));
  });
  window.addEventListener('pageshow', () => {
    selected = readSelection();
    if (selected === 'light' || selected === 'dark') root.dataset.theme = selected;
    else delete root.dataset.theme;
    syncAppearanceAssets();
  });
})();
