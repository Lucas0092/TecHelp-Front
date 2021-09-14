import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursoComponent } from './curso/curso.component';
import { CursoDeleteComponent } from './delete/curso-delete/curso-delete.component';
import { ForumDeleteComponent } from './delete/forum-delete/forum-delete.component';
import { RespostaDeleteComponent } from './delete/resposta-delete/resposta-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { CursoEditComponent } from './edit/curso-edit/curso-edit.component';
import { ForumEditComponent } from './edit/forum-edit/forum-edit.component';
import { RespostaEditComponent } from './edit/resposta-edit/resposta-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
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

{path: "sobre", component: SobreComponent},

{path: 'tema-edit/:id', component: TemaEditComponent},
{path: 'usuario-edit/:id', component: UsuarioEditComponent},
{path: 'curso-edit/:id', component: CursoEditComponent},
{path: 'forum-edit/:id', component: ForumEditComponent},
{path: 'resposta-edit/:id', component:RespostaEditComponent },

{path: 'tema-delete/:id', component: TemaDeleteComponent},
{path: 'forum-delete/:id', component: ForumDeleteComponent},
{path: 'curso-delete/:id', component: CursoDeleteComponent},
{path: 'resposta-delete/:id', component: RespostaDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
