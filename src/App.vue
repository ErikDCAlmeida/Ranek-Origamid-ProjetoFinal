<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  color: #345;
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: 0 none;
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
