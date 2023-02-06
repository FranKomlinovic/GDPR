import {ResultModel} from "./resultModel";
import {QuestionCategoryModel} from "./questionCategoryModel";


export class GdprModel {
  id: string;
  companyId: string;
  gdprManagerName: string;
  updatedDate: Date;
  createdDate: Date;
  categories: QuestionCategoryModel[];
  result: ResultModel;

  calculateResult() {
    this.result = new ResultModel(this.categories);
  }

  isNotComplete(): boolean {
    return this.result.isNotComplete() || this.gdprManagerName == undefined;
  }
}
