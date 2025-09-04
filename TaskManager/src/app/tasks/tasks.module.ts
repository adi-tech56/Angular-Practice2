import {NgModule} from '@angular/core';
import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { FormsModule } from '@angular/forms';
// import { Card } from '../shared/card/card';
import { CommonModule, DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations:[Tasks,Task,NewTask],
    exports:[Tasks],
    imports:[FormsModule,CommonModule,SharedModule]
})

export class TasksModule{}