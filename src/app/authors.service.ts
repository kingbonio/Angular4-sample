import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Iain M Banks", "Isaac Asimov", "Philip K Dick"];
  }

}
