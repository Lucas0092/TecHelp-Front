import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Forum } from '../model/Forum';
import { Resposta } from '../model/Resposta';
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

   

  constructor(
    private router: Router,
    private respostaService: RespostaService,
    private forumService: ForumService,
  ) { }

  ngOnInit(){

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

  }

  getAllResposta(){
    this.respostaService.getAllResposta().subscribe((resp: Resposta[]) => {
      this.listaResposta = resp
    })
  }

  getAllForum(){
    this.forumService.getAllForum().subscribe((resp: Forum[]) => {
      this.listaForum = resp
    })
  }

}
