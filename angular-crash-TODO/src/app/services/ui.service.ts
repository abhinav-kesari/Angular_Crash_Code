import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private subject =new Subject<boolean>();
  constructor() { }

  private show: boolean = false;
    sendToggleButton():void{
    this.show = !this.show;
    this.subject.next(this.show);
  }
  
  receievedToggleButton():Observable<any>{
    return this.subject.asObservable();
  }

}
