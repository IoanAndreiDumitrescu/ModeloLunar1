class Mineral {
    public id: string = "";
    public nombre: string = "";
    public group: string = "";
    public hardness: number = 0;
    public grainSize: string = "";
    public classification: string = "";
    public crystalSize: number = 0;
    public formationTemperature: number = 0;
    public structure: string = "";
    public grainShape: string = "";
    public texture: string = "";
}

interface MineralValidator {
    validate: (mineral: Mineral) => boolean;
}


interface ImuestraMineralValidator {
    dameContenido(mineral: Mineral): string;
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





document.getElementById("muestra-format").addEventListener("change", function(event) {
    updateOutput();
});


function updateOutput() {
    let mineral = new Mineral();
    mineral.nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    mineral.id = (document.getElementById("id") as HTMLInputElement).value;
    mineral.hardness = Number((document.getElementById("hardness") as HTMLInputElement).value);
    mineral.grainSize = (document.getElementById("grainSize") as HTMLInputElement).value;
    mineral.classification = (document.getElementById("classification") as HTMLInputElement).value;
    mineral.crystalSize = Number((document.getElementById("crystalSize") as HTMLInputElement).value);
    mineral.formationTemperature = Number((document.getElementById("formationTemperature") as HTMLInputElement).value);
    mineral.structure = (document.getElementById("structure") as HTMLInputElement).value
    mineral.texture = (document.getElementById("texture") as HTMLInputElement).value

    let muestraHtml: ImuestraMineralValidator;
    let selectedFormat = (document.getElementById("muestra-format") as HTMLSelectElement).value;
    if (selectedFormat === 'MuestraHtmlAmericano') {
        muestraHtml = new MuestraHtmlAmericano();
    } else if (selectedFormat === 'MuestraHTMLEuropeo') {
        muestraHtml = new MuestraHTMLEuropeo();
    }
}




class MuestraHtmlAmericano implements ImuestraMineralValidator {
    dameContenido(mineral: Mineral): string {
        return `
            <p>Identifier: ${mineral.id}</p>
            <p>Name: ${mineral.nombre}</p>
            <p>Group: ${mineral.group}</p>
            <p>Hardness: ${mineral.hardness}</p>
            <p>Grain Size: ${mineral.grainSize}</p>
            <p>Sort: ${mineral.classification}</p>
            <p>Crystal Size: ${mineral.crystalSize}</p>
            <p>Formation Temperature: ${mineral.formationTemperature}</p>
            <p>Structure: ${mineral.structure}</p>
            <p>Grain Form: ${mineral.grainShape}</p>
            <p>Texture: ${mineral.texture}</p>`;
    }
}

class MuestraHTMLEuropeo implements ImuestraMineralValidator {
    dameContenido(mineral: Mineral): string {
        return `
            <p>Identicador: ${mineral.id}</p>
            <p>Nombre: ${mineral.nombre}</p>
            <p>Grupo: ${mineral.group}</p>
            <p>Dureza: ${mineral.hardness}</p>
            <p>Tamaño de grano: ${mineral.grainSize}</p>
            <p>Clasificacion: ${mineral.classification}</p>
            <p>Tamaño de cristales: ${mineral.crystalSize}</p>
            <p>Temperatura de formación: ${mineral.formationTemperature}</p>
            <p>Estructura: ${mineral.structure}</p>
            <p>Forma de grano: ${mineral.grainShape}</p>
            <p>Textura: ${mineral.texture}</p>`;
    }
}