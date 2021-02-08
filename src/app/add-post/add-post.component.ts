
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{Blog} from '../list-post/Model/blog'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
PostForm= new FormGroup({
  Titre:new FormControl('',Validators.required),
  Description: new FormControl('',Validators.required),
  Categories: new FormControl(),
  Date:new FormControl('',Validators.required)
})
Blogs=JSON.parse(localStorage.getItem('Posts')) || []

Post:Blog ;
Posts:Blog[]=[];
  constructor(public router:Router) { }

  ngOnInit(): void {

  }
  AjoutPost(){
    if(this.PostForm.valid){
this.Post=this.PostForm.value;
this.Blogs.push(this.Post);

console.log(this.Blogs);
localStorage.setItem('Posts',JSON.stringify(this.Blogs))
this.router.navigateByUrl('list-Post')
}
else{
  alert('merci de saisir tous les champs')
}
  }
}
