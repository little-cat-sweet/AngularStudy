import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {TitleService} from "../serves/title.service";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private titleService : TitleService) { }
  list : Array<String> = [];

  @Input()
  test1?: String;

  @Output()
  addItem = new EventEmitter();

  addItemForHello(){
    this.addItem?.emit("vue");
  }

  ngOnInit(): void {
    console.log("title component has been created")
    this.list = this.titleService.getList();
    console.log(this.list)
  }

  ngOnChanges() : void {
    console.log("title component has been changed")
  }

  ngOnDestroy(): void{
    console.log("title component has been destroyed")
  }

}
