(() => {
  let selected = 'system';
  try { selected = localStorage.getItem('3105-appearance') || 'system'; } catch (_) {}
  if (selected === 'light' || selected === 'dark') document.documentElement.dataset.theme = selected;
  const resolved = selected === 'system' ? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : selected;
  let suffix = resolved === 'dark' ? 'dark' : 'light';
  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = `./manifest-${suffix}.json`;
  document.head.append(manifest);
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = resolved === 'dark' ? '#000000' : '#ffffff';
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) favicon.href = `./icon-${suffix}-192.png`;
  const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (appleIcon) appleIcon.href = `./icon-${suffix}-180.png`;
  const syncAppearanceAssets = () => {
    const explicit = document.documentElement.dataset.theme;
    const next = explicit === 'dark' || (!explicit && window.matchMedia?.('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    if (next === suffix) return;
    suffix = next;
    manifest.href = `./manifest-${suffix}.json`;
    if (themeColor) themeColor.content = suffix === 'dark' ? '#000000' : '#ffffff';
    if (favicon) favicon.href = `./icon-${suffix}-192.png`;
    if (appleIcon) appleIcon.href = `./icon-${suffix}-180.png`;
  };
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
    if (!document.documentElement.dataset.theme) syncAppearanceAssets();
  });
  new MutationObserver(syncAppearanceAssets).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
})();
