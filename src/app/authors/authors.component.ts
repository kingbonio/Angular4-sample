import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  template: `
  <h2>Here are some authors</h2>
  <div>
  <ul>
  <li *ngFor="let author of authors">{{ author }}</li>
  </ul>
  </div>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
  }

}
