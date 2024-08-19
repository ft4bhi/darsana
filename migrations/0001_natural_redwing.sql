CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"rfo_images" jsonb,
	"category" varchar(100) NOT NULL,
	"type_value_pairs" jsonb NOT NULL,
	"vendor_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vendors" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"company_name" varchar(255),
	"email" varchar(255) NOT NULL,
	"phone_number" varchar(20),
	"city" varchar(100),
	"state" varchar(100),
	"country" varchar(100)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_vendor_id_vendors_id_fk" FOREIGN KEY ("vendor_id") REFERENCES "public"."vendors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
