var Mineral = /** @class */ (function () {
    function Mineral() {
    }
    return Mineral;
}());
var IgneasValidator = /** @class */ (function () {
    function IgneasValidator() {
    }
    IgneasValidator.prototype.validate = function (mineral) {
        if (mineral.group === 'igneas' && mineral.grainSize === 'granoMuyGrueso') {
            document.write("Values for roca Igneas<br/>");
            return true;
        }
        return false;
    };
    return IgneasValidator;
}());
var MetamorficasValidator = /** @class */ (function () {
    function MetamorficasValidator() {
    }
    MetamorficasValidator.prototype.validate = function (mineral) {
        if (mineral.group === 'metamorficas' && (mineral.grainSize === 'granoMedio' || mineral.grainSize === 'granoFino') && mineral.texture === 'vitrea') {
            document.write("Values for roca Metamorficas<br/>");
            return true;
        }
        return false;
    };
    return MetamorficasValidator;
}());
var SedimentariaValidator = /** @class */ (function () {
    function SedimentariaValidator() {
    }
    SedimentariaValidator.prototype.validate = function (mineral) {
        if (mineral.group === 'sedimentarias' && mineral.texture === 'faneritica') {
            document.write("Values for roca Sedimentaria<br/>");
            return true;
        }
        return false;
    };
    return SedimentariaValidator;
}());
var CelsiusToFahrenheitConverter = /** @class */ (function () {
    function CelsiusToFahrenheitConverter() {
    }
    CelsiusToFahrenheitConverter.prototype.convert = function (temperature) {
        return (temperature * 9 / 5) + 32;
    };
    return CelsiusToFahrenheitConverter;
}());
document.getElementById("mineral-form").addEventListener("submit", function (event) {
    event.preventDefault();
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
    var validators = [new IgneasValidator(), new MetamorficasValidator(), new SedimentariaValidator()];
    var validated = validators.some(function (validator) { return validator.validate(mineral); });
    if (validated) {
        document.write("Id: ".concat(mineral.id, "<br>"));
        document.write("Nombre: ".concat(mineral.nombre, "<br>"));
        document.write("Grupo: ".concat(mineral.group, "<br>"));
        document.write("Dureza: ".concat(mineral.hardness, "<br>"));
        document.write("Tama\u00F1o de Grano: ".concat(mineral.grainSize, "<br>"));
        document.write("Clasificaci\u00F3n: ".concat(mineral.classification, "<br>"));
        document.write("Tama\u00F1o de Cristales: ".concat(mineral.crystalSize, "<br>"));
        document.write("Temperatura de Formaci\u00F3n: ".concat(mineral.formationTemperature, "<br>"));
        document.write("Estructura: ".concat(mineral.structure, "<br>"));
        document.write("Forma de los Granos: ".concat(mineral.grainShape, "<br>"));
        document.write("Textura: ".concat(mineral.texture, "<br>"));
    }
    else {
        document.write(':(<br/>');
    }
});
document.getElementById("mineral-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var formationTemperature = Number(document.getElementById("formationTemperature").value);
    var converter = new CelsiusToFahrenheitConverter();
    var convertedTemperature = converter.convert(formationTemperature);
});
var MuestraHtmlAmericano = /** @class */ (function () {
    function MuestraHtmlAmericano() {
    }
    MuestraHtmlAmericano.prototype.dameContenido = function (mineral) {
        return ("<p> Identifier: ".concat(mineral.id, " </p> \n                 <p> Name: ").concat(mineral.nombre, " </p> \n                 <p> Group: ").concat(mineral.group, " </p>\n                 <p> Hardness: ").concat(mineral.hardness, " </p> \n                 <p> Grain Size: ").concat(mineral.grainSize, " </p> \n                 <p> Sort: ").concat(mineral.classification, " </p>\n                 <p> Cristal Size: ").concat(mineral.crystalSize, " </p>\n                 <p> Formation Temperature: ").concat(mineral.formationTemperature, " </p> \n                 <p> Structure: ").concat(mineral.structure, " </p> \n                 <p> Forms Grain: ").concat(mineral.grainShape, " </p>\n                 <p> Texture: ").concat(mineral.texture, " </p>"));
    };
    return MuestraHtmlAmericano;
}());
var MuestraHTMLEuropeo = /** @class */ (function () {
    function MuestraHTMLEuropeo() {
    }
    MuestraHTMLEuropeo.prototype.dameContenido = function (mineral) {
        return ("< p > Identicador: ".concat(mineral.id, " </p> \n            < p > Nombre: ").concat(mineral.nombre, " </p> \n            < p > Grupo: ").concat(mineral.group, " </p>\n            < p > Dureza: ").concat(mineral.hardness, " </p> \n            < p > Tama\u00F1o Grano: ").concat(mineral.grainSize, " </p> \n            < p > Clasificacion: ").concat(mineral.classification, " </p>\n            < p > Tama\u00F1o Cristales: ").concat(mineral.crystalSize, " </p>\n            < p > Temperatura: ").concat(mineral.formationTemperature, " </p> \n            < p > Estructura: ").concat(mineral.structure, " </p> \n            < p > Forma Granos: ").concat(mineral.grainShape, " </p>\n            < p > Textura: ").concat(mineral.texture, " </p>"));
    };
    return MuestraHTMLEuropeo;
}());
//# sourceMappingURL=moduloLunar.js.map