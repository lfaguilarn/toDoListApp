import { Component, OnInit } from '@angular/core';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea';
import { ListTareasComponent } from './list-tareas/list-tareas.component';
import { AddTareaComponent } from './add-tarea/add-tarea.component';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-task-app',
  standalone: true,
  imports: [ListTareasComponent, AddTareaComponent],
  templateUrl: './task-app.component.html'
})
export class TaskAppComponent implements OnInit {
  tareas: Tarea[]=[];
  abrirNuevaTarea: boolean = false;
  constructor(private service: TareaService){}
  ngOnInit(): void {
    this.tareas = JSON.parse(sessionStorage.getItem('tareas')!) || this.service.getTareas();
  }
  onAddTarea(tarea: Tarea){
    tarea.terminado=false;
    tarea.id = this.tareas.length+1;
    this.tareas = [... this.tareas, tarea];
    this.saveSession();
    Swal.fire({
      title: "Tarea guardada con exito!",
      icon: "success",
      draggable: true
    });
  }
  toggleTarea(id: number){
    this.tareas = this.tareas.map(tarea =>{
      if(tarea.id === id){
        return {...tarea, terminado: !tarea.terminado}
      }
      return tarea;
    })
    this.saveSession();
    Swal.fire({
      title: "Tarea actualizada con exito!",
      icon: "success",
      draggable: true
    });
  }

  saveSession():void{
    sessionStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  openNewTarea(){
    this.abrirNuevaTarea = !this.abrirNuevaTarea;
  }
  cerrarNuevaTarea(cerrar: boolean){
    this.abrirNuevaTarea = cerrar;
  }
}
