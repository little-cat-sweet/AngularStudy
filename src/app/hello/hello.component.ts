import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

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


  constructor(private Builder : FormBuilder) {

  }

  // 自定义动态表单验证data
  formDataTest = this.Builder.group({
    userName : ['',[Validators.required,
                    Validators.maxLength(18),
                    Validators.minLength(6)]],
    password : ['', this.passwordFilter],
    phone : ['', [Validators.required, this.phoneFilter]]
  })

  loginInput : FormGroup = new FormGroup({
    name : new FormControl(""),
    password : new FormControl("")
  })

  dateStr : Date = new Date();

  pipeTest : String = "pipe test"

  giveToTitle : String = "hello title, I am hello"
  submit() : void{
    console.log("your account is " + this.loginInput.value.name)
    console.log("your password is " + this.loginInput.value.password)
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



  passwordFilter(password : FormControl) : object {
    let value = password.value || ""
    if (! value) return {'msg': "please input your password"}
    if (value.length < 5 || value.length > 18) return {'error': "your password is not correct"}
    return {}
  }

  phoneFilter(phone : FormControl) : object{

    let value= phone.value || "";
    if(value.length != 11) return {'msg' : "your phone type is not correct"}
    return {}
  }

  submitTest(){
    console.log(this.formDataTest)
  }

  titleChange(){
    this.giveToTitle = "changed the title"
  }
}
