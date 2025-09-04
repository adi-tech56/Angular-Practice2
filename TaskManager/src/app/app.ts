import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";
import { TasksModule } from './tasks/tasks.module';
@Component({
  standalone:false,
  selector: 'app-root',
  // imports: [HeaderComponent, User,TasksModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 users =DUMMY_USERS;
  // protected readonly title = signal('first-angular-app');

selectedUserId ?:string;
get selectedUser(){
  return this.users.find((user) => user.id=== this.selectedUserId)!;
}
onSelectUser(id:string){
  this.selectedUserId = id;

  }
}
