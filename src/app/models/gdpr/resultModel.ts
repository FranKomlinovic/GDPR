import {QuestionCategoryModel} from './questionCategoryModel';

export class ResultModel {
  resultByCategories: ResultObjectModel[];
  resultByFields: ResultObjectModel[];
  notComplete: boolean;
  finalResult: number;

  constructor(private model: QuestionCategoryModel[]) {
    this.resultByFields = model.flatMap((a) =>
      a.questions.map((b) => {
        if (b.percentage == undefined) {
          this.notComplete = true;
        }
        return new ResultObjectModel(b.id, b.topic, b.percentage);
      })
    );

    this.resultByCategories = model.flatMap((a) => {
      let sum = a.questions.reduce(
        (acc, number) => acc + number.percentage,
        0
      );

      return new ResultObjectModel(
        a.categoryId.toString(),
        a.categoryName,
        sum / a.questions.length
      );
    });


    let sum = this.resultByFields.reduce(
      (acc, number) => acc + number.result,
      0
    );

    this.finalResult = sum / this.resultByFields.length;
  }

  isNotComplete(): boolean {
    let notComplete = false;
    this.model.forEach(a => {
      if (a.questions.filter(a => a.percentage == undefined).length > 0) {
        notComplete = true;
      }
    });
    return notComplete;

  }
}

export class ResultObjectModel {
  id: string;
  name: string;
  result: number;

  constructor(id: string, name: string, result: number) {
    this.id = id;
    this.name = name;
    this.result = result;
  }
}
