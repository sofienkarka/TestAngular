import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
FormUser= new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(),
  email: new FormControl(),
  password: new FormControl()
})
info:{
  firstName:string,
  lastName:string,
  email:any,
  password:any
}
infos:any[]=[];
  constructor() { }

  ngOnInit(): void {

}
  


  add(){

const el=document.querySelectorAll(".form-control")   

for(let i=0;i<el.length;i++){
  
  if(el[i].classList.contains('Red'))
  el[i].classList.remove('Red')
  el[i].className+=' Green' 
console.log(el[i].className);
}
  }

  Reset(){
    const red=document.querySelectorAll('.form-control')
   
    for(let i=0;i<red.length;i++){
      if(red[i].classList.contains('Green'))
      red[i].classList.remove('Green')
      red[i].className+=' Red' 
      console.log(red[i].className);
      }
      this.info=this.FormUser.value
      console.log(this.info);
    this.infos.push(this.info)
    
  }
}
