export interface User {
  id: string;
  age: number;
  bio: string;
  name: string;
  email: string;
  username: string;
  picture: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface FullUser {
  id: string;
  age: number;
  bio: string;
  name: string;
  email: string;
  username: string;
  picture: string;
  updatedAt: Date;
  createdAt: Date;
  companyOrOrganization: {
    id: string;
    name: string;
    email: string;
  };
}
