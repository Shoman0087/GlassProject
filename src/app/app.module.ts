import { BrowserModule } from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routingComponents} from './app-routing.module';
import {NavbarComponent} from './index/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './index/products/products.component';
import { OpenCameraComponent } from './index/open-camera/open-camera.component';


//Firebase

// import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//Auth service
// import { AuthService } from "./shared/services/auth.service";
import { VerifyEmailComponent } from './index/verify-email/verify-email.component';
import { ShopsComponent } from './index/shops/shops.component';
import { ContactComponent } from './index/contact/contact.component';
import { CameraComponent } from './index/camera/camera.component';

// import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    VerifyEmailComponent,
    ProductsComponent,
    OpenCameraComponent,
    ShopsComponent,
    ContactComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig, 'VirtualGlassesTryOn'),
    // AngularFirestoreModule, // Only required for database features
    // AngularFireAuthModule, // Only required for auth features,
    // AngularFireStorageModule // Only required for storage features

  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
