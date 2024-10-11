'use server'
import {usersTable} from "../../db/schema";
import {db} from "../../db/index";

export async function insertOneUser(name: string, isDrugDealer: boolean ) {
    await db.insert(usersTable).values({
      name: name,
      isDrugDealer: isDrugDealer,
    });
  }