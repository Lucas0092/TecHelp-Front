import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/model/Forum';
import { ForumService } from 'src/app/service/forum.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-forum-delete',
  templateUrl: './forum-delete.component.html',
  styleUrls: ['./forum-delete.component.css']
})
export class ForumDeleteComponent implements OnInit {
  forum: Forum = new Forum()
  idTema: number

  constructor(
    private forumService: ForumService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idTema = this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.forumService.getByIdForum(id).subscribe((resp: Forum)=>{
      this.forum = resp
    })
  }

  apagar(){
    this.forumService.deleteByIdForum(this.idTema).subscribe(()=>{
      alert('forum apagado com sucesso')
      this.router.navigate(['/forum'])
    })
  }

}