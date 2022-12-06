"use strict";
exports.__esModule = true;
function generadorDeId(arregloDeId) {
    var id = Math.floor(Math.random() * (1 + 1000) - 1);
    for (var i = 0; i < arregloDeId.length; i++) {
        if (arregloDeId[i] === id) {
            id = Math.floor(Math.random() * (1 + 1000) - 1);
            i = 0;
        }
    }
    arregloDeId.push(id);
    return id;
}
exports["default"] = generadorDeId;
