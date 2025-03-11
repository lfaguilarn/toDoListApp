import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [],
  templateUrl: './add-tarea.component.html'
})
export class AddTareaComponent {
  nuevaTarea: any = {};

  @Output() tareaEmitter: EventEmitter<Tarea> = new EventEmitter();
  @Output() cerrarEmitter: EventEmitter<boolean> = new EventEmitter();
  addTarea(titulo: string, descripcion: string){
    this.nuevaTarea.titulo = titulo;
    this.nuevaTarea.descripcion = descripcion;
    this.tareaEmitter.emit(this.nuevaTarea);
    this.nuevaTarea = {};
    this.cerrarNuevaTarea();
  }
  cerrarNuevaTarea(){
    this.cerrarEmitter.emit(false);
  }
}
