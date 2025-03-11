import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { tareaData } from '../data/tarea.data';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }
  getTareas(): Tarea[]{
    return tareaData;
}
}
