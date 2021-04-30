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
import { serialize } from "@/helpers.js";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then((r) => {
        this.produtos = r.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
