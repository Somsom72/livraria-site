<template>
<div class="compra-finalizada">
  <div class="card m-4 p-3" id='main-card' align="center">
    <img src="../../assets/img/check-icon.jpg" alt="check icon" style="height: 200px; width: 200px;margin: 0 auto;"><br>
    <h1> Compra finalizada! </h1>
      <button type="button" name="home" class="btn btn-success mt-5" id="buy-button" @click='goToHome()'> Voltar para Home </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'compra-finalizada',
  methods: {
    goToHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
#main-card{
background-color: var(--main-color);
width: 900px
}

.icon {
display: block;
margin: auto;
height: 124px;
width: 124px;
border-radius: 50%;
}

#buy-button{
width: 150px;
font-size: 20px;
margin: 0 auto;
}
</style>
