// src/utils/db.ts
import {
  Pool,
  type QueryResult,
  type QueryResultRow
} from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export const query = <T extends QueryResultRow>(
    text: string,
    params?: unknown[]
): Promise<QueryResult<T>> => {
  return pool.query<T>(text, params);
};