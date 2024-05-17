import { Model, ModelObject } from "objection";
import { CommentsModel } from './comment.model'

export class ArticlesModel extends Model {
  id!: number;
  title!: string;
  body!: string;
  isApproved!: boolean;

  static get tableName() {
    return "articles";
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentsModel,
        join: {
          from: 'articles.id',
          to: 'comments.article_id'
        }
      }
    }
  }
}

export type articles = ModelObject<ArticlesModel>