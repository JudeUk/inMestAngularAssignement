import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor() { }

  getLeaves(){

   return of( [{
      id: 1, 
      leave_type: "maternity", 
      start_date:"Dec 20, 2023",
      end_date:"Mar 20, 2023",
      created_by: "Grace",
      status: "PENDING",
      last_modified:"NOV 27, 2023",
      status_changed_by:"Derrick",
      date_created_by:"Mar 21, 2023",
      action:""
    
    },
    {
      id: 1, 
      leave_type: "Bae cation", 
      start_date:"Dec 20, 2023",
      end_date:"Mar 20, 2023",
      created_by: "Suad",
      status: "PENDING",
      last_modified:"NOV 27, 2023",
      status_changed_by:"Xarri",
      date_created_by:"Mar 21, 2023",
      action:""
    
    }])
  }
}
