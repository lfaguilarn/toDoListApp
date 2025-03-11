import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-list-tareas',
  standalone: true,
  imports: [],
  templateUrl: './list-tareas.component.html'
})
export class ListTareasComponent {
  @Input() tareas: Tarea[]=[];
  @Output() idEmitter: EventEmitter<number> = new EventEmitter();
  toggleTarea(tarea:Tarea){
    // tarea.terminado = !tarea.terminado;
    this.idEmitter.emit(tarea.id);
  }
}
