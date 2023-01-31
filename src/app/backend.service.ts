import {Injectable} from '@angular/core';
import {GdprModel} from "./models/gdprModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IMessageResponse} from "./models/message-response.interface";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  rootUrl = 'https://ua1sevlcal.execute-api.eu-central-1.amazonaws.com/prod/gdpr';
  byCompanyUrl = this.rootUrl + '/company/' + environment.companyId;

  constructor(private http: HttpClient) {
  }

  getGdprById(): Observable<GdprModel[]> {
    return this.http.get<GdprModel[]>(this.byCompanyUrl);
  }

  deleteGdpr(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(this.rootUrl + "/" + id);
  }

  postGdpr(request: GdprModel): Observable<IMessageResponse> {
    let toSend = JSON.stringify(request, (k, v) => v === undefined ? null : v);
    return this.http.post<IMessageResponse>(
      this.rootUrl, toSend
    );
  }
}
