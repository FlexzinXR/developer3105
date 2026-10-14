(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const SVG = {
    light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
    dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z"/></svg>',
    system: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 5.1a5.8 5.8 0 0 0-6.8 7.5l-5.1 5.1a2 2 0 0 0 2.8 2.8l5.1-5.1a5.8 5.8 0 0 0 7.5-6.8l-3.4 3.4-3.5-3.5 3.4-3.4Z"/></svg>'
  };
  const appearanceNames = { system: 'appearance.system', light: 'appearance.light', dark: 'appearance.dark' };
  const t = (key, vars) => window.t?.(key, vars) || key;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const appearanceMode = () => {
    const selected = (() => { try { return localStorage.getItem('3105-appearance') || 'system'; } catch (_) { return 'system'; } })();
    return selected === 'system' ? (media.matches ? 'dark' : 'light') : selected;
  };
  const iconAsset = (mode) => mode === 'dark' ? './icon-dark-192.png' : './icon-light-192.png';
  function updateAppearanceChrome(mode) {
    const resolved = mode === 'system' ? appearanceMode() : mode;
    const button = $('appearanceBtn');
    if (button) {
      button.innerHTML = SVG[resolved];
      button.dataset.appearance = resolved;
      const modeName = t(appearanceNames[mode]);
      const resolvedName = t(`appearance.${resolved}Lower`);
      const label = mode === 'system' ? t('appearance.buttonSystem', { mode: resolvedName }) : t('appearance.buttonMode', { mode: modeName });
      button.setAttribute('aria-label', label);
      button.title = label;
    }
    document.querySelectorAll('.appearance-option-icon').forEach((node) => { node.innerHTML = SVG[node.dataset.icon]; });
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.href = iconAsset(resolved);
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (appleIcon) appleIcon.href = resolved === 'dark' ? './icon-dark-180.png' : './icon-light-180.png';
    const manifest = document.querySelector('link[rel="manifest"]');
    if (manifest) manifest.href = resolved === 'dark' ? './manifest-dark.json' : './manifest-light.json';
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.content = resolved === 'dark' ? '#000000' : '#ffffff';
  }
  const originalSetAppearance = window.setAppearance;
  if (typeof originalSetAppearance === 'function') {
    window.setAppearance = function (mode, save) {
      originalSetAppearance(mode, save);
      updateAppearanceChrome(mode);
    };
  }
  updateAppearanceChrome((() => { try { return localStorage.getItem('3105-appearance') || 'system'; } catch (_) { return 'system'; } })());
  media.addEventListener?.('change', () => {
    let selected = 'system'; try { selected = localStorage.getItem('3105-appearance') || 'system'; } catch (_) {}
    if (selected === 'system') updateAppearanceChrome('system');
  });
  document.addEventListener('3105:language-change', () => {
    let selected = 'system'; try { selected = localStorage.getItem('3105-appearance') || 'system'; } catch (_) {}
    updateAppearanceChrome(selected);
    menuButton?.setAttribute('aria-label', menu?.classList.contains('open') ? t('menu.close') : t('menu.open'));
  });

  const menu = $('sideMenu'), backdrop = $('menuBackdrop'), menuButton = $('menuBtn');
  function closeMenu() {
    menu?.classList.remove('open'); menu?.setAttribute('aria-hidden', 'true'); menu?.setAttribute('inert', '');
    if (backdrop) backdrop.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', t('menu.open'));
  }
  function openMenu() {
    menu?.classList.add('open'); menu?.setAttribute('aria-hidden', 'false'); menu?.removeAttribute('inert');
    if (backdrop) backdrop.hidden = false;
    menuButton?.setAttribute('aria-expanded', 'true'); menuButton?.setAttribute('aria-label', t('menu.close'));
    menu?.querySelector('.nav-item.active')?.focus({ preventScroll: true });
  }
  menuButton?.addEventListener('click', () => menu?.classList.contains('open') ? closeMenu() : openMenu());
  backdrop?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeMenu(); $('appearanceMenu')?.classList.add('hidden'); $('appearanceBtn')?.setAttribute('aria-expanded', 'false'); } });

  const headings = { edit: ['nav.edit', 'view.editHint'], create: ['nav.create', 'view.createHint'], extract: ['nav.extract', 'view.extractHint'] };
  function syncBundleControls() {
    const isCustomBundle = $('bundle')?.value === 'custom';
    $('customBundleBox')?.classList.toggle('hidden', !isCustomBundle);
    const automaticRoute = $('routeChoice')?.querySelector('option[value="automatic"]');
    if (automaticRoute) automaticRoute.disabled = isCustomBundle;
    if (isCustomBundle && $('routeChoice')) $('routeChoice').value = 'custom';
  }
  function syncRouteControls() {
    syncBundleControls();
    const isCreate = document.querySelector('input[name="mode"]:checked')?.value === 'create';
    const custom = $('routeChoice')?.value === 'custom';
    $('existingRoute')?.classList.toggle('hidden', isCreate);
    const label = $('routeLabel'); if (label) label.textContent = t(isCreate ? 'msg.routeCreate' : 'msg.routeEdit');
    $('customRouteBox')?.classList.toggle('hidden', !isCreate || !custom);
    $('route')?.classList.toggle('hidden', isCreate && custom);
    if (isCreate && custom && $('route')) $('route').value = $('customRouteInput')?.value || '';
  }
  const originalAssetRoute = window.assetRoute;
  if (typeof originalAssetRoute === 'function') {
    window.assetRoute = function (type, bundleID) {
      if (document.querySelector('input[name="mode"]:checked')?.value === 'create' && $('routeChoice')?.value === 'custom') return $('customRouteInput')?.value.trim() || '';
      return originalAssetRoute(type, bundleID);
    };
  }
  $('routeChoice')?.addEventListener('change', () => { syncRouteControls(); window.syncCombinedRoute?.(); });
  $('bundle')?.addEventListener('change', () => { syncBundleControls(); syncRouteControls(); window.syncCombinedRoute?.(); });
  $('customBundleInput')?.addEventListener('input', () => window.syncCombinedRoute?.());
  $('customRouteInput')?.addEventListener('input', () => { if ($('route')) $('route').value = $('customRouteInput').value; });
  document.querySelectorAll('input[name="mode"]').forEach((radio) => radio.addEventListener('change', syncRouteControls));

  let currentView = 'lobby';
  function updateWorkHeading(view) {
    const [titleKey, subtitleKey] = headings[view] || headings.edit;
    const title = $('workHeading')?.querySelector('h2');
    if (title) { title.dataset.i18n = titleKey; title.textContent = t(titleKey); }
    let subtitle = $('workHeading')?.querySelector('.view-subtitle');
    if (!subtitle) { subtitle = document.createElement('p'); subtitle.className = 'hint view-subtitle'; $('workHeading')?.append(subtitle); }
    subtitle.dataset.i18n = subtitleKey; subtitle.textContent = t(subtitleKey);
  }
  function showView(view) {
    currentView = view;
    const lobby = view === 'lobby', info = view === 'info';
    $('lobbyView')?.classList.toggle('hidden', !lobby);
    $('infoView')?.classList.toggle('hidden', !info);
    $('workCard')?.classList.toggle('hidden', lobby || info);
    document.querySelectorAll('.nav-item').forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
    if (!lobby && !info) {
      const radio = document.querySelector(`input[name="mode"][value="${view}"]`);
      if (radio) { radio.checked = true; window.syncMode?.(); }
      updateWorkHeading(view);
    }
    closeMenu(); syncRouteControls();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'lobby') renderLibrary();
  }
  document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
  syncBundleControls(); syncRouteControls();
  document.addEventListener('3105:language-change', () => { if (currentView !== 'lobby' && currentView !== 'info') { updateWorkHeading(currentView); syncRouteControls(); } renderLibrary(); });

  const DB_NAME = '3105-studio-local-library', STORE = 'patches';
  function openDatabase() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) return reject(new Error('Este navegador no permite guardar el historial local.'));
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => { const db = request.result; if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'id' }); };
      request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error || new Error('No se pudo abrir el historial local.'));
    });
  }
  async function savePatchRecord(blob) {
    if (!blob) return;
    const db = await openDatabase();
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      name: $('patchName')?.value.trim() || 'Patch 3105',
      fileName: ($('downloadName')?.value.trim() || $('patchName')?.value.trim() || 'patch') + (($('downloadName')?.value.trim() || '').toLowerCase().endsWith('.3105') ? '' : '.3105'),
      action: document.querySelector('input[name="mode"]:checked')?.value === 'create' ? 'created' : 'edited',
      savedAt: new Date().toISOString(), bytes: blob.size, blob
    };
    await new Promise((resolve, reject) => { const tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).put(record); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
    db.close(); renderLibrary();
  }
  async function getPatchRecords() {
    const db = await openDatabase();
    const records = await new Promise((resolve, reject) => { const request = db.transaction(STORE, 'readonly').objectStore(STORE).getAll(); request.onsuccess = () => resolve(request.result || []); request.onerror = () => reject(request.error); });
    db.close(); return records.sort((a, b) => b.savedAt.localeCompare(a.savedAt));
  }
  function formatSize(n) { if (n < 1024) return `${n} B`; if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`; return `${(n / 1048576).toFixed(2)} MB`; }
  async function renderLibrary() {
    const list = $('patchList'); if (!list) return;
    try {
      const records = await getPatchRecords();
      $('patchCount').textContent = records.length === 0 ? t('lobby.countZero') : records.length === 1 ? t('lobby.countOne') : t('lobby.countMany', { count: records.length });
      list.replaceChildren();
      if (!records.length) {
        const empty = document.createElement('div'); empty.className = 'empty-state';
        const mark = document.createElement('span'); mark.className = 'empty-mark'; mark.textContent = '3105';
        const title = document.createElement('strong'); title.textContent = t('lobby.emptyTitle');
        const note = document.createElement('span'); note.textContent = t('lobby.emptyText');
        empty.append(mark, title, note); list.append(empty); return;
      }
      for (const record of records) {
        const card = document.createElement('article'); card.className = 'patch-entry';
        const info = document.createElement('div'); info.className = 'patch-entry-info';
        const title = document.createElement('strong'); title.textContent = record.name;
        const file = document.createElement('span'); file.className = 'patch-file'; file.textContent = record.fileName;
        const date = document.createElement('span'); date.className = 'patch-meta';
        const action = record.action === 'created' || record.action === 'Creado' ? t('msg.created') : t('msg.edited');
        date.textContent = `${action} · ${new Date(record.savedAt).toLocaleString(window.locale3105?.() || 'es-ES')} · ${formatSize(record.bytes)}`;
        info.append(title, file, date);
        const download = document.createElement('button'); download.type = 'button'; download.className = 'secondary download-patch'; download.textContent = t('msg.download'); download.addEventListener('click', () => {
          const url = URL.createObjectURL(record.blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = record.fileName; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1500);
        });
        card.append(info, download); list.append(card);
      }
    } catch (error) {
      $('patchCount').textContent = t('msg.localHistory');
      const empty = document.createElement('div'); empty.className = 'empty-state';
      const title = document.createElement('strong'); title.textContent = t('msg.historyUnavailableTitle');
      const note = document.createElement('span'); note.textContent = t('msg.historyUnavailableHint');
      empty.append(title, note); list.replaceChildren(empty);
      console.warn('No se pudo cargar el historial 3105', error);
    }
  }
  window.render3105Library = renderLibrary;
  renderLibrary();

  const originalBuildHandler = $('buildBtn')?.onclick;
  if (typeof originalBuildHandler === 'function') {
    $('buildBtn').onclick = async function (event) {
      if (document.querySelector('input[name="mode"]:checked')?.value === 'create' && $('routeChoice')?.value === 'custom') {
        try { window.validateRoute($('customRouteInput')?.value.trim() || ''); }
        catch (error) { window.setStatus?.('Error: ' + error.message, 'err'); $('customRouteInput')?.focus(); return; }
      }
      let captured = null; const originalCreate = URL.createObjectURL;
      URL.createObjectURL = function (object) { if (object instanceof Blob) captured = object; return originalCreate.call(URL, object); };
      try { await originalBuildHandler.call(this, event); }
      finally { URL.createObjectURL = originalCreate; if (captured) { try { await savePatchRecord(captured); } catch (error) { console.warn(error); window.setStatus?.('Patch generado, pero no se pudo guardar en el Lobby. Descárgalo ahora y conserva una copia.', 'err'); } } }
    };
  }

  const originalOpenPatch = window.openPatch;
  if (typeof originalOpenPatch === 'function') {
    window.openPatch = async function (file) {
      if (!file?.name?.toLowerCase().endsWith('.3105')) throw new Error('Solo se aceptan archivos con extensión .3105.');
      return originalOpenPatch(file);
    };
  }
  const originalExtract = window.extractContents;
  if (typeof originalExtract === 'function') {
    window.extractContents = async function (file, ...rest) {
      if (!file?.name?.toLowerCase().endsWith('.3105')) throw new Error('Solo se aceptan archivos con extensión .3105.');
      return originalExtract(file, ...rest);
    };
  }

  function guard3105Picker(inputId, statusId) {
    const input = $(inputId);
    input?.addEventListener('change', (event) => {
      const file = input.files?.[0];
      if (!file || file.name.toLowerCase().endsWith('.3105')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      input.value = '';
      if (inputId === 'patchFile' && typeof state !== 'undefined') state.patch = null;
      const message = 'Archivo rechazado: selecciona uno cuyo nombre termine en .3105.';
      const output = $(statusId);
      if (output) { output.textContent = window.translate3105Message?.(message) || message; output.classList.remove('ok'); output.classList.add('err'); }
      if (inputId === 'patchFile') window.setStatus?.(message, 'err');
    }, true);
  }
  guard3105Picker('patchFile', 'status');
  guard3105Picker('extractFile', 'extractStatus');

  function addStrict3105Dialog(inputId, statusId) {
    const input = $(inputId);
    if (!input) return;
    let opening = false;
    input.addEventListener('click', (event) => {
      if (input.dataset.nativeFallback === 'true') {
        delete input.dataset.nativeFallback;
        return;
      }
      if (typeof window.showOpenFilePicker !== 'function') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (opening) return;
      opening = true;
      window.showOpenFilePicker({
        multiple: false,
        excludeAcceptAllOption: true,
        types: [{ description: 'Archivos de patch .3105', accept: { 'application/octet-stream': ['.3105'] } }]
      }).then(async (handles) => {
        if (!handles.length) return;
        const file = await handles[0].getFile();
        if (!file.name.toLowerCase().endsWith('.3105')) throw new Error('El selector solo permite archivos .3105.');
        const transfer = new DataTransfer();
        transfer.items.add(file);
        input.files = transfer.files;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }).catch((error) => {
        if (error?.name === 'AbortError') return;
        input.dataset.nativeFallback = 'true';
        const output = $(statusId);
        if (output) output.textContent = window.translate3105Message?.('No se pudo abrir el selector filtrado. Toca de nuevo y usa el filtro .3105 del selector del navegador.') || 'No se pudo abrir el selector filtrado. Toca de nuevo y usa el filtro .3105 del selector del navegador.';
      }).finally(() => { opening = false; });
    }, true);
  }
  addStrict3105Dialog('patchFile', 'status');
  addStrict3105Dialog('extractFile', 'extractStatus');

  const extractButton = $('extractBtn');
  if (extractButton) extractButton.onclick = () => {
    const file = $('extractFile')?.files?.[0];
    if (!file) { window.set3105ExtractStatus('Selecciona aquí un archivo que termine en .3105.'); return; }
    if (!file.name.toLowerCase().endsWith('.3105')) {
      $('extractFile').value = '';
      window.set3105ExtractStatus('Archivo rechazado: solo se aceptan archivos .3105.');
      return;
    }
    window.extractContents(file).catch((error) => {
      window.set3105ExtractStatus('Error: ' + error.message);
      window.setStatus?.('Error: ' + error.message, 'err');
    });
  };

  document.addEventListener('contextmenu', (event) => event.preventDefault());
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const zoomShortcut = (event.ctrlKey || event.metaKey) && (key === '+' || key === '=' || key === '-' || key === '0');
    const inspectShortcut = event.key === 'F12' || ((event.ctrlKey || event.metaKey) && key === 'u') || (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key));
    if (zoomShortcut || inspectShortcut) { event.preventDefault(); event.stopPropagation(); }
  }, true);
  document.addEventListener('gesturestart', (event) => event.preventDefault(), { passive: false });
  document.addEventListener('touchmove', (event) => { if (event.touches?.length > 1) event.preventDefault(); }, { passive: false });
  document.addEventListener('dragstart', (event) => { if (event.target?.tagName === 'IMG') event.preventDefault(); });
  $('menuBtn')?.addEventListener('keydown', (event) => { if (event.key === 'Tab' && menu?.classList.contains('open') && event.shiftKey) { event.preventDefault(); menu.querySelector('.nav-item:last-child')?.focus(); } });
})();
