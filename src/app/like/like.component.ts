import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: [ './like.component.css' ],
})
export class LikeComponent implements OnInit {
  private isActive = false;
  private likesCount = 77;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
  }
}
