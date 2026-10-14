(() => {
  'use strict';
  const LANGS = ['es', 'en', 'pt', 'vi'];
  const L = {
    'meta.title': ['3105 Studio · Editor de patches', '3105 Studio · Patch editor', '3105 Studio · Editor de patches', '3105 Studio · Trình chỉnh sửa patch'],
    'meta.description': ['Crea, edita y extrae patches 3105.', 'Create, edit, and extract 3105 patches.', 'Crie, edite e extraia patches 3105.', 'Tạo, chỉnh sửa và giải nén patch 3105.'],
    'app.controls': ['Controles de la aplicación', 'App controls', 'Controles do aplicativo', 'Điều khiển ứng dụng'],
    'menu.open': ['Abrir menú lateral', 'Open side menu', 'Abrir menu lateral', 'Mở menu bên'],
    'menu.close': ['Cerrar menú lateral', 'Close side menu', 'Fechar menu lateral', 'Đóng menu bên'],
    'menu.title': ['Menú lateral', 'Side menu', 'Menu lateral', 'Menu bên'],
    'nav.sections': ['Secciones', 'Sections', 'Seções', 'Mục'],
    'language.label': ['Idioma', 'Language', 'Idioma', 'Ngôn ngữ'],
    'language.select': ['Elegir idioma', 'Choose language', 'Escolher idioma', 'Chọn ngôn ngữ'],
    'install.button': ['Instalar app', 'Install app', 'Instalar app', 'Cài đặt ứng dụng'],
    'appearance.choose': ['Elegir apariencia', 'Choose appearance', 'Escolher aparência', 'Chọn giao diện'],
    'appearance.heading': ['Apariencia', 'Appearance', 'Aparência', 'Giao diện'],
    'appearance.system': ['Sistema', 'System', 'Sistema', 'Theo hệ thống'],
    'appearance.light': ['Claro', 'Light', 'Claro', 'Sáng'],
    'appearance.dark': ['Oscuro', 'Dark', 'Escuro', 'Tối'],
    'appearance.buttonSystem': ['Apariencia: Sistema ({mode})', 'Appearance: System ({mode})', 'Aparência: Sistema ({mode})', 'Giao diện: Hệ thống ({mode})'],
    'appearance.buttonMode': ['Apariencia: {mode}', 'Appearance: {mode}', 'Aparência: {mode}', 'Giao diện: {mode}'],
    'menu.localNote': ['Los archivos se quedan en tu dispositivo.', 'Your files stay on this device.', 'Seus arquivos ficam neste dispositivo.', 'Tệp luôn nằm trên thiết bị này.'],
    'nav.lobby': ['Lobby', 'Lobby', 'Lobby', 'Sảnh'],
    'nav.edit': ['Editar Patch', 'Edit Patch', 'Editar patch', 'Chỉnh sửa patch'],
    'nav.create': ['Crear Patch', 'Create Patch', 'Criar patch', 'Tạo patch'],
    'nav.extract': ['Extraer Patch', 'Extract Patch', 'Extrair patch', 'Giải nén patch'],
    'nav.info': ['Info', 'Info', 'Info', 'Thông tin'],
    'hero.title': ['Patches 3105', '3105 patches', 'Patches 3105', 'Patch 3105'],
    'hero.subtitle': ['Crea, edita y extrae tus patches.', 'Create, edit, and extract your patches.', 'Crie, edite e extraia seus patches.', 'Tạo, chỉnh sửa và giải nén patch của bạn.'],
    'lobby.eyebrow': ['TUS PATCHES', 'YOUR PATCHES', 'SEUS PATCHES', 'PATCH CỦA BẠN'],
    'lobby.intro': ['Tus patches aparecen aquí para que puedas descargarlos cuando los necesites.', 'Your patches show up here so you can download them whenever you need.', 'Seus patches aparecem aqui para você baixar quando precisar.', 'Patch của bạn sẽ hiện ở đây để bạn tải xuống khi cần.'],
    'lobby.countZero': ['0 patches', '0 patches', '0 patches', '0 patch'],
    'lobby.countOne': ['1 patch', '1 patch', '1 patch', '1 patch'],
    'lobby.countMany': ['{count} patches', '{count} patches', '{count} patches', '{count} patch'],
    'lobby.emptyTitle': ['Todavía no hay patches', 'No patches yet', 'Ainda não há patches', 'Chưa có patch nào'],
    'lobby.emptyText': ['Cuando crees o edites uno, aparecerá aquí.', 'Any patch you create or edit will appear here.', 'Quando você criar ou editar um patch, ele vai aparecer aqui.', 'Patch bạn tạo hoặc chỉnh sửa sẽ xuất hiện ở đây.'],
    'lobby.storage': ['El historial se guarda en este navegador. Si borras sus datos, también se borra el historial.', 'Your history is saved in this browser. Clearing site data will erase it.', 'O histórico fica salvo neste navegador. Se você apagar os dados do site, ele também será apagado.', 'Lịch sử được lưu trong trình duyệt này. Xóa dữ liệu trang web cũng sẽ xóa lịch sử.'],
    'info.eyebrow': ['ACERCA DEL PROYECTO', 'ABOUT THIS PROJECT', 'SOBRE O PROJETO', 'VỀ DỰ ÁN'],
    'info.repository': ['Repositorio oficial:', 'Official repository:', 'Repositório oficial:', 'Kho lưu trữ chính thức:'],
    'info.dev': ['Dev', 'Dev', 'Dev', 'Dev'],
    'info.developer': ['3105, hecho por Flexzin.', '3105, made by Flexzin.', '3105, feito por Flexzin.', '3105, được phát triển bởi Flexzin.'],
    'info.channel': ['Canal oficial:', 'Official channel:', 'Canal oficial:', 'Kênh chính thức:'],
    'info.store': ['Flexzin Store', 'Flexzin Store', 'Flexzin Store', 'Flexzin Store'],
    'work.tools': ['Herramientas de patches', 'Patch tools', 'Ferramentas de patch', 'Công cụ patch'],
    'work.mode': ['Modo de trabajo', 'Work mode', 'Modo de trabalho', 'Chế độ làm việc'],
    'work.eyebrow': ['HERRAMIENTAS', 'TOOLS', 'FERRAMENTAS', 'CÔNG CỤ'],
    'edit.fileLabel': ['Patch .3105', '.3105 patch', 'Patch .3105', 'Patch .3105'],
    'edit.drop': ['Elige un archivo .3105.', 'Choose a .3105 file.', 'Escolha um arquivo .3105.', 'Chọn tệp .3105.'],
    'create.bundleLabel': ['Bundle ID', 'Bundle ID', 'Bundle ID', 'Bundle ID'],
    'create.bundleCustom': ['Otro (escribir Bundle ID)', 'Other (enter a Bundle ID)', 'Outro (digitar Bundle ID)', 'Khác (nhập Bundle ID)'],
    'create.bundleCustomLabel': ['Bundle ID personalizado', 'Custom Bundle ID', 'Bundle ID personalizado', 'Bundle ID tùy chỉnh'],
    'create.bundleHint': ['Usa el formato de puntos inversos, por ejemplo com.empresa.juego. Al elegir uno propio, indica también la ruta de destino.', 'Use reverse-domain format, for example com.company.game. You will also need to enter the destination path.', 'Use o formato de domínio invertido, por exemplo com.empresa.jogo. Você também vai precisar informar o caminho de destino.', 'Dùng định dạng tên miền ngược, ví dụ com.congty.game. Bạn cũng cần nhập đường dẫn đích.'],
    'create.routeLabel': ['Ruta destino', 'Destination path', 'Caminho de destino', 'Đường dẫn đích'],
    'route.suggested': ['Usar una ruta sugerida', 'Use a suggested path', 'Usar um caminho sugerido', 'Dùng đường dẫn gợi ý'],
    'route.autoAssigned': ['La ruta se asigna automáticamente', 'The path is assigned automatically', 'O caminho é definido automaticamente', 'Đường dẫn được tự động gán'],
    'route.custom': ['Escribir una ruta', 'Enter a path', 'Digitar um caminho', 'Nhập đường dẫn'],
    'route.customLabel': ['Ruta relativa personalizada', 'Custom relative path', 'Caminho relativo personalizado', 'Đường dẫn tương đối tùy chỉnh'],
    'route.placeholder': ['carpeta/archivo.ext', 'folder/file.ext', 'pasta/arquivo.ext', 'thumuc/tep.ext'],
    'route.hint': ['Escribe una ruta relativa. No puede empezar por «/» ni contener «..».', 'Enter a relative path. It cannot start with “/” or contain “..”.', 'Digite um caminho relativo. Ele não pode começar com “/” nem conter “..”.', 'Nhập đường dẫn tương đối. Không được bắt đầu bằng “/” hoặc chứa “..”.'],
    'asset.typeLabel': ['Tipo de asset', 'Asset type', 'Tipo de asset', 'Loại asset'],
    'asset.avatar': ['Avatar', 'Avatar', 'Avatar', 'Avatar'],
    'asset.shader': ['Shader', 'Shader', 'Shader', 'Shader'],
    'asset.characterShaders': ['Shaders PJ', 'Character shaders', 'Shaders de personagem', 'Shader nhân vật'],
    'patch.nameLabel': ['Nombre del patch', 'Patch name', 'Nome do patch', 'Tên patch'],
    'patch.namePlaceholder': ['Aimdrag', 'Aimdrag', 'Aimdrag', 'Aimdrag'],
    'patch.filenameLabel': ['Nombre del archivo de salida', 'Output file name', 'Nome do arquivo de saída', 'Tên tệp đầu ra'],
    'patch.filenameDefault': ['patch.3105', 'patch.3105', 'patch.3105', 'patch.3105'],
    'route.relativeLabel': ['Ruta relativa del archivo', 'Relative file path', 'Caminho relativo do arquivo', 'Đường dẫn tương đối của tệp'],
    'route.existingPlaceholder': ['Selecciona una ruta existente...', 'Choose an existing path...', 'Selecione um caminho existente...', 'Chọn đường dẫn có sẵn...'],
    'route.generatedPlaceholder': ['La ruta se determina según tipo de asset y Bundle ID', 'The path is based on the asset type and Bundle ID', 'O caminho depende do tipo de asset e do Bundle ID', 'Đường dẫn dựa trên loại asset và Bundle ID'],
    'route.editHint': ['Al editar se conserva la ruta. Al crear, puedes usar una sugerida o escribir otra.', 'Editing keeps the existing path. When creating, use a suggested path or enter your own.', 'Ao editar, o caminho original é mantido. Ao criar, use uma sugestão ou digite outro.', 'Khi chỉnh sửa, đường dẫn cũ được giữ nguyên. Khi tạo mới, hãy dùng đường dẫn gợi ý hoặc nhập đường dẫn khác.'],
    'view.editHint': ['Elige el patch que quieres cambiar.', 'Choose the patch you want to change.', 'Escolha o patch que deseja alterar.', 'Chọn patch bạn muốn chỉnh sửa.'],
    'view.createHint': ['Elige un asset y completa los datos.', 'Choose an asset and fill in the details.', 'Escolha um asset e preencha os dados.', 'Chọn asset và điền thông tin.'],
    'view.extractHint': ['Elige un archivo .3105 para guardar sus archivos en un ZIP.', 'Choose a .3105 file to save its contents as a ZIP.', 'Escolha um arquivo .3105 para salvar o conteúdo em um ZIP.', 'Chọn tệp .3105 để lưu nội dung vào tệp ZIP.'],
    'asset.fileLabel': ['Archivo/asset de reemplazo', 'Replacement file/asset', 'Arquivo/asset para substituir', 'Tệp/asset thay thế'],
    'asset.optional': ['(opcional al editar: vacío = dejar el actual)', '(optional when editing: leave empty to keep current)', '(opcional ao editar: vazio = manter o atual)', '(không bắt buộc khi chỉnh sửa: để trống để giữ nguyên)'],
    'asset.drop': ['Arrastra aquí el asset que quieres incluir.', 'Drop the asset you want to include here.', 'Arraste aqui o asset que deseja incluir.', 'Kéo asset bạn muốn thêm vào đây.'],
    'edit.load': ['Cargar datos del patch', 'Load patch data', 'Carregar dados do patch', 'Tải dữ liệu patch'],
    'patch.build': ['Generar y descargar patch', 'Build and download patch', 'Gerar e baixar patch', 'Tạo và tải patch'],
    'status.ready': ['Listo.', 'Ready.', 'Pronto.', 'Sẵn sàng.'],
    'extract.title': ['Extraer contenido del patch', 'Extract patch contents', 'Extrair conteúdo do patch', 'Giải nén nội dung patch'],
    'extract.intro': ['Guarda en un ZIP los archivos que contiene el patch.', 'Save the files inside the patch to a ZIP.', 'Salve em um ZIP os arquivos que estão no patch.', 'Lưu các tệp trong patch vào một tệp ZIP.'],
    'extract.fileLabel': ['Patch que quieres extraer', 'Patch to extract', 'Patch que você quer extrair', 'Patch cần giải nén'],
    'extract.protectionLabel': ['Protección del patch', 'Patch protection', 'Proteção do patch', 'Bảo vệ patch'],
    'extract.noPassword': ['Sin contraseña', 'No password', 'Sem senha', 'Không có mật khẩu'],
    'extract.hasPassword': ['Tiene contraseña', 'Password protected', 'Tem senha', 'Có mật khẩu'],
    'extract.passwordLabel': ['Contraseña del patch', 'Patch password', 'Senha do patch', 'Mật khẩu patch'],
    'extract.passwordPlaceholder': ['Escribe la contraseña', 'Enter the password', 'Digite a senha', 'Nhập mật khẩu'],
    'extract.button': ['Extraer contenido', 'Extract contents', 'Extrair conteúdo', 'Giải nén nội dung'],
    'footer.note': ['Los archivos se procesan en tu dispositivo. Guarda otra copia si la necesitas.', 'Files are processed on your device. Keep another copy if you need one.', 'Os arquivos são processados no seu dispositivo. Guarde outra cópia se precisar.', 'Tệp được xử lý trên thiết bị của bạn. Hãy lưu thêm một bản nếu cần.'],
    'appearance.systemLower': ['sistema', 'system', 'sistema', 'hệ thống'],
    'appearance.lightLower': ['claro', 'light', 'claro', 'sáng'],
    'appearance.darkLower': ['oscuro', 'dark', 'escuro', 'tối'],
    'status.errorPrefix': ['Error', 'Error', 'Erro', 'Lỗi'],
    'msg.plist': ['El archivo no es un plist binario válido.', 'This is not a valid binary plist.', 'O arquivo não é um plist binário válido.', 'Tệp này không phải là plist nhị phân hợp lệ.'],
    'msg.unsupportedType': ['Tipo de plist no compatible: {type}.', 'Unsupported plist type: {type}.', 'Tipo de plist não compatível: {type}.', 'Loại plist không được hỗ trợ: {type}.'],
    'msg.unsupportedValue': ['No se puede guardar este tipo de valor.', 'This value type cannot be saved.', 'Não é possível salvar esse tipo de valor.', 'Không thể lưu loại giá trị này.'],
    'msg.bundlePath': ['Para este Bundle ID, escribe una ruta de destino.', 'Enter a destination path for this Bundle ID.', 'Para este Bundle ID, informe um caminho de destino.', 'Hãy nhập đường dẫn đích cho Bundle ID này.'],
    'msg.bundleInvalid': ['El Bundle ID no tiene un formato válido. Usa segmentos separados por puntos, como com.empresa.juego.', 'That Bundle ID format is not valid. Use dot-separated parts, such as com.company.game.', 'Esse formato de Bundle ID não é válido. Use partes separadas por pontos, como com.empresa.jogo.', 'Định dạng Bundle ID không hợp lệ. Hãy dùng các phần cách nhau bằng dấu chấm, ví dụ com.congty.game.'],
    'msg.noRules': ['El patch no contiene reglas.', 'This patch has no rules.', 'Este patch não contém regras.', 'Patch này không có quy tắc nào.'],
    'msg.bundleInPatch': ['Bundle ID no válido en el patch: {id}.', 'Invalid Bundle ID in patch: {id}.', 'Bundle ID inválido no patch: {id}.', 'Bundle ID không hợp lệ trong patch: {id}.'],
    'msg.notPatch': ['El archivo no empieza con 3105PATCH.', 'The file does not start with 3105PATCH.', 'O arquivo não começa com 3105PATCH.', 'Tệp không bắt đầu bằng 3105PATCH.'],
    'msg.hasPassword': ['El patch sí tiene contraseña. Elige «Tiene contraseña».', 'This patch is password-protected. Choose “Password protected”.', 'Este patch tem senha. Selecione “Tem senha”.', 'Patch này có mật khẩu. Hãy chọn “Có mật khẩu”.'],
    'msg.noPassword': ['El patch no tiene contraseña. Elige «Sin contraseña».', 'This patch is not password-protected. Choose “No password”.', 'Este patch não tem senha. Selecione “Sem senha”.', 'Patch này không có mật khẩu. Hãy chọn “Không có mật khẩu”.'],
    'msg.enterPassword': ['Escribe la contraseña del patch.', 'Enter the patch password.', 'Digite a senha do patch.', 'Nhập mật khẩu patch.'],
    'msg.badRoute': ['La ruta debe ser relativa, sin segmentos vacíos, «..» ni barras invertidas.', 'The path must be relative and cannot contain empty segments, “..”, or backslashes.', 'O caminho deve ser relativo e não pode conter segmentos vazios, “..” ou barras invertidas.', 'Đường dẫn phải là đường dẫn tương đối, không có phần trống, “..” hoặc dấu gạch chéo ngược.'],
    'msg.enterName': ['Escribe el nombre del patch.', 'Enter a name for the patch.', 'Digite um nome para o patch.', 'Nhập tên patch.'],
    'msg.chooseAsset': ['Para crear un patch, primero elige un archivo o asset.', 'Choose a file or asset before creating a patch.', 'Escolha um arquivo ou asset antes de criar o patch.', 'Hãy chọn tệp hoặc asset trước khi tạo patch.'],
    'msg.loadFirst': ['Primero carga el patch que quieres editar.', 'Load the patch you want to edit first.', 'Carregue primeiro o patch que deseja editar.', 'Hãy tải patch cần chỉnh sửa trước.'],
    'msg.noRuleToUpdate': ['No hay ninguna regla para actualizar.', 'There is no rule to update.', 'Não há nenhuma regra para atualizar.', 'Không có quy tắc nào để cập nhật.'],
    'msg.patchLoaded': ['Patch cargado: {name}\nReglas: {count}', 'Patch loaded: {name}\nRules: {count}', 'Patch carregado: {name}\nRegras: {count}', 'Đã tải patch: {name}\nSố quy tắc: {count}'],
    'msg.extracted': ['Contenido extraído: {name}', 'Contents extracted: {name}', 'Conteúdo extraído: {name}', 'Đã giải nén nội dung: {name}'],
    'msg.generated': ['Patch generado: {file}\nNombre: {name}\nTamaño: {size} bytes', 'Patch created: {file}\nName: {name}\nSize: {size} bytes', 'Patch gerado: {file}\nNome: {name}\nTamanho: {size} bytes', 'Đã tạo patch: {file}\nTên: {name}\nDung lượng: {size} byte'],
    'msg.assetLoaded': ['Asset cargado: {file} ({size} bytes)', 'Asset loaded: {file} ({size} bytes)', 'Asset carregado: {file} ({size} bytes)', 'Đã tải asset: {file} ({size} byte)'],
    'msg.pickPatch': ['Elige primero un patch .3105.', 'Choose a .3105 patch first.', 'Escolha primeiro um patch .3105.', 'Hãy chọn patch .3105 trước.'],
    'msg.extractPick': ['Selecciona un patch .3105.', 'Choose a .3105 patch.', 'Selecione um patch .3105.', 'Hãy chọn patch .3105.'],
    'msg.extractSummary': ['Extraído: {count} archivo(s), {size} bytes en {file}', 'Extracted: {count} file(s), {size} bytes to {file}', 'Extraído: {count} arquivo(s), {size} bytes em {file}', 'Đã giải nén: {count} tệp, {size} byte vào {file}'],
    'msg.localHistory': ['Historial local', 'Local history', 'Histórico local', 'Lịch sử trên thiết bị'],
    'msg.historyUnavailable': ['No se pudo abrir el historial. Puedes seguir usando las demás herramientas.', 'Could not open history. You can still use the other tools.', 'Não foi possível abrir o histórico. Você ainda pode usar as outras ferramentas.', 'Không thể mở lịch sử. Bạn vẫn có thể dùng các công cụ khác.'],
    'msg.historyUnavailableTitle': ['No se pudo abrir el historial', 'Could not open history', 'Não foi possível abrir o histórico', 'Không thể mở lịch sử'],
    'msg.historyUnavailableHint': ['Puedes seguir usando las demás herramientas.', 'You can still use the other tools.', 'Você ainda pode usar as outras ferramentas.', 'Bạn vẫn có thể dùng các công cụ khác.'],
    'msg.historySaveFailed': ['El patch se generó, pero no se pudo guardar en el Lobby. Descárgalo y guarda una copia.', 'The patch was created, but could not be saved to the Lobby. Download it and keep a copy.', 'O patch foi gerado, mas não pôde ser salvo no Lobby. Baixe-o e guarde uma cópia.', 'Patch đã được tạo nhưng không thể lưu vào Sảnh. Hãy tải xuống và giữ một bản sao.'],
    'msg.indexedDBUnavailable': ['Este navegador no permite guardar el historial local.', 'This browser does not support local history.', 'Este navegador não permite salvar o histórico local.', 'Trình duyệt này không hỗ trợ lưu lịch sử trên thiết bị.'],
    'msg.historyOpenFailed': ['No se pudo abrir el almacenamiento local.', 'Could not open local storage.', 'Não foi possível abrir o armazenamento local.', 'Không thể mở bộ nhớ trên thiết bị.'],
    'msg.only3105': ['Solo se aceptan archivos con extensión .3105.', 'Only files with the .3105 extension are accepted.', 'Só são aceitos arquivos com a extensão .3105.', 'Chỉ chấp nhận tệp có đuôi .3105.'],
    'msg.pickerOnly3105': ['El selector solo permite archivos .3105.', 'The picker only allows .3105 files.', 'O seletor só permite arquivos .3105.', 'Trình chọn chỉ cho phép tệp .3105.'],
    'msg.reject3105': ['Archivo rechazado: selecciona uno cuyo nombre termine en .3105.', 'File rejected: choose one whose name ends in .3105.', 'Arquivo recusado: escolha um cujo nome termine em .3105.', 'Tệp bị từ chối: hãy chọn tệp có tên kết thúc bằng .3105.'],
    'msg.filteredPickerFailed': ['No se pudo abrir el selector filtrado. Toca de nuevo y usa el filtro .3105 del navegador.', 'Could not open the filtered picker. Try again and use the browser’s .3105 filter.', 'Não foi possível abrir o seletor filtrado. Tente novamente e use o filtro .3105 do navegador.', 'Không mở được trình chọn đã lọc. Hãy thử lại và dùng bộ lọc .3105 của trình duyệt.'],
    'msg.selectHere': ['Selecciona aquí un archivo que termine en .3105.', 'Choose a file ending in .3105 here.', 'Selecione aqui um arquivo que termine em .3105.', 'Chọn tệp có tên kết thúc bằng .3105 tại đây.'],
    'msg.rejectExtract': ['Archivo rechazado: solo se aceptan archivos .3105.', 'File rejected: only .3105 files are accepted.', 'Arquivo recusado: só são aceitos arquivos .3105.', 'Tệp bị từ chối: chỉ chấp nhận tệp .3105.'],
    'msg.routeEdit': ['Ruta relativa del archivo', 'Relative file path', 'Caminho relativo do arquivo', 'Đường dẫn tương đối của tệp'],
    'msg.routeCreate': ['Ruta relativa del archivo destino', 'Relative destination path', 'Caminho relativo do arquivo de destino', 'Đường dẫn tương đối của tệp đích'],
    'msg.download': ['Descargar', 'Download', 'Baixar', 'Tải xuống'],
    'msg.created': ['Creado', 'Created', 'Criado', 'Đã tạo'],
    'msg.edited': ['Editado', 'Edited', 'Editado', 'Đã chỉnh sửa']
  };
  let lang = 'es';
  try { const saved = localStorage.getItem('3105-language'); if (LANGS.includes(saved)) lang = saved; } catch (_) {}
  const index = () => LANGS.indexOf(lang);
  const t = (key, vars = {}) => {
    const row = L[key];
    let out = row ? row[index()] : key;
    return out.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`);
  };
  const sourceMessages = {
    'No es un binary plist': 'msg.plist',
    'Valor no soportado': 'msg.unsupportedValue',
    'Para este Bundle ID escribe una ruta destino personalizada.': 'msg.bundlePath',
    'El Bundle ID no tiene un formato válido. Usa segmentos separados por puntos, como com.empresa.juego.': 'msg.bundleInvalid',
    'El patch no contiene reglas.': 'msg.noRules',
    'El archivo no empieza con 3105PATCH': 'msg.notPatch',
    'El patch sí tiene contraseña. Selecciona “Tiene contraseña”.': 'msg.hasPassword',
    'El patch no tiene contraseña. Selecciona “Sin contraseña”.': 'msg.noPassword',
    'Escribe la contraseña del patch.': 'msg.enterPassword',
    'La ruta debe ser relativa, sin segmentos vacíos, \'..\' ni barras invertidas.': 'msg.badRoute',
    'Escribe el nombre del patch.': 'msg.enterName',
    'Para crear un patch nuevo debes elegir un archivo/asset.': 'msg.chooseAsset',
    'Carga primero el patch existente.': 'msg.loadFirst',
    'No hay una regla para actualizar.': 'msg.noRuleToUpdate',
    'Elige un patch .3105 primero.': 'msg.pickPatch',
    'Selecciona un patch .3105.': 'msg.extractPick',
    'Historial local': 'msg.localHistory',
    'Este navegador no permite guardar el historial local.': 'msg.indexedDBUnavailable',
    'No se pudo abrir el historial local.': 'msg.historyOpenFailed',
    'Solo se aceptan archivos con extensión .3105.': 'msg.only3105',
    'El selector solo permite archivos .3105.': 'msg.pickerOnly3105',
    'No se pudo abrir el selector filtrado. Toca de nuevo y usa el filtro .3105 del selector del navegador.': 'msg.filteredPickerFailed',
    'Selecciona aquí un archivo que termine en .3105.': 'msg.selectHere',
    'Archivo rechazado: solo se aceptan archivos .3105.': 'msg.rejectExtract'
  };
  const translateMessage = (raw) => {
    const s = String(raw ?? '');
    if (sourceMessages[s]) return t(sourceMessages[s]);
    let m;
    if ((m = s.match(/^Tipo binary plist no soportado: (.+)$/))) return t('msg.unsupportedType', { type: m[1] });
    if ((m = s.match(/^Bundle ID no válido en el patch: (.*)\.$/))) return t('msg.bundleInPatch', { id: m[1] });
    if ((m = s.match(/^Patch cargado: (.*)\nReglas: (\d+)$/))) return t('msg.patchLoaded', { name: m[1], count: m[2] });
    if ((m = s.match(/^Generado correctamente: (.*)\nNombre: (.*)\nTamaño: (.*) bytes$/))) return t('msg.generated', { file: m[1], name: m[2], size: m[3] });
    if ((m = s.match(/^Asset cargado: (.*) \((.*) bytes\)$/))) return t('msg.assetLoaded', { file: m[1], size: m[2] });
    if ((m = s.match(/^Extraído: (\d+) archivo\(s\), (.*) bytes en (.*)$/))) return t('msg.extractSummary', { count: m[1], size: m[2], file: m[3] });
    if ((m = s.match(/^Contenido extraído correctamente: (.*)$/))) return t('msg.extracted', { name: m[1] });
    if ((m = s.match(/^Error: (.*)$/s))) return `${t('status.errorPrefix')}: ${translateMessage(m[1])}`;
    if (s.startsWith('Archivo rechazado: selecciona uno cuyo nombre termine en .3105.')) return t('msg.reject3105');
    if (s.startsWith('Patch generado, pero no se pudo guardar en el Lobby.')) return t('msg.historySaveFailed');
    if (s.startsWith('No se pudo abrir el historial')) return t('msg.historyUnavailable');
    return s;
  };
  const applyLanguage = (next = lang) => {
    if (!LANGS.includes(next)) next = 'es';
    lang = next;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)); });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => { el.setAttribute('title', t(el.dataset.i18nTitle)); });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => { el.setAttribute('content', t(el.dataset.i18nContent)); });
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = lang;
    document.title = t('meta.title');
    try { localStorage.setItem('3105-language', lang); } catch (_) {}
    document.dispatchEvent(new CustomEvent('3105:language-change', { detail: { language: lang } }));
  };
  window.t = t;
  window.translate3105Message = translateMessage;
  window.set3105ExtractStatus = (text) => {
    const node = document.getElementById('extractStatus');
    if (node) node.textContent = translateMessage(text);
  };
  window.current3105Language = () => lang;
  window.locale3105 = () => ({ es: 'es-ES', en: 'en-US', pt: 'pt-BR', vi: 'vi-VN' }[lang]);
  document.getElementById('languageSelect')?.addEventListener('change', (event) => applyLanguage(event.target.value));
  applyLanguage(lang);
})();
