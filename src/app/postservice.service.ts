import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './list-post/Model/blog';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
 DeletePost(Blogs:any [],i){
   return Blogs.splice(i,1)
 }
 UpdatePost(blogs:any[],i){
   return this.rooter.navigateByUrl('list-Post/update-Post/'+blogs[i].Titre)
 }
  constructor(private rooter:Router) { }
}
