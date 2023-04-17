import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task! : Task;
  @Output() OnDeletetask : EventEmitter<Task> = new EventEmitter();
  @Output() OnToggleReminder : EventEmitter<Task> = new EventEmitter();
  

  faTimes = faTimes;
   constructor( private api:TaskService) { }
 
  ngOnInit(): void {
  }

  OnDelete(task: Task){
    console.log("Delete",task)
   this.OnDeletetask.emit(task);
  }

  OnToggleChild(task:Task){
    this.OnToggleReminder.emit(task)
  }

}
