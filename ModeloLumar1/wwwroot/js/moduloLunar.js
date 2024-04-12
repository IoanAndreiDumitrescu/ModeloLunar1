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
var HTMLBootStrap = /** @class */ (function () {
    function HTMLBootStrap() {
    }
    HTMLBootStrap.prototype.dameSelect = function () {
        return "\n\n            <header>\n            <h2>M\u00D3DULO LUNAR </h2>\n            <img src=\"https://i.pinimg.com/originals/13/15/f7/1315f713e0950b373003a6ae2fb77858.gif\"/>\n            </header>\n\n            <div class=\"container\">\n                <div class=\"row\">\n\n                    <div class=\"col-1\"></div>\n                    <div class=\"col-10 form-control\">\n\n                        <form id=\"mineral-form\">\n\n                        <div>\n                        <label for=\"id\">Id (Format: LLDDDDLL): </label><br>\n                        <input type=\"text\" id=\"id\" pattern=\"[a-zA-Z]{2}[0-9]{4}[a-zA-Z]{2}\" required><br>\n                        </div>\n\n                        <div>\n                        <label for=\"nombre\">Nombre: </label><br>\n                        <input type=\"text\" id=\"nombre\" required><br>\n                        </div>\n\n                        <div>\n                        <label for=\"group\">Grupo/Origen: </label><br>\n                        <select id=\"group\" required>\n                            <option value=\"igneas\">\u00CDgneas</option>\n                            <option value=\"metamorficas\">Metam\u00F3rficas</option>\n                            <option value=\"sedimentarias\">Sedimentarias</option>\n                        </select><br>\n                        </div>\n\n                        <div>\n                        <label for=\"hardness\">Dureza (1 - 10): </label><br>\n                        <input type=\"number\" id=\"hardness\" min=\"1\" max=\"10\" required><br>\n                        </div>\n\n                        <div>\n                        <label for=\"grainSize\">Tama\u00F1o de Grano: </label><br>\n                        <select id=\"grainSize\" required>\n                            <option value=\"granoMuyGrueso\">Grano Muy Grueso (>30 mm)</option>\n                            <option value=\"granoGrueso\">Grano Grueso (5 - 30 mm)</option>\n                            <option value=\"granoMedio\">Grano Medio (2 - 5 mm)</option>\n                            <option value=\"granoFino\">Grano Fino (< 2 mm)</option>\n                        </select><br />\n                        </div>\n\n                        <div>\n                        <label for=\"classification\">Clasificaci\u00F3n: </label>\n                        <br>\n                        <textarea id=\"classification\" required></textarea><br />\n                        </div>\n\n                        <div>\n                        <label for=\"crystalSize\">Tama\u00F1o de Cristales (0 - 10): </label><br>\n                        <input type=\"number\" id=\"crystalSize\" min=\"0\" max=\"10\" required><br>\n                        </div>\n\n                        <div>\n                        <label for=\"formationTemperature\">Temperatura de Formaci\u00F3n (-100 - 100): </label><br>\n                        <input type=\"number\" id=\"formationTemperature\" min=\"-100\" max=\"100\" required><br>\n                        </div>\n\n                        <div>\n                        <label for=\"structure\">Estructura: </label><br>\n                        <textarea id=\"structure\" required></textarea><br>\n                        </div>\n\n                        <div>\n                        <label for=\"grainShape\">Forma de los Granos: </label><br>\n                        <textarea id=\"grainShape\" required></textarea><br />\n                        </div>\n\n                        <div>\n                        <label for=\"texture\">Textura: </label><br>\n                        <select id=\"texture\" required>\n                            <option value=\"vitrea\">Vitrea</option>\n                            <option value=\"afanitica\">Afan\u00EDtica</option>\n                            <option value=\"faneritica\">Faner\u00EDtica</option>\n                        </select><br />\n                        </div>\n\n                        <div>\n                        <button type=\"submit\" id=\"imprimir\">Imprimir</button>\n                        </div>\n                \n                    </form>\n\n                    </div>\n                    <div class=\"col-1\"></div>\n\n        </div>\n    </div>\n\n    <style>\n        body {\n            background-image: url(\"https://i.ytimg.com/vi/ZIhgRY3vLmc/maxresdefault.jpg\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            margin-bottom: 240px;\n        }\n\n        header {\n            height: 20vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n        h2 {\n            color: white;\n            font-family: 'Tenorite', sans-serif;\n        }\n\n        img {\n            height: 100px;\n            width: 130px;\n        }\n\n        p, label {\n            color: black;\n            font-family: 'Tenorite', sans-serif;\n        }\n\n        a.navbar-brand {\n            white-space: normal;\n            text-align: center;\n            word-break: break-all;\n        }\n\n        .form {\n            box-shadow: 0 0 0 0.5px;\n            font-family: 'Tenorite', sans-serif;\n            background-color: black;\n            opacity: 0.1;\n        }\n\n        select {\n            bottom-padding: 10px;\n        }\n\n        a {\n            color: #0077cc;\n        }\n\n        .btn-primary, .nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n            color: #fff;\n            background-color: #1b6ec2;\n            border-color: #1861ac;\n        }\n\n        @media (min-width: 768px) {\n            html {\n                font-size: 16px;\n            }\n        }\n\n        .border-top, .border-bottom {\n            border-top: 1px solid #e5e5e5;\n            border-bottom: 1px solid #e5e5e5;\n        }\n\n        .box-shadow {\n            box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n        }\n\n        .footer {\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            white-space: nowrap;\n            line-height: 60px;\n        }\n        </style>\n\n\n    ";
    };
    return HTMLBootStrap;
}());
function insertForm(formHtml, containerId) {
    var container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = formHtml;
    }
}
var formHtml = new HTMLBootStrap().dameSelect();
insertForm(formHtml, "mineral-display");
/*ruben*/ 
//# sourceMappingURL=moduloLunar.js.map