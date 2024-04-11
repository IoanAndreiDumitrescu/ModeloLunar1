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


interface Imuestra {
    dameContenido(mineral: Mineral): string;
}


class MuestraHtmlAmericano implements Imuestra {
    dameContenido(mineral: Mineral): string {
        return (`<p> Identifier: ${mineral.id} </p> 
                 <p> Name: ${mineral.nombre} </p> 
                 <p> Group: ${mineral.group} </p>
                 <p> Hardness: ${mineral.hardness} </p> 
                 <p> Grain Size: ${mineral.grainSize} </p> 
                 <p> Sort: ${mineral.classification} </p>
                 <p> Cristal Size: ${mineral.crystalSize} </p>
                 <p> Formation Temperature: ${mineral.formationTemperature} </p> 
                 <p> Structure: ${mineral.structure} </p> 
                 <p> Forms Grain: ${mineral.grainShape} </p>
                 <p> Texture: ${mineral.texture} </p>`);

    }

}

class MuestraHTMLEuropeo implements Imuestra {
    dameContenido(mineral: Mineral): string {

    return (`< p > Identicador: ${mineral.id} </p> 
            < p > Nombre: ${mineral.nombre} </p> 
            < p > Grupo: ${mineral.group} </p>
            < p > Dureza: ${mineral.hardness} </p> 
            < p > Tamaño Grano: ${mineral.grainSize} </p> 
            < p > Clasificacion: ${mineral.classification} </p>
            < p > Tamaño Cristales: ${mineral.crystalSize} </p>
            < p > Temperatura: ${mineral.formationTemperature} </p> 
            < p > Estructura: ${mineral.structure} </p> 
            < p > Forma Granos: ${mineral.grainShape} </p>
            < p > Textura: ${mineral.texture} </p>`);

    }

}

        
    


