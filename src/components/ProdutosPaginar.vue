<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">
        {{ pagina }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total != Infinity ? Math.ceil(total) : 0;
    },
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 9;
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - 5);
      pagesArray.splice(range, total - 5);

      return pagesArray;
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
}
li {
  display: inline-block;
}
li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}
li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
