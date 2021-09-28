import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ForumService } from '../service/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forum: Forum = new Forum()
  listaForum: Forum[]

  user: Usuario = new Usuario()
  idUser = environment.id

  temImagem = false

  constructor(
    private router: Router,
    private forumService: ForumService,
    public authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findAllForum()
    this.findUsuarioById()
  }


  findAllForum() {
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
    })
  }

  publicar() {

      this.forumService.postForum(this.forum).subscribe((resp: Forum) => {
      this.forum = resp
      this.findAllForum()
      this.alertas.showAlertSuccess('publicado com sucesso')
      this.forum = new Forum()
    })
  }

  findUsuarioById() {
    this.authService.getByIdUsuario(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  
}
