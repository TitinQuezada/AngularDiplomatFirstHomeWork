import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routing';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MatRippleModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutDialogComponent } from './Dialogs/logout-dialog/logout-dialog.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignupComponent } from './signup/signup.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChangePasswordDialogComponent } from './Dialogs/change-password-dialog/change-password-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import { MatSortModule } from '@angular/material/sort';
import { DeleteUserDialogComponent } from './Dialogs/delete-user-dialog/delete-user-dialog.component';
import { UpdateUserDialogComponent } from './Dialogs/update-user-dialog/update-user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppBarComponent,
    LogoutDialogComponent,
    SignupComponent,
    ChangePasswordDialogComponent,
    UsersComponent,
    DeleteUserDialogComponent,
    UpdateUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    AngularFireDatabaseModule,
    NgxSpinnerModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
