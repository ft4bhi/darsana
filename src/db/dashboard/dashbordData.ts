// src/data/data.ts

export interface UserData {
  id: number;
  name: string;
  status: string;
  phoneNumber: string;
  email: string;
  subject: string;
  activity: string;
}

export const users: UserData[] = [
  {
    id: 1,
    name: "Andrew Bojangles",
    status: "Active",
    phoneNumber: "+79000010101",
    email: "shadilrayyan2@gmail.com",
    subject: "Subject",
    activity: "2 days ago",
  },
  {
    id: 2,
    name: "Andrew Bojangles",
    status: "Active",
    phoneNumber: "+79000010101",
    email: "shadilrayyan2@gmail.com",
    subject: "Subject",
    activity: "2 days ago",
  },
  {
    id: 3,
    name: "Andrew Bojangles",
    status: "Active",
    phoneNumber: "+79000010101",
    email: "shadilrayyan2@gmail.com",
    subject: "Subject",
    activity: "2 days ago",
  },
  {
    id: 4,
    name: "Andrew Bojangles",
    status: "Active",
    phoneNumber: "+79000010101",
    email: "shadilrayyan2@gmail.com",
    subject: "Subject",
    activity: "2 days ago",
  },
];
