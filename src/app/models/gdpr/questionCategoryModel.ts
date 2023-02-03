import { QuestionModel } from './questionModel';

export interface QuestionCategoryModel {
    categoryId: number;
    categoryName: string;
    questions: QuestionModel[];
}
