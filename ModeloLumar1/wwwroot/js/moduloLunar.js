var Mineral = /** @class */ (function () {
    function Mineral() {
    }
    return Mineral;
}());
var IgneasValidator = /** @class */ (function () {
    function IgneasValidator() {
    }
    IgneasValidator.prototype.validate = function (mineral) {
        return mineral.group === 'igneas' && mineral.grainSize === 'granoMuyGrueso';
    };
    return IgneasValidator;
}());
document.getElementById("mineral-form").addEventListener("submit", function (event) {
    var mineral = new Mineral();
    mineral.id = document.getElementById("id").value;
    mineral.nombre = document.getElementById("nombre").value;
    mineral.group = document.getElementById("group").value;
    mineral.hardness = Number(document.getElementById("hardness").value);
    mineral.grainSize = document.getElementById("grainSize").value;
    mineral.classification = document.getElementById("classification").value;
    mineral.crystalSize = Number(document.getElementById("crystalSize").value);
    mineral.formationTemperature = Number(document.getElementById("formationTemperature").value);
    mineral.structure = document.getElementById("structure").value;
    mineral.grainShape = document.getElementById("grainShape").value;
    mineral.texture = document.getElementById("texture").value;
    var validator = new IgneasValidator();
    if (validator.validate(mineral)) {
        document.write("Id: ".concat(mineral.id, "<br/>"));
        document.write("Nombre: ".concat(mineral.nombre, "<br/>"));
        document.write("Grupo: ".concat(mineral.group, "<br/>"));
        document.write("Dureza: ".concat(mineral.hardness, "<br/>"));
        document.write("Tama\u00F1o de Grano: ".concat(mineral.grainSize, "<br/>"));
        document.write("Clasificaci\u00F3n: ".concat(mineral.classification, "<br/>"));
        document.write("Tama\u00F1o de Cristales: ".concat(mineral.crystalSize, "<br/>"));
        document.write("Temperatura de Formaci\u00F3n: ".concat(mineral.formationTemperature, "<br/>"));
        document.write("Estructura: ".concat(mineral.structure, "<br/>"));
        document.write("Forma de los Granos: ".concat(mineral.grainShape, "<br/>"));
        document.write("Textura: ".concat(mineral.texture, "<br/>"));
    }
    else {
        document.write(':(<br/>');
    }
});
//# sourceMappingURL=moduloLunar.js.map