# 🎵 Conversor MP4 para MP3 API

API desenvolvida em **Node.js** que permite realizar o upload de arquivos **MP4** e convertê-los automaticamente para **MP3**, disponibilizando o áudio para download.

Projeto focado em **manipulação de arquivos**, **processamento de mídia** e boas práticas de backend.

---

## 📌 Funcionalidades

* ✅ Upload de arquivos MP4
* ✅ Conversão automática para MP3
* ✅ Extração de áudio via FFmpeg
* ✅ Download do arquivo convertido
* ✅ Validação de arquivos enviados
* ✅ Tratamento de erros centralizado

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* Multer (upload de arquivos)
* FFmpeg
* JavaScript (ES Modules)
* File System (fs)

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 ├── services/
 ├── tmp/uploads/
 └── app.js
server.js
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/GabrielPanjos/conversor-mp4-para-mp3.git
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Dependência de Conversão de Mídia

O projeto utiliza **FFmpeg via ffmpeg-static**, portanto **não é necessária instalação manual do FFmpeg** no sistema operacional.

O binário é incluído automaticamente nas dependências do projeto, garantindo maior portabilidade e facilidade de execução.

✅ Conversão de mídia sem necessidade de instalação externa

---

### 4️⃣ Execute o servidor

```bash
npm run dev
```

ou

```bash
npm start
```

---

## 🔄 Fluxo da Aplicação

```text
Upload MP4
   ↓
Validação do arquivo
   ↓
Conversão com FFmpeg
   ↓
Geração do MP3
   ↓
Download do áudio
```

---

## 📡 Endpoint Principal

### Upload e Conversão

```http
POST /convert
```

**Body:** multipart/form-data

| Campo | Tipo | Descrição        |
| ----- | ---- | ---------------- |
| file  | mp4  | Arquivo de vídeo |

---

## 📈 Conceitos Aplicados

* Manipulação de arquivos no backend
* Processamento de mídia
* Middleware de upload
* Organização em camadas
* Tratamento seguro de erros

---

## 👨‍💻 Autor

**Gabriel Pereira**

GitHub: [https://github.com/GabrielPanjos](https://github.com/GabrielPanjos)

---

## ⭐ Objetivo do Projeto

Projeto desenvolvido para estudo de:

* APIs backend
* Upload de arquivos
* Processamento de mídia
* Integração com ferramentas externas

---

## 📄 Licença

MIT License
