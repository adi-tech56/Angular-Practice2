import { Component ,Input,Output,EventEmitter, inject} from '@angular/core';
import { type TaskVal } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',

  templateUrl: './task.html',
  styleUrl: './task.css',
  // imports: [Card,DatePipe],
  standalone:false,
})

export class Task {
  @Input({required:true}) tasks !:TaskVal;
  // @Output() complete = new EventEmitter<string>();
private tasksService =inject(TasksService)
  onCompleteTask(){
    // this.complete.emit(this.tasks.id);
    this.tasksService.removeTask(this.tasks.id);
   
  }
}
