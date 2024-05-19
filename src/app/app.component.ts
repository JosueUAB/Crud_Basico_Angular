import { Component } from '@angular/core';
// Importa el componente TodoComponent
import { TodoComponent } from './todo/todo.component';

@Component({
   selector: 'app-root',
   standalone: true,
   // Importa el componente TodoComponent para ser usado dentro de este componente
   imports: [TodoComponent],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'todo-app';
}
