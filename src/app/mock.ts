// I added a type declaration because the red squiggly was bothering me...
// Also, the data structure was not in line with the wireframes, so
// I edited the data structure to provide the functionality suggested
// by the mockups.

export type Address = {
  type: 'Mailing Address' | 'Street Address'
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zip: string;
};

export type Email = {
  type: 'Personal' | 'Work';
  email: string | null;
};

export type Phone = {
  type: 'Mobile' | 'Work';
  phone: string | null;
};

export type EmployeeDetails = {
  fullName: string;
  preferredFirstName: string;
  dateOfBirth: Date;
  maskedSocialSecurity: string;
  employmentStatus: 'Part-Time' | 'Full-Time';
  hireDate: Date;
  addresses: Array<Address>;
  emails: Array<Email>;
  phones: Array<Phone>;
  genderDescription: 'Male' | 'Female';
  medicareEligible: boolean | null;
  smoker: boolean | null;
  disabled: boolean | null;
  student: boolean | null;
};

export const EMPLOYEEDETAILS_MOCK: EmployeeDetails = {
  fullName: 'Caroline Conway',
  preferredFirstName: 'Carrie',
  dateOfBirth: new Date('February 7, 1990'),
  maskedSocialSecurity: '000-00-1234',
  employmentStatus: 'Part-Time',
  hireDate: new Date('January 15, 2019'),
  // streetAddress: {
  //   addressLine1: '12345 Aldergrove Street',
  //   addressLine2: null,
  //   city: 'Portland',
  //   state: 'OR',
  //   zip: '97217',
  // },
  // mailingAddress: {
  //   addressLine1: 'PO Box 51323',
  //   addressLine2: null,
  //   city: 'Portland',
  //   state: 'OR',
  //   zip: '97221'
  // },
  addresses: [{
    type: 'Mailing Address',
    addressLine1: '12345 Aldergrove Street',
    addressLine2: null,
    city: 'Portland',
    state: 'OR',
    zip: '97217',
  },
  {
    type: 'Street Address',
    addressLine1: null,
    addressLine2: null,
    city: null,
    state: null,
    zip: null,
  }],
  emails: [{
    type: 'Personal',
    email: 'carrieconway@gmail.com',
    //email: null,
  },
  {
    type: 'Work',
    email: 'carrie.conway@work.com',
    //email: null,
  }],
  phones: [{
    type: 'Mobile',
    phone: '555-555-5555',
    //phone: null,
  },
  {
    type: 'Work',
    phone: '222-222-2222',
    //phone: null,
  }],
  genderDescription: 'Female',
  medicareEligible: null,
  smoker: null,
  disabled: null,
  student: null,
};
