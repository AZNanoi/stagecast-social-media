import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HideUiCommunicationService} from '../../../services/component-communicators/hide-ui-communication.service';
import {Subscription} from 'rxjs/Subscription';
import {SocialMediaApiService} from '../../../services/social-media/social-media-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit, OnDestroy {
  @ViewChild('messageElement') messageElement: ElementRef;

  public message: string;
  public hideUiSubscription: Subscription;
  public subscriptionForm: FormGroup;

  constructor( private hideUiCommunicationService: HideUiCommunicationService,
               private fb: FormBuilder,
               private socialMediaApiService: SocialMediaApiService) {
    this.subscriptionForm = fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.subscriptionForm.valid && this.subscriptionForm.touched) {
      this.message = 'Success: You signed up to the Stagecast newsletter.';
      console.log('you submitted value:', this.subscriptionForm.value.email);
      /*this.socialMediaApiService.saveEmailToSubscriptionList(form.email).subscribe(
         (res) => {
           console.log('success');
           this.message = 'Success: You signed up to the Stagecast newsletter.';
         },
         (error) => {
           console.log('Failed');
           this.message = 'There was an error.';
         }
       );*/
    }else {
      if (!this.subscriptionForm.controls['email'].valid && this.subscriptionForm.controls['email'].touched) {
        this.message = 'Please enter the correct email, this email is not valid.';
      }
    }
  }

  hideMessage(): void {
    if (this.message) {
      this.message = null;
    }
  }

  ngOnInit() {
    this.hideUiSubscription = this.hideUiCommunicationService.hideUIObservable$.subscribe((event) => {
      if (this.messageElement) {
        if (this.messageElement.nativeElement !== event.target) {
          this.hideMessage();
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.hideUiSubscription) {
      this.hideUiSubscription.unsubscribe();
    }
  }
}
