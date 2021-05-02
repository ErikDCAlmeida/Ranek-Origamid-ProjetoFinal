import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "Produto",
    props: true,
    component: () =>
      import(/* webpackChunkName: "produto" */ "../views/Produto.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/usuario",
    component: () =>
      import(/* webpackChunkName: "usuario" */ "../views/usuario/Usuario.vue"),
    children: [
      {
        path: "",
        name: "Usuario",
        component: () =>
          import(
            /* webpackChunkName: "usuarioprodutos" */ "../views/usuario/UsuarioProdutos.vue"
          ),
      },
      {
        path: "compras",
        name: "Compras",
        component: () =>
          import(
            /* webpackChunkName: "usuariocompras" */ "../views/usuario/UsuarioCompras.vue"
          ),
      },
      {
        path: "vendas",
        name: "Vendas",
        component: () =>
          import(
            /* webpackChunkName: "usuariovendas" */ "../views/usuario/UsuarioVendas.vue"
          ),
      },
      {
        path: "editar",
        name: "UsuarioEditar",
        component: () =>
          import(
            /* webpackChunkName: "usuarioeditar" */ "../views/usuario/UsuarioEditar.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
