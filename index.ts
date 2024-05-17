import express, { Express, Response } from "express";
import knex from 'knex'
import {Model} from 'objection'
import { ArticlesModel } from "./model/article.model";

const app: Express = express();
const port = 3000;

app.use(express.json());

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    port: 5432,
    host: "127.0.0.1",
    database: "ch5_orm",
  }
})

Model.knex(knexInstance)

app.get("/", (_, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get('/articles', async (req, res) => {
  const articles = await ArticlesModel.query().select('*')

  res.json({data: articles})
})

app.post('/articles', async (req, res) => {
  const {id, title, body, isApproved} = req.body

  try {    
    await ArticlesModel.query().insert({id, title, body, isApproved})
  
    res.status(200).json({
      message: 'success'
    })
  } catch (error) {
    res.status(500).json({
      error: 'failed'
    })
  }
})

app.put('/articles/:id', async (req, res) => {
  const {id} = req.params
  const data = req.body

  try {
    await ArticlesModel.query().where({id}).update(data)

    res.status(200).json({
      message: 'success'
    });

  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({
      error: 'Failed to update user'
    });
  }
})

app.delete('/articles/:id', async (req, res) => {
  const {id} = req.params

  try {
    await ArticlesModel.query().where({id}).delete()

    res.status(200).json({
      message: 'delete success'
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      error: 'Failed to delete'
    });
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
