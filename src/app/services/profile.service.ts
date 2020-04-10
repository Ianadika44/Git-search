import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private clientid = 'c9efe03ec420135763e3'
  private clientsecret = 'e14bec4afe07b454e248c3e309d2c0b85cf289db'
  username: any;
 

  constructor(private http:any) {
    console.log("Your service are ready")
    this.username = 'Adika'
   }
  
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?clientid" + this.clientid + "&client_secret=" + this.clientsecret)
     .map((res: { json: () => any; }) => res.json());
   }
}
