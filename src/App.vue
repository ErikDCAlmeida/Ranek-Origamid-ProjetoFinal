<template>
  <div id="app">
    <Header />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
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
label {
  margin-bottom: 5px;
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
input,
textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}
input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0px 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
