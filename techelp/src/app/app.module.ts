import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { ForumComponent } from './forum/forum.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from "@angular/forms";
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemComponent } from './postagem/postagem.component';
import { RespostaComponent } from './resposta/resposta.component';
import { CursoComponent } from './curso/curso.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CursoEditComponent } from './edit/curso-edit/curso-edit.component';
import { ForumEditComponent } from './edit/forum-edit/forum-edit.component';
import { RespostaEditComponent } from './edit/resposta-edit/resposta-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { CursoDeleteComponent } from './delete/curso-delete/curso-delete.component';
import { ForumDeleteComponent } from './delete/forum-delete/forum-delete.component';
import { RespostaDeleteComponent } from './delete/resposta-delete/resposta-delete.component';
import { NovosCursosComponent } from './novos-cursos/novos-cursos.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ResultadoPesquisaComponent } from './resultado-pesquisa/resultado-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    PostagemComponent,
    ForumComponent,
    RespostaComponent,
    CursoComponent,
    SobreComponent,
    TemaEditComponent,
    UsuarioEditComponent,
    CursoEditComponent,
    ForumEditComponent,
    RespostaEditComponent,
    TemaDeleteComponent,
    CursoDeleteComponent,
    ForumDeleteComponent,
    RespostaDeleteComponent,
    NovosCursosComponent,
    AlertasComponent,
    ResultadoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
