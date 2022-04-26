import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactData: any[] = [];
  constructor(private contactService: NodeserviceService) {}

  ngOnInit(): void {
    this.contactService
      .getContactDataFromMyNodeServer()
      .subscribe((contactData) => {
        this.contactData = contactData;
      });
  }
}
