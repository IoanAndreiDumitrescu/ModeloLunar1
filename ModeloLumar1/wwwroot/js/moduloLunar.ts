class Mineral {
    constructor(
        public id: string = "",
        public nombre: string = "",
        public group: string = "",
        public hardness: number = 0,
        public grainSize: string = "",
        public classification: string = "",
        public crystalSize: number = 0,
        public formationTemperature: number = 0,
        public structure: string = "",
        public grainShape: string = "",
        public texture: string = "") { }
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
            console.log("Values for roca Igneas<br/>");
            return true;
        }
        return false;
    }
}

class MetamorficasValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        if (mineral.group === 'metamorficas' && (mineral.grainSize === 'granoMedio' || mineral.grainSize === 'granoFino') && mineral.texture === 'vitrea') {
            console.log("Values for roca Metamorficas<br/>");
            return true;
        }
        return false;
    }
}

class SedimentariaValidator implements MineralValidator {
    validate(mineral: Mineral): boolean {
        if (mineral.group === 'sedimentarias' && mineral.texture === 'faneritica') {
            console.log("Values for roca Sedimentaria<br/>");
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
    let formationTemperature = Number((document.getElementById("formationTemperature") as HTMLInputElement).value);
    let converter = new CelsiusToFahrenheitConverter();
    let convertedTemperature = converter.convert(formationTemperature);
});

document.getElementById("imprimir").addEventListener("click", function (event) {
    event.preventDefault();
    let muestraOptions = document.getElementById("muestra-format") as HTMLSelectElement;
    let selectedMuestra = muestraOptions.options[muestraOptions.selectedIndex].value;
    let mineral = new Mineral();
    mineral.nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    mineral.id = (document.getElementById("id") as HTMLInputElement).value;
    //... fill other properties
    let muestra: Imuestra | null = null;
    if (selectedMuestra === 'MuestraHtmlAmericano') {
        muestra = new MuestraHtmlAmericano();
    } else if (selectedMuestra === 'MuestraHTMLEuropeo') {
        muestra = new MuestraHTMLEuropeo();
    }
    if(muestra){
        const content = muestra.dameContenido(mineral);
        const outputDiv = document.getElementById('muestra-format');
        outputDiv.innerHTML = content;
    }else{
        console.log('Muestra not selected');
    }
});

interface Imuestra {
    dameContenido(mineral: Mineral): string;
}


class MuestraHtmlAmericano implements Imuestra {
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

class MuestraHTMLEuropeo implements Imuestra {
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