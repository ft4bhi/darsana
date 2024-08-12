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
CREATE TABLE IF NOT EXISTS "contact_detail_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"privacypolicy" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
