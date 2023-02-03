import {RevisionEnum} from "./revisionEnum";

export interface RevisionQuestionModel {
  id: string;
  question: string;
  reference: string;
  response: RevisionEnum;
}
