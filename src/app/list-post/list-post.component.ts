import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { Blog } from './Model/blog';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
blogs=JSON.parse(localStorage.getItem('Posts'))
blog:Blog;
  constructor( private service:PostserviceService) { }

  ngOnInit(): void {
  }
  delete(i){
   this.service.DeletePost(this.blogs,i)
   localStorage.setItem('Posts',JSON.stringify(this.blogs))  
  }
  Update(i){
    this.service.UpdatePost(this.blogs,i)
  }

}
