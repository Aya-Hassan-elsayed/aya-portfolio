import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgModel } from '@angular/forms';
import { ProjectsComponent } from './Components/projects/projects.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SkillsComponent } from './Components/skills/skills.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Project',component:ProjectsComponent},
    {path:'AboutUs',component:AboutComponent},
    {path:'Skills',component:SkillsComponent},
    {path:'Contact',component:ContactComponent},
    {path:'**',redirectTo:''}
];
