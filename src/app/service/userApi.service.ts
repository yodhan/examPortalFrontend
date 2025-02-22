import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

public addUser(user:any):Observable<any>{
  return this.http.post(`${environment.apiBaseUrl}user/create-user`,user) 
}

}
