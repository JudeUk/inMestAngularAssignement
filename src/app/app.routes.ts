import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { LeaveComponent } from './main-features/leave/leave.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';


export const routes: Routes = [

    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user-details', component: UserDetailComponent},


    {path: 'attendance', component: AttendanceComponent},
    {path: 'leave', component: LeaveComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'leave-details/:id/:name', component: LeaveDetailComponent}


];
