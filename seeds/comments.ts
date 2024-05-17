import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("comments").del();

    // Inserts seed entries
    await knex("comments").insert([
        { id: 1, article_id: 1, description: "good article!" },
        { id: 2, article_id: 1, description: "good article!" },
        { id: 3, article_id: 2, description: "good article!" },
        { id: 4, article_id: 2, description: "good article!" },
        { id: 5, article_id: 2, description: "good article!" },
        { id: 6, article_id: 3, description: "good article!" },
        { id: 7, article_id: 3, description: "good article!" },
        { id: 8, article_id: 4, description: "good article!" },
    ]);
};
