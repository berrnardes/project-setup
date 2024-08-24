import { pgTable, varchar } from "drizzle-orm/pg-core";
import { v7 } from "uuid";

const user = pgTable("user", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => v7()),
	name: varchar("name", { length: 255 }).notNull(),
});

export default user;
