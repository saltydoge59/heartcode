import {boolean, uuid, pgTableCreator, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name)=>`heartcode-db_${name}`);

export const usersTable = createTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  isDrugDealer: boolean().notNull()
});