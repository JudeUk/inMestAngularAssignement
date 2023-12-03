import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{

  userId = '';
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(param => {

      //  Observanbles are Data Types
      // ActivatedRoute is a service that gives you information about the URL

      console.log(param, 'query param');
      this.userId = param["id"];

    })
  }

}
