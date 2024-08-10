CREATE TABLE IF NOT EXISTS "Applicant_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_number" integer NOT NULL,
	"name" text NOT NULL,
	"gender" text NOT NULL,
	"category" text NOT NULL,
	"father_name" text NOT NULL,
	"mother_name" text NOT NULL,
	"income" integer NOT NULL,
	"phone_number" text NOT NULL,
	"date_of_birth" timestamp NOT NULL,
	"nationality" text NOT NULL,
	"adhar_number" text NOT NULL,
	"father_occupation" text NOT NULL,
	"mother_occupation" text NOT NULL,
	"house_number" text NOT NULL,
	"post_office" text NOT NULL,
	"pin_code" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ContactDetail_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_number" integer NOT NULL,
	"house" text NOT NULL,
	"post_office" text NOT NULL,
	"pin_code" text NOT NULL,
	"district" text NOT NULL,
	"student_email" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"city" text NOT NULL,
	"phone_number" text NOT NULL,
	"alternative_number" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ContactDetail_table" ADD CONSTRAINT "ContactDetail_table_application_number_Applicant_table_id_fk" FOREIGN KEY ("application_number") REFERENCES "public"."Applicant_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
