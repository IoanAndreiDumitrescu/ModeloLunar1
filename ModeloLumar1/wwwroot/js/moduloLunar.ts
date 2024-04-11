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

class IgneasValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        return mineral.group === 'igneas' && mineral.grainSize === 'granoMuyGrueso';
    }
}

document.getElementById("mineral-form").addEventListener("submit", function (event) {

    let mineral = new Mineral();
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

    let validator = new IgneasValidator();

    if (validator.validate(mineral)) {
        document.write(`Id: ${mineral.id}<br/>`);
        document.write(`Nombre: ${mineral.nombre}<br/>`);
        document.write(`Grupo: ${mineral.group}<br/>`);
        document.write(`Dureza: ${mineral.hardness}<br/>`);
        document.write(`Tamaño de Grano: ${mineral.grainSize}<br/>`);
        document.write(`Clasificación: ${mineral.classification}<br/>`);
        document.write(`Tamaño de Cristales: ${mineral.crystalSize}<br/>`);
        document.write(`Temperatura de Formación: ${mineral.formationTemperature}<br/>`);
        document.write(`Estructura: ${mineral.structure}<br/>`);
        document.write(`Forma de los Granos: ${mineral.grainShape}<br/>`);
        document.write(`Textura: ${mineral.texture}<br/>`);
    } else {
        document.write(':(<br/>');
    }
});