import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css']
})
export class ResultadoPesquisaComponent implements OnInit {

  listaPostagens: Postagem[]
  tituloCurso: string

  constructor(public postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
      
    }
    this.tituloCurso = this.route.snapshot.params['curso']
    this.findByTituloCurso()
  }

  findByTituloCurso(){
    this.postagemService.getByCursoPostagem(this.tituloCurso).subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

}
