ALTER TABLE "landings"."components" ADD COLUMN "order" integer;--> statement-breakpoint
ALTER TABLE "landings"."components" ADD COLUMN "data" json DEFAULT '{}'::json;