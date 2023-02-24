const canvas = $('gameCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
    alert("Not supported by browser");
}
