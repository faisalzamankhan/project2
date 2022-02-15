import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  currentSection= new Subject<string>();
  constructor() { }
  scrollTo(section :any){
    const s=section;
    // console.log(section);
    this.currentSection.next(section);
  }
}
