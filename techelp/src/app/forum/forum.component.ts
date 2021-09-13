import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';
import { ForumService } from '../service/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forum: Forum = new Forum()
  listaForum: Forum[]


  constructor(
    private router: Router,
    private forumService: ForumService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findAllForum()

  }


  findAllForum() {
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
    })
  }

  cadastrar() {
    this.forumService.postForum(this.forum).subscribe((resp: Forum) => {
      this.forum = resp
      alert('cadastrado com sucesso')
      this.forum = new Forum()
    })
  }


}
