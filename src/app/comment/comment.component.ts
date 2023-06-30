import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  // comments$ = this.commentService.getComments();

  comments$ = this.activatedRoute.data.pipe(
    map(data => data['comments'])
  )

  // anything related to data, use activatedRoute service
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   console.log(data['comments'])
    // })
    
  }

} 
