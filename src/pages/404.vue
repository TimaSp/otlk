<template>
  <div class="badRequest">
    <img src="./../assets/notFound22.png" alt="">
    <h1>Ошибка запроса</h1>
    <p>Вы ввели неверный номер либо контейнер не существует</p>
    <b-button v:click="goMain" variant="primary"><router-link to="/" style="color: white;">Главная</router-link></b-button>
  </div>
</template>

<script>
export default {
  methods: {
    // goMain() {
    //   this.$router.push({ name: 'home'})
    // }
  }
}
</script>

<style>

.badRequest {
  background-color: white;
  height: 100%;
  width: 100%;
  filter: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  width: 300px;
}
.badRequest h1 {
  font-size: 25px;
  font-weight: 600;
  color: black;
}
.badRequest p {
  color: #bebebe;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
}
.badRequest button {
  padding: 10px 40px;
  border-radius: 50rem;
}
</style>