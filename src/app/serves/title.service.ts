import { Injectable } from '@angular/core';

@Injectable({
  //root表示注入到app.module.ts内， null, 表示不设定区域，还可以是某个模块的名字(一般都是懒加载模式)。
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

  list : Array<String> = ["hello"];

  getList() : any{
    return this.list;
  }
}
