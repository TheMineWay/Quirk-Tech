CREATE SCHEMA "warehouse";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "warehouse"."files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file" "bytea" NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "landings"."carousel_items" ADD COLUMN "imageId" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "landings"."carousel_items" ADD CONSTRAINT "carousel_items_imageId_files_id_fk" FOREIGN KEY ("imageId") REFERENCES "warehouse"."files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "landings"."carousel_items" DROP COLUMN IF EXISTS "image";