class Mineral {
    id: string;
    nombre: string;
    group: string;
    hardness: number;
    grainSize: string;
    classification: string;
    crystalSize: number;
    formationTemperature: number;
    structure: string;
    grainShape: string;
    texture: string;
}

interface MineralValidator {
    validate: (mineral: Mineral) => boolean;
}

interface TemperatureConverter {
    convert: (temperature: number) => number;
}

class IgneasValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        if (mineral.group === 'igneas' && mineral.grainSize === 'granoMuyGrueso') {
            document.write("Values for roca Igneas<br/>");
            return true;
        }
        return false;
    }
}

class MetamorficasValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        if (mineral.group === 'metamorficas' && (mineral.grainSize === 'granoMedio' || mineral.grainSize === 'granoFino') && mineral.texture === 'vitrea') {
            document.write("Values for roca Metamorficas<br/>");
            return true;
        }
        return false;
    }
}

class SedimentariaValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        if (mineral.group === 'sedimentarias' && mineral.texture === 'faneritica') {
            document.write("Values for roca Sedimentaria<br/>");
            return true;
        }
        return false;
    }
}

class CelsiusToFahrenheitConverter implements TemperatureConverter {
    convert(temperature: number): number {
        return (temperature * 9 / 5) + 32;
    }
}

document.getElementById("mineral-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var mineral = new Mineral();

    mineral.id = (document.getElementById("id") as HTMLInputElement).value;
    mineral.nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    mineral.group = (document.getElementById("group") as HTMLInputElement).value;
    mineral.hardness = Number((document.getElementById("hardness") as HTMLInputElement).value);
    mineral.grainSize = (document.getElementById("grainSize") as HTMLInputElement).value;
    mineral.classification = (document.getElementById("classification") as HTMLInputElement).value;
    mineral.crystalSize = Number((document.getElementById("crystalSize") as HTMLInputElement).value);
    mineral.formationTemperature = Number((document.getElementById("formationTemperature") as HTMLInputElement).value);
    mineral.structure = (document.getElementById("structure") as HTMLInputElement).value;
    mineral.grainShape = (document.getElementById("grainShape") as HTMLInputElement).value;
    mineral.texture = (document.getElementById("texture") as HTMLInputElement).value;

    var validators = [new IgneasValidator(), new MetamorficasValidator(), new SedimentariaValidator()];
    var validated = validators.some(validator => validator.validate(mineral));

    if (validated) {
        document.write(`Id: ${mineral.id}<br>`);
        document.write(`Nombre: ${mineral.nombre}<br>`);
        document.write(`Grupo: ${mineral.group}<br>`);
        document.write(`Dureza: ${mineral.hardness}<br>`);
        document.write(`Tamaño de Grano: ${mineral.grainSize}<br>`);
        document.write(`Clasificación: ${mineral.classification}<br>`);
        document.write(`Tamaño de Cristales: ${mineral.crystalSize}<br>`);
        document.write(`Temperatura de Formación: ${mineral.formationTemperature}<br>`);
        document.write(`Estructura: ${mineral.structure}<br>`);
        document.write(`Forma de los Granos: ${mineral.grainShape}<br>`);
        document.write(`Textura: ${mineral.texture}<br>`);
    } else {
        document.write(':(<br/>');
    }
});



document.getElementById("mineral-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let formationTemperature = Number((document.getElementById("formationTemperature") as HTMLInputElement).value);
    let converter = new CelsiusToFahrenheitConverter();
    let convertedTemperature = converter.convert(formationTemperature);
});



/*ruben*/

interface EspañolHTML {
    dameSelect(): string;
}

class HTMLBootStrap implements EspañolHTML {
    public dameSelect(): string {
        return `

            <header>
            <h2>MÓDULO LUNAR </h2>
            <img src="https://i.pinimg.com/originals/13/15/f7/1315f713e0950b373003a6ae2fb77858.gif"/>
            </header>

            <div class="container">
                <div class="row">

                    <div class="col-1"></div>
                    <div class="col-10 form-control">

                        <form id="mineral-form">

                        <div>
                        <label for="id">Id (Format: LLDDDDLL): </label><br>
                        <input type="text" id="id" pattern="[a-zA-Z]{2}[0-9]{4}[a-zA-Z]{2}" required><br>
                        </div>

                        <div>
                        <label for="nombre">Nombre: </label><br>
                        <input type="text" id="nombre" required><br>
                        </div>

                        <div>
                        <label for="group">Grupo/Origen: </label><br>
                        <select id="group" required>
                            <option value="igneas">Ígneas</option>
                            <option value="metamorficas">Metamórficas</option>
                            <option value="sedimentarias">Sedimentarias</option>
                        </select><br>
                        </div>

                        <div>
                        <label for="hardness">Dureza (1 - 10): </label><br>
                        <input type="number" id="hardness" min="1" max="10" required><br>
                        </div>

                        <div>
                        <label for="grainSize">Tamaño de Grano: </label><br>
                        <select id="grainSize" required>
                            <option value="granoMuyGrueso">Grano Muy Grueso (>30 mm)</option>
                            <option value="granoGrueso">Grano Grueso (5 - 30 mm)</option>
                            <option value="granoMedio">Grano Medio (2 - 5 mm)</option>
                            <option value="granoFino">Grano Fino (< 2 mm)</option>
                        </select><br />
                        </div>

                        <div>
                        <label for="classification">Clasificación: </label>
                        <br>
                        <textarea id="classification" required></textarea><br />
                        </div>

                        <div>
                        <label for="crystalSize">Tamaño de Cristales (0 - 10): </label><br>
                        <input type="number" id="crystalSize" min="0" max="10" required><br>
                        </div>

                        <div>
                        <label for="formationTemperature">Temperatura de Formación (-100 - 100): </label><br>
                        <input type="number" id="formationTemperature" min="-100" max="100" required><br>
                        </div>

                        <div>
                        <label for="structure">Estructura: </label><br>
                        <textarea id="structure" required></textarea><br>
                        </div>

                        <div>
                        <label for="grainShape">Forma de los Granos: </label><br>
                        <textarea id="grainShape" required></textarea><br />
                        </div>

                        <div>
                        <label for="texture">Textura: </label><br>
                        <select id="texture" required>
                            <option value="vitrea">Vitrea</option>
                            <option value="afanitica">Afanítica</option>
                            <option value="faneritica">Fanerítica</option>
                        </select><br />
                        </div>

                        <div>
                        <button type="submit" id="imprimir">Imprimir</button>
                        </div>
                
                    </form>

                    </div>
                    <div class="col-1"></div>

        </div>
    </div>

    <style>
        body {
            background-image: url("https://i.ytimg.com/vi/ZIhgRY3vLmc/maxresdefault.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 240px;
        }

        header {
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h2 {
            color: white;
            font-family: 'Tenorite', sans-serif;
        }

        img {
            height: 100px;
            width: 130px;
        }

        p, label {
            color: black;
            font-family: 'Tenorite', sans-serif;
        }

        a.navbar-brand {
            white-space: normal;
            text-align: center;
            word-break: break-all;
        }

        .form {
            box-shadow: 0 0 0 0.5px;
            font-family: 'Tenorite', sans-serif;
            background-color: black;
            opacity: 0.1;
        }

        select {
            bottom-padding: 10px;
        }

        a {
            color: #0077cc;
        }

        .btn-primary, .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
            color: #fff;
            background-color: #1b6ec2;
            border-color: #1861ac;
        }

        @media (min-width: 768px) {
            html {
                font-size: 16px;
            }
        }

        .border-top, .border-bottom {
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
        }

        .box-shadow {
            box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
        }

        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            white-space: nowrap;
            line-height: 60px;
        }
        </style>


    `;
    }
}

function insertForm(formHtml: string, containerId: string): void {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = formHtml;
    }
}

const formHtml = new HTMLBootStrap().dameSelect();
insertForm(formHtml, "mineral-display");

/*ruben*/