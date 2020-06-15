import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EMPLOYEEDETAILS_MOCK as data, EmployeeDetails, Address, Email, Phone } from '../mock';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent implements OnInit {

  details = data;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  printBirthday(): string {
    return new Intl.DateTimeFormat('en-US').format(this.details.dateOfBirth);
  }

  printSocial(): string {
    return '*******' + this.details.maskedSocialSecurity.substr(7);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileContentDialogComponent, {
      data: {
        fullName: this.details.fullName,
        preferredFirstName: this.details.preferredFirstName,
        maskedSocialSecurity: this.details.maskedSocialSecurity,
        dateOfBirth: this.details.dateOfBirth,
        addresses: this.details.addresses,
        emails: this.details.emails,
        phones: this.details.phones,
        genderDescription: this.details.genderDescription,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.details = result;
      }
    });
  }

}

@Component({
  selector: 'profile-content-dialog',
  templateUrl: './profile-content-dialog.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProfileContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeDetails) {
     }

  hide: boolean = true;
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  addAddress(): void {
    this.data.addresses.push({
      addressLine1: '',
      addressLine2: null,
      city: '',
      state: '',
      zip: '',
      type: 'Mailing Address',
    });
  }

  removeAddress(address: Address): void {
    this.data.addresses.splice(this.data.addresses.indexOf(address), 1);
  }

  addEmail(): void {
    this.data.emails.push({
      email: '',
      type: 'Personal',
    });
  }

  removeEmail(email: Email): void {
    this.data.emails.splice(this.data.emails.indexOf(email), 1);
  }
  addPhone(): void {
    this.data.phones.push({
      phone: '',
      type: 'Mobile',
    });
  }

  removePhone(phone: Phone): void {
    this.data.phones.splice(this.data.phones.indexOf(phone), 1);
  }
}
