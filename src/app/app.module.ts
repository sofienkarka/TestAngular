import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import appRoutes from './configRoute';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    HomeComponent,
    QuizComponent,
    LoginComponent,
    ErrorsComponent,
    RegisterComponent,
    ListPostComponent,
    AddPostComponent,
    UpdatepostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
