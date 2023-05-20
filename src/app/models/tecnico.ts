export interface Tecnico {
    id?         : any; // ? pode ou não passar um id e any Pode ser qualquer tipo
    nome        : string;
    cpf         : string;
    email       : string;
    senha       : string;
    perfis      : string[]; // String array
    dataCriacao : any;
};