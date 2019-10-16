方式一：下载dist文件夹。然后再本地服务器上打开index.html（可以用vscode打开，然后装个live server，go live即可）。

**Tip: built files are meant to be served over an HTTP server.
  Opening index.html over file:// won't work.**



方式二：下载所有文件，先装node，再安装vue
```
cd ‘对应的文件夹’
npm install 
npm run dev
```