import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../list-post/Model/blog';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
blogs=JSON.parse(localStorage.getItem('Posts'))
blog:Blog;
FormUpdate= new FormGroup({
  Titre: new FormControl(),
  Description: new FormControl(),
  Categories: new FormControl(),
  Date: new FormControl()
})
FormsUpdated:any
  constructor(public router:ActivatedRoute, private root:Router) { }

  ngOnInit(): void {
  this.blogs.forEach(blo => {if(blo.Titre==this.router.snapshot.params.Titre){
    this.FormUpdate= new FormGroup({
      Titre: new FormControl(blo.Titre),
      Description: new FormControl(blo.Description),
      Categories: new FormControl(blo.Categories),
      Date: new FormControl(blo.Date)
    })
  
    
  }
    
  });  
  
  }
  ModifPost(){
    this.FormsUpdated=this.FormUpdate.value;
    const found=this.router.snapshot.params.Titre;
    
    for(let i=0;i<this.blogs.length;i++){
      if(this.blogs[i].Titre==found){
        console.log(i);
        this.blogs.splice(i,1,this.FormsUpdated)
      }
   
    }
    console.log(this.blogs);
    localStorage.setItem('Posts',JSON.stringify(this.blogs))
   this.root.navigateByUrl('list-Post')

}
}

