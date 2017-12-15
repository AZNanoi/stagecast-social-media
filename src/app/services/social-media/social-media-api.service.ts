import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class SocialMediaApiService {

  constructor(private http: Http) { }

  /*saveEmailToSubscriptionList(email: string): Observable<any> {
    return this.http
        .post('url', {email: email})
        .map((res: Response) => res.json())
        .map((res: any) => { return res; });
  }*/

}
