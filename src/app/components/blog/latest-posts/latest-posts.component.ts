import { Component, Input, OnInit } from '@angular/core';

interface Post {
  bannerUrl: string;
  author: string;
  clicks: string;
  title: string;
  description: string;
  id: string;
  date: number;
}

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {

  constructor() { }

  @Input() posts: Post[];

  ngOnInit(): void {
  }



}
