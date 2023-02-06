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

  rootUrl = 'https://i9zg2jeemb.execute-api.eu-central-1.amazonaws.com/prod';
  gdprUrl = this.rootUrl + '/gdpr';
  revisionUrl = this.rootUrl + '/revision';
  gdprByCompanyUrl = this.gdprUrl + '/company/' + environment.companyId;
  revisionByCompanyUrl = this.revisionUrl + '/company/' + environment.companyId;

  constructor(private http: HttpClient) {
  }

  getGdprByCompanyId(): Observable<GdprModel[]> {
    return this.http.get<GdprModel[]>(this.gdprByCompanyUrl);
  }

  getRevisionByCopmanyId(): Observable<RevisionModel[]> {
    return this.http.get<RevisionModel[]>(this.revisionByCompanyUrl);
  }

  getQuestions(): Observable<QuestionCategoryModel[]> {
    return this.http.get<QuestionCategoryModel[]>('assets/questions.json');
  }

  getRevisionQuestions(): Observable<RevisionCategoryModel[]> {
    return this.http.get<RevisionCategoryModel[]>('assets/revision-questions.json');
  }

  deleteGdpr(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(this.gdprUrl + "/" + id);
  }

  deleteRevision(id: string): Observable<IMessageResponse> {
    return this.http.delete<IMessageResponse>(this.revisionUrl + "/" + id);
  }

  postGdpr(request: GdprModel): Observable<IMessageResponse> {
    let toSend = JSON.stringify(request, (k, v) => v === undefined ? null : v);
    return this.http.post<IMessageResponse>(
      this.gdprUrl, toSend
    );
  }

  postRevision(request: RevisionModel): Observable<IMessageResponse> {
    let toSend = JSON.stringify(request, (k, v) => v === undefined ? null : v);
    return this.http.post<IMessageResponse>(
      this.revisionUrl, toSend
    );
  }
}
