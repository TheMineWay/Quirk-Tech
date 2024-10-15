CREATE SCHEMA "configs";
--> statement-breakpoint
CREATE SCHEMA "info";
--> statement-breakpoint
CREATE SCHEMA "landings";
--> statement-breakpoint
CREATE SCHEMA "users";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "landings"."carousel_item_codes_enum" AS ENUM('discounts');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "landings"."components_enum" AS ENUM('carousel');
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
	"code" "landings"."carousel_item_codes_enum",
	"language" "info"."languages_enum",
	"image" "bytea" NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "carousel_items_code_language_unique" UNIQUE("code","language")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "landings"."components" (
	"id" serial PRIMARY KEY NOT NULL,
	"component" "landings"."components_enum",
	"landingId" integer,
	"order" integer,
	"data" json DEFAULT '{}'::json,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
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
CREATE TABLE IF NOT EXISTS "landings"."landings" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(16) NOT NULL,
	"path" varchar(128) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "landings_code_unique" UNIQUE("code"),
	CONSTRAINT "landings_path_unique" UNIQUE("path")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users"."user_credentials" (
	"id" serial PRIMARY KEY NOT NULL,
	"password" varchar(512) NOT NULL,
	"userId" uuid,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users"."users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(64) NOT NULL,
	"lastName" varchar(128),
	"email" varchar(256) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "landings"."components" ADD CONSTRAINT "components_landingId_landings_id_fk" FOREIGN KEY ("landingId") REFERENCES "landings"."landings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "configs"."header_menu_items" ADD CONSTRAINT "parent_fk" FOREIGN KEY ("parentId") REFERENCES "configs"."header_menu_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users"."user_credentials" ADD CONSTRAINT "user_credentials_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "order_idx" ON "configs"."header_menu_items" USING btree ("order");