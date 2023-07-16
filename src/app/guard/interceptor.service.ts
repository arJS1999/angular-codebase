import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HelperService } from "../service/Helper/helper";



@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor{
    constructor(private helperService:HelperService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
   
   let jwtToken=req.clone({
    setHeaders:{
        "auth-token":this.helperService.getToken()
    }
   })
   return next.handle(jwtToken);
    }
    
}