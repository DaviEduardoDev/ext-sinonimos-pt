document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('palavraSelecionada', (data) => {
        if (data.palavraSelecionada) {
            document.getElementById('palavra').value = data.palavraSelecionada;
            document.getElementById('buscar').click();
            chrome.storage.local.remove('palavraSelecionada');
        }
    });
});

document.getElementById('buscar').addEventListener('click', () => {
    const palavra = document.getElementById('palavra').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (!palavra) {
        resultadoDiv.innerHTML = 'Digite uma palavra válida.';
        return;
    }

    const primeiraLetra = palavra[0].toUpperCase();
    const xmlFile = `xmls/${primeiraLetra}.xml`;

    fetch(xmlFile)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            
            const entries = xml.querySelectorAll('entry');
            let encontrado = false;

            entries.forEach(entry => {
                const termo = entry.querySelector('orth')?.textContent.toLowerCase();
                if (termo === palavra.toLowerCase()) {
                    const definicoes = Array.from(entry.querySelectorAll('def'))
                        .map(def => def.textContent.trim().replace(/_/g, ''))
                        .join('; ');
                    
                    resultadoDiv.innerHTML = `<strong>Definições:</strong> ${definicoes}`;
                    encontrado = true;
                }
            });

            if (!encontrado) {
                resultadoDiv.innerHTML = 'Palavra não encontrada.';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            resultadoDiv.innerHTML = 'Erro ao carregar o arquivo.';
        });
});