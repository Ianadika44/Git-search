import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private  username:string;
  private clientid = 'c9efe03ec420135763e3';
  private clientsecret = 'e14bec4afe07b454e248c3e309d2c0b85cf289db';
  map: any;
 

 

  constructor(private http:HttpClient) {
    console.log("Your service is ready");
    this.username = 'Ianadika44';
   }
  
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?clientid" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?clientid" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
}
