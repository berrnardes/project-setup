import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connector, db } from ".";

await migrate(db, { migrationsFolder: "./src/models/migrations" });

connector.end();
