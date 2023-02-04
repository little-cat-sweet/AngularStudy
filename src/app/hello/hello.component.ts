import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name : String = "Mary";
  box : String = "helloWord";
  box1 : String = "boxClass";
  isActive : boolean = true;
  isMax : boolean = false;
  colors : Array<String> = ['red', 'green', 'blue', 'yellow'];
  type : number = 1;

  title : string = "";

  age : FormControl = new FormControl();
  changeContent : String = "";
  constructor() {

  }

  ngOnInit(): void {

  }

  inputChange(e:any){
    this.changeContent = e.target.value;
  }

  alertContent(e : any){
    alert("your input content is " + this.changeContent)
  }

  ageChange(){
    this.age.setValue(18);
  }
}
