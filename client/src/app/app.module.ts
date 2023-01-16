import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { RoutesModule } from './routes.module';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/services/http.service';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ColectionComponent } from './colection/colection.component';
import { SubgroupComponent } from './subgroup/subgroup.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { ModalComponent } from './modal/modal.component';
import { AddModalGroupComponent } from './add-modal-group/add-modal-group.component';
import { AddModalSubgroupComponent } from './add-modal-subgroup/add-modal-subgroup.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalsubgrupoComponent } from './modalsubgrupo/modalsubgrupo.component';
import { ModalcolectionComponent } from './modalcolection/modalcolection.component';
import { AddModalColectionComponent } from './add-modal-colection/add-modal-colection.component';
import { AddModalProductComponent } from './add-modal-product/add-modal-product.component';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { AddModalClientComponent } from './add-modal-client/add-modal-client.component';
import { ModalclientComponent } from './modalclient/modalclient.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddModalUsuarioComponent } from './add-modal-usuario/add-modal-usuario.component';
import { ModalusuarioComponent } from './modalusuario/modalusuario.component';
import { ModalEditClientComponent } from './modal-edit-client/modal-edit-client.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ListaGrupoComponent } from './lista-grupo/lista-grupo.component';
import { ListaSubgrupoComponent } from './lista-subgrupo/lista-subgrupo.component';
import { GetGroupComponent } from './get-group/get-group.component';
import { RequestComponent } from './request/request.component';
import { AddModalRequestComponent } from './add-modal-request/add-modal-request.component';
import { ModalEditRequestComponent } from './modal-edit-request/modal-edit-request.component';
import { ModalEditRequestProductComponent } from './modal-edit-request-product/modal-edit-request-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashComponent,
    GroupComponent,
    UserComponent,
    ColectionComponent,
    SubgroupComponent,
    ProductComponent,
    ClientComponent,
    ModalComponent,
    AddModalGroupComponent,
    AddModalSubgroupComponent,
    DropdownComponent,
    ModalsubgrupoComponent,
    ModalcolectionComponent,
    AddModalColectionComponent,
    AddModalProductComponent,
    ModalproductComponent,
    AddModalClientComponent,
    ModalclientComponent,
    UsuarioComponent,
    AddModalUsuarioComponent,
    ModalusuarioComponent,
    ModalEditClientComponent,
    DeleteModalComponent,
    ListaGrupoComponent,
    ListaSubgrupoComponent,
    GetGroupComponent,
    RequestComponent,
    AddModalRequestComponent,
    ModalEditRequestComponent,
    ModalEditRequestProductComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  ],
  exports : [
    RouterModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
