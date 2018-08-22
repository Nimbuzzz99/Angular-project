import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getByUsername(username): Observable<any>{
    return this.http.get(`http://localhost:8081/api/v1/user/${username}`);
  }
}
