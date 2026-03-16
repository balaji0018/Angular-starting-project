import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) name!:string;

 
  constructor(public taskService: TasksService){}
  
  isTaskAdded = false;


 

get Userspecifictask(){
  return this.taskService.getUserTask(this.id);
}


clicked() {
this.isTaskAdded = true;
}
onCloseTask(){
  this.isTaskAdded = false;
}

}
