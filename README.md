# Buscador de Sinônimos para Microsoft Edge

[![Licença](https://img.shields.io/badge/Licença-MIT-blue.svg)](LICENSE)

Extensão para Microsoft Edge que permite buscar definições e sinônimos de palavras **localmente** a partir de arquivos XML organizados por letra inicial. 

---

## Índice
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Consulta Local](#consulta-local)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Funcionalidades
✅ Busca **offline** usando arquivos XML locais  
✅ Suporte a busca via clique direito em textos selecionados  
✅ Organização automática por letra inicial (ex: `Felicidade` → `F.xml`)  
✅ Tratamento de acentuação e caracteres especiais [[6]]  

---

## Pré-requisitos
- Microsoft Edge (versão 120 ou superior)
- **Arquivos XML já inclusos** na pasta `/xmls` (não requer download adicional)  
- Codificação UTF-8 nos arquivos XML para evitar erros de caracteres [[4]]

---

## Instalação
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DaviEduardoDev/ext-sinonimos-pt.git
