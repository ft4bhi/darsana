// src/app/api/ScholarshipApi/PostScholarship/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { ScholarshipDb, Scholarship_Table, InsertScholarship } from '@/db/schema/scholarship/scholarshipData';

export async function POST(req: NextRequest) {
  try {
    console.log('API route hit');

    // Parse form data
    const formData = await req.formData();
    console.log('Raw form data:', formData);

    const fields: Record<string, string> = {};
    const files: Record<string, File> = {};

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        fields[key] = value;
        console.log(`Field: ${key} -> ${value}`);
      } else if (value instanceof File) {
        files[key] = value;
        console.log(`File: ${key} -> ${value.name}`);
      }
    });

    console.log('Parsed Fields:', fields);
    console.log('Parsed Files:', files);

    // Parse and validate scholarship data
    const {
      personalDetails,
      contactDetails,
      educationalDetails,
      bankDetails,
    } = JSON.parse(fields.scholarshipData);

    const dateOfBirth = new Date(personalDetails.dob);
    if (isNaN(dateOfBirth.getTime())) {
      throw new Error('Invalid date format for dateOfBirth');
    }

    const scholarshipData: InsertScholarship = {
      name: personalDetails.name,
      gender: personalDetails.gender,
      category: personalDetails.category,
      fatherName: personalDetails.fatherName,
      motherName: personalDetails.motherName,
      income: parseInt(personalDetails.income),
      phoneNumber: personalDetails.studentPhone,
      dateOfBirth: dateOfBirth,
      nationality: personalDetails.nationality,
      adharNumber: personalDetails.aadhar,
      fatherOccupation: personalDetails.fatherOccupation,
      motherOccupation: personalDetails.motherOccupation,
      houseNumber: contactDetails.house,
      postOffice: contactDetails.postOffice,
      pinCode: contactDetails.pincode,
      bankIfscCode: bankDetails.ifsc,
      bankName: bankDetails.bankName,
      bankBranch: bankDetails.branchName,
      bankAccountNumber: bankDetails.accountNumber,
      bankAccountHolder: bankDetails.accountHolder,
      collegeName: educationalDetails.college,
      branch: educationalDetails.branch,
      semester: educationalDetails.semester,
      hostelResident: educationalDetails.hostelResident === 'Yes',
      cgpa: parseFloat(educationalDetails.cgpa),
      status: 'Pending',
      photo: files.photo ? files.photo.name : null,
      cheque: files.cheque ? files.cheque.name : null,
      aadharCard: files.aadharCard ? files.aadharCard.name : null,
      collegeID: files.collegeID ? files.collegeID.name : null,
      incomeCertificate: files.incomeCertificate ? files.incomeCertificate.name : null,
    };

    console.log('Prepared Scholarship Data:', scholarshipData);

    // Insert data into the database
    const result = await ScholarshipDb.insert(Scholarship_Table)
      .values(scholarshipData)
      .returning();

    console.log('Database Insert Result:', result);

    return NextResponse.json({ message: 'Scholarship data added successfully', result });

  } catch (error) {
    console.error('Error posting scholarship data:', error.message);
    console.error('Stack Trace:', error.stack);
    return NextResponse.json({ error: `Failed to post scholarship data: ${error.message}` }, { status: 500 });
  }
}
