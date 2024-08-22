import { sql } from '@vercel/postgres';
import { serial, integer, text, date, pgTable } from 'drizzle-orm/pg-core';

export const programDetailsWithReviews = pgTable(
  'program_details_with_reviews',
  {
    id: serial('id').primaryKey(),

    // Program Details
    heading: text('heading'),
    fullName: text('full_name'),
    date: date('date'),
    imageUrl: text('image_url'),
    description: text('description'),
    chapter: text('chapter'),
    category: text('category'),

    // Reviewer 1
    reviewerName1: text('reviewer_name_1'),
    reviewerTitle1: text('reviewer_title_1'),
    reviewPhotoUrl1: text('review_photo_url_1'),
    reviewContent1: text('review_content_1'),

    // Reviewer 2
    reviewerName2: text('reviewer_name_2'),
    reviewerTitle2: text('reviewer_title_2'),
    reviewPhotoUrl2: text('review_photo_url_2'),
    reviewContent2: text('review_content_2'),

    // Reviewer 3
    reviewerName3: text('reviewer_name_3'),
    reviewerTitle3: text('reviewer_title_3'),
    reviewPhotoUrl3: text('review_photo_url_3'),
    reviewContent3: text('review_content_3'),
  }
);
