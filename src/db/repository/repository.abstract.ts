import { db } from "@/db";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { PgTable, PgTransaction } from "drizzle-orm/pg-core";

export type Transaction = PgTransaction<
  NodePgQueryResultHKT,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;

export type RepositoryOptions = {
  transaction?: Transaction;
};

export abstract class Repository<T extends PgTable> {
  constructor(protected readonly table: T) {}

  db = (options?: RepositoryOptions) =>
    options?.transaction ? options.transaction : db;

  findAll = async (options?: RepositoryOptions) =>
    await this.db(options).select().from(this.table);
}
