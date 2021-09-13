import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  listaForum: Forum[]

<<<<<<< HEAD
  idForum: number

  user: Usuario = new Usuario()
  idUser = environment.id
=======

>>>>>>> 00147aacec147cf1f89c17fcf8b9774c4a42a39a

  constructor(
    private router: Router,
    private respostaService: RespostaService,
    private forumService: ForumService,
    public authService: AuthService,
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
<<<<<<< HEAD

    this.getAllForum()
    this.getAllResposta()

  }

 getAllForum(){
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
    })
=======
    this.getAllResposta()
>>>>>>> 00147aacec147cf1f89c17fcf8b9774c4a42a39a
  }

  getAllResposta() {
    this.respostaService.getAllResposta().subscribe((resp: Resposta[]) => {
      this.listaResposta = resp
    })
  }

<<<<<<< HEAD
    comentar(){
      this.forum.id = this.idForum
      this.resposta.forum = this.forum
  
      this.user.id = this.idUser
      this.resposta.usuario = this.user
  
      this.respostaService.postResposta(this.resposta).subscribe((resp: Resposta) => {
        this.resposta = resp
        alert('Comentário realizado com sucesso')
        this.resposta = new Resposta()
      })

  }

  findByIdForum(){
    this.forumService.getByIdForum(this.idForum).subscribe((resp: Forum) =>{
      this.forum = resp
=======
  getAllForum() {
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
>>>>>>> 00147aacec147cf1f89c17fcf8b9774c4a42a39a
    })
  }


}
