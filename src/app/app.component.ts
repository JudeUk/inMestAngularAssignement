import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,LoginComponent,SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  
  title = 'inmest-web';
  name = "Judah";

  profile={
    id: 1,
    first_name:"Jude",
    last_name:"Ukana"

  }

  genesis = "hello";

  constructor(){
    console.log("constructor");
  }

 

}
