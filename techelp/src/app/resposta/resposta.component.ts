import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';
import { Resposta } from '../model/Resposta';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ForumService } from '../service/forum.service';
import { RespostaService } from '../service/resposta.service';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  resposta: Resposta = new Resposta()
  listaResposta: Resposta[]

  forum: Forum = new Forum()

  idForum: number

  user: Usuario = new Usuario()
  idUser = environment.id

  temImagem: boolean

  constructor(
    private router: Router,
    private respostaService: RespostaService,
    private forumService: ForumService,
    public authService: AuthService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.idForum = this.route.snapshot.params['id']
    this.findByIdForum()

  }


  comentar() {
    this.forum.id = this.idForum
    this.resposta.forum = this.forum

    this.user.id = this.idUser
    this.resposta.usuario = this.user

    this.respostaService.postResposta(this.resposta).subscribe((resp: Resposta) => {
      this.resposta = resp
      alert('resposta realizada com sucesso')
      this.resposta = new Resposta()
    })

  }

  findByIdForum() {
    this.forumService.getByIdForum(this.idForum).subscribe((resp: Forum) => {
      this.forum = resp
      console.log(this.forum)
    })
  }


}
