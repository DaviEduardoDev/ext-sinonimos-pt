# Buscador de Sinônimos para Microsoft Edge

[![Licença](https://img.shields.io/badge/Licença-MIT-blue.svg)](LICENSE)  
[![Versão do Edge](https://img.shields.io/badge/Edge-120%2B-green)](https://www.microsoft.com/edge)

Extensão para Microsoft Edge que permite buscar **definições e sinônimos de palavras** localmente a partir de arquivos XML organizados por letra inicial. Suporta busca via popup e menu de contexto (clique direito).

---

## Visão Geral
Esta extensão permite buscar definições e sinônimos de palavras **offline**, utilizando arquivos XML locais organizados por letra inicial (ex: `A.xml`, `B.xml`). A busca pode ser realizada via popup da extensão ou através do menu de contexto (clique direito) em textos selecionados.

---

## Funcionalidades
✅ **Busca offline** usando arquivos XML locais  
✅ **Menu de contexto** para busca por clique direito em textos selecionados  
✅ **Organização automática** por letra inicial (ex: `Felicidade` → `F.xml`)  
✅ **Tratamento de acentuação** e caracteres especiais  
✅ **Interface simples e intuitiva com exemplos de uso**  

---

## Pré-requisitos
- Microsoft Edge (versão 120 ou superior)
- Arquivos XML na pasta `/xmls` (já inclusos no repositório)
- Codificação **UTF-8** nos arquivos XML para evitar erros  

---

## Instalação
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DaviEduardoDev/ext-sinonimos-pt.git

---

## Carregue a extensão no Edge:
- Acesse edge://extensions/
- Ative o modo "Developer mode/Modo de desenvolvedor"
- Clique em "Load unpacked" ou "Load packet" e selecione a pasta do projeto ou o arquivo ZIP.

## Como Usar
Via Popup:
- Clique no ícone da extensão na barra de ferramentas
- Digite uma palavra e clique em "Buscar"
- O resultado será exibido diretamente do arquivo XML local

## Via Clique Com Botão Direito do Mouse
- Selecione uma palavra em qualquer página web
- Clique com o botão direito → "Buscar Sinônimos"
- O popup será aberto automaticamente com o resultado
