import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  @Input()
  test1?: String;

  @Output()
  addItem = new EventEmitter();

  addItemForHello(){
    this.addItem?.emit("vue");
  }

  ngOnInit(): void {
    console.log("title component has been created")
  }

  ngOnChanges() : void {
    console.log("title component has been changed")
  }

  ngOnDestroy(): void{
    console.log("title component has been destroyed")
  }

}
