import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {
  
  private username: string;
  private clientid ='de91d72bd93d93067f56c2c0da37e642f84a882d'

  constructor( private http:Http) {
    console.log("your service is ready!")
    this.username ='Adika';
   }
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username +  "?client_id" + this.clientid);
   }
}
