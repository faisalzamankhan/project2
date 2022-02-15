import { ScrollService } from './../../scroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ScrollService) { }

  ngOnInit(): void {
  }
 
  image:string="assets/img/image.jpg"

  Tologo(section:any){
    document.getElementById("logo")?.scrollIntoView({behavior:"smooth"});
}
Tostream(section:any){
  document.getElementById("stream")?.scrollIntoView({behavior:"smooth"});
}
Tofooter(section:any){
  document.getElementById("footer")?.scrollIntoView({behavior:"smooth"});
}
  

}
