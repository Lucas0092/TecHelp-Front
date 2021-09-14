import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forum } from 'src/app/model/Forum';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-forum-edit',
  templateUrl: './forum-edit.component.html',
  styleUrls: ['./forum-edit.component.css']
})
export class ForumEditComponent implements OnInit {
  forum: Forum = new Forum()
  idTema: number

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }


  }

}
