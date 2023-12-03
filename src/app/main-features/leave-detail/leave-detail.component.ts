import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { LeaveService } from '../../services/leave.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-detail.component.html',
  styleUrl: './leave-detail.component.scss'
})
export class LeaveDetailComponent implements OnInit{

  constructor(
   private route: ActivatedRoute,
    private leaveService: LeaveService){

  }

leaveId :any;
createdBy = '';
leave :any;



  ngOnInit(): void {
    
    // this.route.params.subscribe
    this.route.params.subscribe(param => {this.leaveId = param["id"]})
  }

  getMyLeaveById(id: number){

    this.leaveService.getLeaveById(id).subscribe(resp =>{

      this.leave = resp;
    });

  }

}
