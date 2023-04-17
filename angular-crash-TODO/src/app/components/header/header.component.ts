import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  subscrition! : Subscription;
  AddOrCloseButton : boolean =false ;
 
  @Output() showAddForm = new EventEmitter();
 
  constructor(private uiservice: UiService, private router:Router) {
    this.subscrition = this.uiservice.receievedToggleButton().subscribe(data=>{
      this.AddOrCloseButton = data;
    })
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiservice.sendToggleButton();
    console.log('Toggled!');
  }

  hasRoute(route:string){
    return this.router.url === route;
}
}