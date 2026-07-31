const { app, BrowserWindow, ipcMain } = require("electron");


let win;


function createWindow() {

    win = new BrowserWindow({
        width: 400,
        height: 400,
        resizable: false,
        maximizable: false,
        fullscreenable: false,

        frame: false,

        transparent: false,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });


    win.loadFile("index.html");
}


// Create window
app.whenReady().then(createWindow);


// Minimise button
ipcMain.on("minimize", () => {
    if (win) {
        win.minimize();
    }
});


// Close button
ipcMain.on("close", () => {
    if (win) {
        win.close();
    }
});


// Quit app when all windows close
app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {
        app.quit();
    }

});