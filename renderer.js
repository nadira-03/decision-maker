const { ipcRenderer } = require("electron");

const minimize = document.getElementById("minimize");
const close = document.getElementById("close");

if (minimize) {
    minimize.addEventListener("click", () => {
        ipcRenderer.send("minimize");
    });
}

if (close) {
    close.addEventListener("click", () => {
        ipcRenderer.send("close");
    });
}

document.getElementById("minimize")
    .addEventListener("click", () => {
        ipcRenderer.send("minimize");
    });


document.getElementById("close")
    .addEventListener("click", () => {
        ipcRenderer.send("close");
    });