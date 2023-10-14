const { app, BrowserWindow } = require("electron");
const serve = require("electron-serve");

const loadURL = serve({ directory: "out" }); // Assuming 'out' is the directory where your Next.js static files are

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  loadURL(mainWindow); // Use the loadURL function from electron-serve to load local static files

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
