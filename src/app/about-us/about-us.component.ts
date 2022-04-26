import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any[] = [];
  constructor(private aboutUshttp: NodeserviceService) {}

  ngOnInit(): void {
    this.aboutUshttp
      .getAboutUsDataFromMyNodeServer()
      .subscribe((aboutUsData) => {
        this.aboutUsData = aboutUsData;
      });
  }
}
