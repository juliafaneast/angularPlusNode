/**
 * Created by FD1 on 2018/4/21.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {DOMAIN_SERVER_URL} from "../app/constants";

@Injectable()
export class AppService {
  constructor(protected http: Http) {
  }

  getServiceUrl() {
    return DOMAIN_SERVER_URL;
  }

  getDetail() {
    return this.http.get(this.getServiceUrl() + '/name')
      .map((res)=> {
        return res.json();
      })
      .catch( this.handleError);
  };

  protected handleError(error) {
    let errorMessage = error.json().message;
    if (error.json().error) {
      errorMessage += ":" + error.json().error;
    }
    switch (error.status) {
      case 401:
        return Observable.throw("invalid token");
      default:
        return Observable.throw(errorMessage);
    }
  }
}
