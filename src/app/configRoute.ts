import { Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import{ListPostComponent} from './list-post/list-post.component';
import{UpdatepostComponent} from './updatepost/updatepost.component'
import { AppComponent } from './app.component';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
 {path:'',
   component:HomeComponent
 },
    { path: 'home', 
    component:HomeComponent
  },
  {
    path: 'add-Post',
    component: AddPostComponent 
  },
  {path:'list-Post',
  component: ListPostComponent

  },
  { path: 'list-Post/update-Post/:Titre',
    component: UpdatepostComponent
  },
  
  
  { path: '**',
  component: ErrorsComponent

  }
  


];
export default appRoutes;