import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Task } from "../../Task";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  
//  addtasks! : NgForm;
  constructor() { }
  @Output() OnaddTask : EventEmitter<Task> = new EventEmitter();

  text!:string;
  day!:string;
  reminder:boolean = false;

  ngOnInit(): void {
  }
  onsubmit(){
    
    const addTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    
    }
    console.log(addTask)

    this.OnaddTask.emit(addTask);
      this.text = " ";
      this.day = " ";
      this.reminder =false;
  
  }
}
