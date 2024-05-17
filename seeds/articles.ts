import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("articles").del();

    // Inserts seed entries
    await knex("articles").insert([
        { id: 1, title: "rowValue 1", body: "lorem ipsum dolor sit amet 1", isApproved: false },
        { id: 2, title: "rowValue 1", body: "lorem ipsum dolor sit amet 1", isApproved: false },
        { id: 3, title: "rowValue 1", body: "lorem ipsum dolor sit amet 1", isApproved: false },
        { id: 4, title: "rowValue 1", body: "lorem ipsum dolor sit amet 1", isApproved: false },
        { id: 5, title: "rowValue 1", body: "lorem ipsum dolor sit amet 1", isApproved: false },
    ]);
};
