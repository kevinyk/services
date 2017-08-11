import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  pokemon: object = {}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onClick(){
  	console.log("onClick");
  	this._httpService.getMewtwo()
  	.then((response)=>{
  		console.log(response);
  		this.pokemon = response;
  	})
  	.catch((error)=>{
  		console.log(error);
  	})
  }
}
