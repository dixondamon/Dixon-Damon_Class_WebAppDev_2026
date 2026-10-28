import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

// Lokal: file sqlite.db. Saat deploy, isi DB_URL (dan DB_AUTH_TOKEN) di environment.
export const db = drizzle({
  connection: {
    url: process.env.DB_URL ?? "file:sqlite.db",
    authToken: process.env.DB_AUTH_TOKEN,
  },
  schema,
});
