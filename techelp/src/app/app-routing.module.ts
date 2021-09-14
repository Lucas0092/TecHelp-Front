import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursoComponent } from './curso/curso.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ForumComponent } from './forum/forum.component';
import { InicioComponent } from './inicio/inicio.component';
import { PostagemComponent } from './postagem/postagem.component';
import { RespostaComponent } from './resposta/resposta.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

{path: "", redirectTo: "entrar", pathMatch: "full"},

{path: "entrar", component: EntrarComponent},
{path: "cadastrar", component: CadastrarComponent},

{path: "inicio", component: InicioComponent},
{path: "tema", component: TemaComponent},
{path: "postagem", component: PostagemComponent},

{path: "forum", component: ForumComponent},
{path: "resposta/:id", component: RespostaComponent},
{path: 'curso/:id', component: CursoComponent},

{path: "sobre", component: SobreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
