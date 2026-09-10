import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
Download() {
  const link = document.createElement('a');

  link.href = 'assets/cv/aya.hassan .pdf';
  link.download = 'Aya-Hassan-CV.pdf';

  link.click();
}
}
