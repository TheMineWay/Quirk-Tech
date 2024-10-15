CREATE SCHEMA "info";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "landings"."carousel_image_codes_enum" AS ENUM('discounts');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "info"."languages_enum" AS ENUM('en-US');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "landings"."carousel_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" "landings"."carousel_image_codes_enum",
	"language" "info"."languages_enum",
	"image" "bytea" NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "carousel_items_code_language_unique" UNIQUE("code","language")
);
