import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';

const appRoutes:Routes=[
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent}
  ]},
  
  {path:'',component:HomeComponent},
  {path:'servers',
  	//canActivate:[AuthGuard],
  	canActivateChild:[AuthGuard],
  	component:ServersComponent,
    children:[
      {path:':id/edit',component:EditServerComponent},
      {path:':id',component:ServerComponent, canDeactivate:[CanDeactivateGuard]}
    ]},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:"/not-found"},
]

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
		],
		exports:[RouterModule]
})

export class AppRoutingModule{
	
}