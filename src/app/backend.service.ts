import {Injectable} from '@angular/core';
import {GdprModel} from "./models/gdpr/gdprModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IMessageResponse} from "./models/message-response.interface";
import {environment} from "../environments/environment";
import {RevisionModel} from "./models/revision/revisionModel";
import {QuestionCategoryModel} from "./models/gdpr/questionCategoryModel";
import {RevisionCategoryModel} from "./models/revision/revisionCategoryModel";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  rootUrl = 'https://ua1sevlcal.execute-api.eu-central-1.amazonaws.com/prod/gdpr';
  byCompanyUrl = this.rootUrl + '/company/' + environment.companyId;
  revisionUrl = this.rootUrl + '/revision';

  constructor(private http: HttpClient) {
  }

  getGdprByCompanyId(): Observable<GdprModel[]> {
    return this.http.get<GdprModel[]>(this.byCompanyUrl);
  }

  getRevisionByCopmanyId(): Observable<RevisionModel[]> {
    return this.http.get<RevisionModel[]>('assets/revision-mock.json');
    // return this.http.get<RevisionModel[]>(this.byCompanyUrl);
  }

  getQuestions(): Observable<QuestionCategoryModel[]> {
    return this.http.get<QuestionCategoryModel[]>('assets/questions.json');
  }

  getRevisionQuestions(): Observable<RevisionCategoryModel[]> {
    return this.http.get<RevisionCategoryModel[]>('assets/revision-questions.json');
  }

  deleteGdpr(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(this.rootUrl + "/" + id);
  }

  deleteRevision(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(this.revisionUrl + "/" + id);
  }

  postGdpr(request: GdprModel): Observable<IMessageResponse> {
    let toSend = JSON.stringify(request, (k, v) => v === undefined ? null : v);
    return this.http.post<IMessageResponse>(
      this.rootUrl, toSend
    );
  }

  postRevision(request: RevisionModel): Observable<IMessageResponse> {
    let toSend = JSON.stringify(request, (k, v) => v === undefined ? null : v);
    console.log(toSend);
    return this.http.post<IMessageResponse>(
      this.revisionUrl, toSend
    );
  }
}
