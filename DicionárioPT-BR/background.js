chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: "buscar-sinonimos",
      title: "Buscar Sinônimos",
      contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "buscar-sinonimos") {
      const palavra = info.selectionText.trim();
      if (palavra) {
          chrome.storage.local.set({ palavraSelecionada: palavra }, () => {
              // Abre o popup do ícone da extensão
              chrome.action.openPopup();
          });
      }
  }
});