<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="busca" />
    <input
      type="submit"
      name="lupa"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({
        query: {
          q: this.busca,
        },
      });
    },
  },
};
</script>

<style scoped></style>
