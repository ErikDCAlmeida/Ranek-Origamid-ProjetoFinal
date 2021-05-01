<template>
  <form>
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="nome" />
    <!-- <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="senha">Senha</label>
    <input type="password" name="senha" id="senha" v-model="senha" />
    <label for="cep">CEP</label>
    <input type="text" name="cep" id="cep" v-model="cep" />
    <label for="numero">Número</label>
    <input type="number" name="numero" id="numero" v-model="numero" />
    <label for="bairro">Bairro</label>
    <input type="text" name="bairro" id="bairro" v-model="bairro" />
    <label for="cidade">Cidade</label>
    <input type="text" name="cidade" id="cidade" v-model="cidade" />
    <label for="estado">Estado</label>
    <input type="text" name="estado" id="estado" v-model="estado" /> -->
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }), //Utilizando desse modo é a mesma coisa que fazer a parte de baixo comentada para todos um por um, só que mais resumido.
    // nome: {
    //   get() {
    //     return this.$store.state.usuario.nome;
    //   },
    //   set(value) {
    //     this.$store.commit("UPDATE_USUARIO", { nome: value });
    //   },
    // },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.button {
  grid-column: 2;
  margin-top: 20px;
}
</style>
