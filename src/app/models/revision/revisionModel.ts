import {RevisionCategoryModel} from "./revisionCategoryModel";
import {RevisionResultModel} from "./revisionResultModel";


export class RevisionModel {
  id: string;
  companyId: string;
  gdprManagerName: string;
  categories: RevisionCategoryModel[];
  result: RevisionResultModel;

  calculateResult() {
    this.result = new RevisionResultModel(this.categories);
  }

  isNotComplete(): boolean {
    return this.result.isNotComplete() || this.gdprManagerName == undefined;
  }
}
