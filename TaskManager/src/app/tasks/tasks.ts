import { Component,Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import {  type TaskNew } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  // imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone:false,
})
export class Tasks {


  @Input({required:true}) userId !:string;
@Input({required:true}) name!:string;
isAddTask=false;

constructor(private tasksService:TasksService){
  this.tasksService = tasksService;
}
get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}
// onCompleteTask(id:string){
 
//  this.tasksService.removeTask(id);
// }
onStartAddTask() {
this.isAddTask =true
}

onCloseAddTask(){

  this.isAddTask = false;
    
}
// onAddTask(taskData:TaskNew) {
// this.tasksService.addTask(taskData,this.userId);
// this.isAddTask = false;
// }
}
 