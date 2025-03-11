import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskAppComponent } from './components/task-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'toDoListApp';
}
