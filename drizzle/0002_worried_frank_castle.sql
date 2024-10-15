CREATE SCHEMA "landings";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "landings"."components_enum" AS ENUM('carousel');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "landings"."components" (
	"id" serial PRIMARY KEY NOT NULL,
	"component" "landings"."components_enum",
	"landingId" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "landings"."landings" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(16) NOT NULL,
	"path" varchar(128) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "landings_code_unique" UNIQUE("code"),
	CONSTRAINT "landings_path_unique" UNIQUE("path")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "landings"."components" ADD CONSTRAINT "components_landingId_landings_id_fk" FOREIGN KEY ("landingId") REFERENCES "landings"."landings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
