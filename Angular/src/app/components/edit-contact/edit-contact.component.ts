import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';
import { EditContactService } from '../../services/edit-contact.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
    contactForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
    currentUser: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private editContactService: EditContactService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            email: [this.currentUser.contact.email, Validators.required],
            // phone: [this.currentUser.contact.phone, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
            phone: [this.currentUser.contact.phone, [Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
            city: [this.currentUser.contact.city],
            state: [this.currentUser.contact.state],
            zip: [this.currentUser.contact.zip]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        this.loading = true;
        this.editContactService.editContact(this.contactForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.currentUser.contact.email = this.contactForm.value.email;
                    this.currentUser.contact.phone = this.contactForm.value.phone;
                    this.currentUser.contact.city = this.contactForm.value.city;
                    this.currentUser.contact.state = this.contactForm.value.state;
                    this.currentUser.contact.zip = this.contactForm.value.zip;
                    // this.currentUser.contact.id = this.contactForm.value;
                    // this.authenticationService.currentUserValue(this.currentUser);
                    this.router.navigate(['/profile'], { queryParams: { updated: true }});
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}