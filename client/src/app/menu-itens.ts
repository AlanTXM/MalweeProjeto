import { ClientComponent } from "./client/client.component";
import { ColectionComponent } from "./colection/colection.component";
import { GroupComponent } from "./group/group.component";
import { ProductComponent } from "./product/product.component";
import { RequestComponent } from "./request/request.component";
import { SubgroupComponent } from "./subgroup/subgroup.component";
import { UserComponent } from "./user/user.component";
import { UsuarioComponent } from "./usuario/usuario.component";

export const MenuItens = [
    {
        path: 'user',
        caption : 'Usuário',
        icon : 'account_circle',
        component: UsuarioComponent,
    },
    {
        path: 'group',
        caption : 'Grupo',
        icon : 'assessment',
        component: GroupComponent,
    },
    {
        path: 'subgroup',
        caption : 'Subgrupo',
        icon : 'assessment',
        component: SubgroupComponent,
    },
    {
        path: 'colection',
        caption : 'Coleção',
        icon : 'assessment',
        component: ColectionComponent,
    },
    {
        path: 'product',
        caption : 'Produto',
        icon : 'store',
        component: ProductComponent,
    },
    {
        path: 'client',
        caption : 'Cliente',
        icon : 'face',
        component: UserComponent,
    },
    {
        path: 'request',
        caption : 'Pedidos',
        icon : 'shopping_cart',
        component: RequestComponent,
    }
]