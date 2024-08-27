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
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "upcoming_events_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"date" timestamp NOT NULL,
	"month" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" text,
	"category" varchar(100),
	"type_value_pairs" jsonb,
	"first_name" varchar(100),
	"company_name" varchar(255),
	"email" varchar(255),
	"phone_number" varchar(20),
	"city" varchar(100),
	"state" varchar(100),
	"country" varchar(100),
	"is_visible" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_name" text NOT NULL,
	"file_type" text NOT NULL,
	"file_size" serial NOT NULL,
	"file_url" text NOT NULL,
	"upload_date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scholarship" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_number" serial NOT NULL,
	"name" text,
	"gender" text,
	"category" text,
	"father_name" text,
	"mother_name" text,
	"income" integer,
	"phone_number" text,
	"date_of_birth" timestamp,
	"nationality" text,
	"adhar_number" text,
	"father_occupation" text,
	"mother_occupation" text,
	"house_number" text,
	"post_office" text,
	"pin_code" text,
	"bank_ifsc_code" text,
	"bank_name" text,
	"bank_branch" text,
	"bank_account_number" text,
	"bank_account_holder" text,
	"photo" text,
	"cheque" text,
	"aadhar_card" text,
	"college_id" text,
	"income_certificate" text,
	"college_name" text,
	"branch" text,
	"semester" text,
	"hostel_resident" boolean,
	"cgpa" numeric(3, 2),
	"status" text,
	CONSTRAINT "scholarship_application_number_unique" UNIQUE("application_number")
);
