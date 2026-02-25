# 🎵 Conversor MP4 para MP3

API desenvolvida em **Node.js** que realiza a conversão de arquivos
**MP4** para **MP3** utilizando **FFmpeg**.\
O projeto permite converter vídeos em áudio e disponibilizar o arquivo
convertido para download através de uma rota específica.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   🔄 Conversão de arquivos MP4 para MP3
-   📥 Recebimento do nome/caminho do arquivo para conversão
-   📤 Download do arquivo convertido
-   ⚙️ Estrutura organizada com rotas e middlewares
-   🧠 Tratamento de erros centralizado

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   Node.js
-   Express
-   Fluent-FFmpeg
-   FFmpeg
-   JavaScript

------------------------------------------------------------------------

## 📦 Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

-   Node.js (v16 ou superior)
-   npm
-   FFmpeg instalado e configurado no PATH do sistema

Verifique se o FFmpeg está instalado corretamente:

``` bash
ffmpeg -version
```

------------------------------------------------------------------------

## 📥 Instalação

``` bash
git clone https://github.com/GabrielPanjos/conversor-mp4-para-mp3.git
cd conversor-mp4-para-mp3
npm install
```

------------------------------------------------------------------------

## ▶️ Executando o Projeto

Modo desenvolvimento:

``` bash
npm run dev
```

Modo produção:

``` bash
npm start
```

O servidor iniciará na porta configurada no projeto (por padrão, 3000).

------------------------------------------------------------------------

## 📡 Rotas da API

### 🔄 Converter MP4 para MP3

``` http
POST /converse?fileMp4=nome_do_arquivo
```

**Parâmetro (query):**

-   `fileMp4` → Nome ou caminho do arquivo MP4

**Resposta de sucesso:**

``` json
{
  "message": "Arquivo convertido com sucesso!",
  "fileName": "nome_do_arquivo.mp3"
}
```

------------------------------------------------------------------------

### 📥 Download do arquivo convertido

``` http
GET /download/:mp3Path
```

Exemplo:

``` http
GET /download/video.mp3
```

Retorna o arquivo MP3 convertido para download.

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

``` text
src/
 ├── controllers/
 ├── middlewares/
 ├── routes/
 ├── tmp/
 │    ├── uploads/
 │    └── converted/
server.js
package.json
```

------------------------------------------------------------------------

## 🧠 Como Funciona

1.  O usuário envia o nome/caminho do arquivo MP4.
2.  O servidor localiza o arquivo na pasta de uploads.
3.  O FFmpeg realiza a conversão para MP3.
4.  O arquivo convertido é salvo na pasta `converted`.
5.  O usuário pode baixar o arquivo através da rota de download.

------------------------------------------------------------------------

## 📌 Possíveis Melhorias Futuras

-   Upload direto de arquivos via formulário
-   Autenticação de usuários
-   Deploy em ambiente cloud
-   Testes automatizados
-   Dockerização

------------------------------------------------------------------------

## 📄 Licença

Este projeto está sob a licença ISC.
