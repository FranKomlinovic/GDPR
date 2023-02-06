import {RevisionCategoryModel} from "./revisionCategoryModel";

export class RevisionResultModel {
  resultByCategories: ResultObjectModel[];
  notAnswered: number = 0;
  np: number = 0;
  pu: number = 0;
  ut: number = 0;
  nu: number = 0;

  constructor(private model: RevisionCategoryModel[]) {
    this.resultByCategories = model.map(a => new ResultObjectModel(a));

    model.map(a => {
      this.notAnswered = this.notAnswered + a.questions.filter(a => a.response == undefined).length;
      let revisionQuestionModels = a.questions.filter(a => a.response != undefined);
      this.pu = this.pu + revisionQuestionModels.filter(a => a.response.valueOf() === "PU").length;
      this.np = this.np + revisionQuestionModels.filter(a => a.response.valueOf() === "NP").length;
      this.ut = this.ut + revisionQuestionModels.filter(a => a.response.valueOf() === "UT").length;
      this.nu = this.nu + revisionQuestionModels.filter(a => a.response.valueOf() === "NU").length;
    })

  }

  isNotComplete(): boolean {
    let notComplete = false;
    this.model.forEach(a => {
      if (a.questions.filter(a => a.response == undefined).length > 0) {
        notComplete = true;
      }
    });
    return notComplete;

  }
}

export class ResultObjectModel {
  id: number;
  name: string;
  notAnswered: number;
  np: number;
  pu: number;
  ut: number;
  nu: number;

  constructor(categoryModel: RevisionCategoryModel) {
    this.id = categoryModel.categoryId;
    this.name = categoryModel.categoryName;
    let revisionQuestionModels = categoryModel.questions.filter(a => a.response != undefined);

    this.notAnswered = categoryModel.questions.filter(a => a.response == undefined).length;
    this.pu = revisionQuestionModels.filter(a => a.response.valueOf() === "PU").length;
    this.np = revisionQuestionModels.filter(a => a.response.valueOf() === "NP").length;
    this.ut = revisionQuestionModels.filter(a => a.response.valueOf() === "UT").length;
    this.nu = revisionQuestionModels.filter(a => a.response.valueOf() === "NU").length;
  }
}
