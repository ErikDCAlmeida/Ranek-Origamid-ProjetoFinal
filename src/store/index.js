import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //Previne que os estados sejam mudados do lado de fora, sendo possível apenas com uma MUTATION.
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload); //Combinação de objetos para quando já existe um informação, ele substituir apenas seu resultado.
    },
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then((result) => {
        context.commit("UPDATE_USUARIO", result.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
  },
  modules: {},
});
