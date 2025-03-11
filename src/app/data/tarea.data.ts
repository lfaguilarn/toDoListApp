import { Tarea } from "../models/tarea";

export const tareaData: Tarea[] = [
    {
        id: 1,
        titulo: "Desayunar",
        descripcion: "Lavarse la cara e ir a desayunar",
        terminado: true,
    },
    {
        id: 2,
        titulo: "Hacer ejercicio",
        descripcion: "Correr 30 minutos en el parque",
        terminado: true,
    },
    {
        id: 3,
        titulo: "Revisar correos",
        descripcion: "Leer y responder los correos importantes",
        terminado: false,
    },
    {
        id: 4,
        titulo: "Estudiar Angular",
        descripcion: "Repasar componentes y directivas",
        terminado: false,
    },
    {
        id: 5,
        titulo: "Comprar víveres",
        descripcion: "Leche, pan, huevos y frutas",
        terminado: false,
    }
];
