import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
// import 'rxjs/add/operator/map'/

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private clientid = 'c9efe03ec420135763e3'
  private clientsecret = 'e14bec4afe07b454e248c3e309d2c0b85cf289db'
  username:string;

 

  constructor(private http:HttpClient) {
    console.log("Your service are ready")
    this.username = 'Adika'
   }
  
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?clientid" + this.clientid + "&client_secret=" + this.clientsecret)
    //  .map(res=>res.json)
   }
}
