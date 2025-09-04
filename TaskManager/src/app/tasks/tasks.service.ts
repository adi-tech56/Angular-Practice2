import { Injectable } from "@angular/core";
import { TaskNew, TaskVal } from "./task/task.model";
@Injectable({providedIn:'root'})
export class TasksService{
 private tasks = [
  {
    id:'t1',
    userId:'u1',
    title:'Angular',
    summary:'Expertis in core angular concepts',
    dueDate:'2025-08-12'
  },
   {
    id:'t2',
    userId:'u2',
    title:'Java',
    summary:'Expertise in core java concepts',
    dueDate:'2025-08-12'
  },
   {
    id:'t3',
    userId:'u1',
    title:'Angular',
    summary:'Expertise in basic angular concepts',
    dueDate:'2025-08-12'
  },
   {
    id:'t4',
    userId:'u1',
    title:'Typescript',
    summary:'Expertise in core typescript concepts',
    dueDate:'2025-08-12'
  }
];
constructor(){
  const tasks = localStorage.getItem('tasks');
  if(tasks){
    this.tasks = JSON.parse(tasks);
  }
}

getUserTasks(userId : string){
 
    return this.tasks.filter((task) => task.userId === userId);
}
addTask(taskData:TaskNew,userId:string){

    this.tasks.push(
{
id:new Date().getTime().toString(),
userId: userId,
title:taskData.title,
dueDate:taskData.date,
summary:taskData.summary,
  }
)
this.saveTasks();
}
removeTask(id:string){
     this.tasks = this.tasks.filter((task) => task.id !== id);
     this.saveTasks();
}

private saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks));
}
}