import { Model, ModelObject } from "objection";

export class ArticlesModel extends Model {
  id!: number;
  title!: string;
  body!: string;
  isApproved!: boolean;

  static get tableName() {
    return "articles";
  }
}

export type articles = ModelObject<ArticlesModel>