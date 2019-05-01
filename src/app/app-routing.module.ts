 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { SignInComponent } from './index/signin/signin.component';
import { DashboardComponent } from './index/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './index/forgot-password/forgot-password.component';
import { SignupComponent } from './index/signup/signup.component';
import { ProductsComponent } from './index/products/products.component';
import { OpenCameraComponent } from './index/open-camera/open-camera.component';
import { ShopsComponent } from './index/shops/shops.component';
import { ContactComponent } from './index/contact/contact.component';
import { CameraComponent } from './index/camera/camera.component';


const routes: Routes = [
       {path:'', redirectTo:'index',pathMatch:'full'},
       {path:'index',component:IndexComponent,
        children: [
           {path:'',redirectTo:'home',pathMatch:'full'},
           {path:'home',component:HomeComponent},
           {path:'signin',component:SignInComponent},
           {path:'dashboard',component:DashboardComponent},
           {path:'forgot-password',component:ForgotPasswordComponent},
           {path:'signup',component:SignupComponent},
           {path:'products',component:ProductsComponent},
           {path:'open-camera',component:OpenCameraComponent},
           {path:'shops',component:ShopsComponent},
           {path:'contact',component:ContactComponent},
           {path:'camera',component:CameraComponent}
        ],
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent,HomeComponent,SignInComponent,DashboardComponent,ForgotPasswordComponent,SignupComponent,ProductsComponent,
  OpenCameraComponent,ShopsComponent,ContactComponent,CameraComponent
];