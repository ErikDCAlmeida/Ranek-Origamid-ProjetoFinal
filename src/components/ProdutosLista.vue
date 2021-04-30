<template>
  <section>
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <h2 class="preco">{{ produto.preco }}</h2>
      <p class="titulo">{{ produto.nome }}</p>
      <p class="preco">{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      api.get("/produto").then((r) => {
        this.produtos = r.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
