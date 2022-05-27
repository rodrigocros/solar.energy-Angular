export interface IunidadeConsumidora{
    id:any ;
    apelido:string;
    local:string;
    marca:string;
    modelo:string;
    ativo:boolean;
}

export interface IEnergiaGerada{
    id:number;
    mesAno:string ;
    totalKw:number;
}