import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private __services:NewsapiService) { }

  topheadingDisplay:any = [];




  ngOnInit(): void {
    this.__services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }

}
