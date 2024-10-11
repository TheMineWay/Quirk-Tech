CREATE SCHEMA "configs";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "configs"."header_menu_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"i18nKey" varchar(128) NOT NULL,
	"href" varchar(256),
	"active" boolean DEFAULT true NOT NULL,
	"parentId" integer,
	"order" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "configs"."header_menu_items" ADD CONSTRAINT "parent_fk" FOREIGN KEY ("parentId") REFERENCES "configs"."header_menu_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "order_idx" ON "configs"."header_menu_items" USING btree ("order");