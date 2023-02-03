import {RevisionQuestionModel} from "./revisionQuestionModel";

export interface RevisionCategoryModel {
  categoryId: number;
  categoryName: string;
  questions: RevisionQuestionModel[];
}
