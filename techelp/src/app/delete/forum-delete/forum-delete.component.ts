import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/model/Forum';
import { AlertasService } from 'src/app/service/alertas.service';
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
    private alertas: AlertasService
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
      this.alertas.showAlertSuccess('forum apagado com sucesso')
      this.router.navigate(['/forum'])
    })
  }

}