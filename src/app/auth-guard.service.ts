import { CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class AuthGuard implements CanActivate{
	
	canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|booelan{

	}
}