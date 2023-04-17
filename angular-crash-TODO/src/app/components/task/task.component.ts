import { Component, OnInit } from '@angular/core';
//import { TASKS } from "../../mock-tasks";
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  Tasks: Task[] = [];
  addOrClose: boolean = false;
  constructor(private api: TaskService, private uiservice: UiService) {
    this.AddORClose();
  }

  ngOnInit(): void {
    
  }

  AddORClose() {
    this.uiservice.receievedToggleButton().subscribe((data) => {
      this.addOrClose = data;
    });
    this.displayTasks(); 
  }

  displayTasks() {
    this.api.getMethod().subscribe((data) => {
      return (this.Tasks = data);
    });
  }

  OnDelete(task: Task) {
    this.api.delMethod(task).subscribe((data) => {
      console.log(task);
    });
    this.displayTasks();
  }

  OnDeleteReminders(task: Task) {
    this.api.putToggleReminder(task).subscribe((data) => {
      data.reminder = !data.reminder;
      task.reminder = data.reminder;
      console.log(data.reminder);
    });
    // task.reminder = !task.reminder;
    // console.log(task.reminder)
  }

  OnAddtaskParent(task: Task) {
    console.log(task);
    this.api.postMethod(task).subscribe((data) => {
      data = task;
    });
    this.displayTasks();
  }
}
