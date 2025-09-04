import { Component, EventEmitter,Input,inject,Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { TaskNew } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone:false,
})
export class NewTask {
  @Input({required :true}) userId!: string;
  @Output() close = new EventEmitter<void>()
  // @Output() addTask = new EventEmitter<TaskNew>()
  enteredTitle ='';
  enteredSummary='';
  enteredDate='';
  private tasksService =inject(TasksService)
onCancel(){
this.close.emit();
}
onSubmit() {

this.tasksService.addTask
({
title:this.enteredTitle,
summary:this.enteredSummary,
date:this.enteredDate,
},
this.userId
);

this.close.emit();
}
}
