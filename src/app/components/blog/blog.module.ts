import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';

@NgModule({
  declarations: [BlogDetailComponent, BlogSingleComponent, LatestPostsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    LatestPostsComponent
  ]
})
export class BlogModule { }
