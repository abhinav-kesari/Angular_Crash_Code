import { Injectable } from '@angular/core';
import { TASKS } from "../mock-tasks";
import { Task } from "../Task";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   apiURL = 'http://localhost:3000/tasks';
  constructor(private http:HttpClient) { }

  getMethod():Observable <Task[]>{
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiURL);
  }

  delMethod(task : Task):Observable<Task>{
    return this.http.delete<Task>(this.apiURL+"/"+task.id)
  }

  putToggleReminder(task:Task):Observable<Task>{
      return this.http.put<Task>(this.apiURL+"/"+task.id,task)
  }
  postMethod(task:Task):Observable<Task>{
    console.log(task)
      return this.http.post<Task>(this.apiURL,task)
  }
}
