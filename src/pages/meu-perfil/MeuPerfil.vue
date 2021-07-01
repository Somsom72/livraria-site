<template>
<div class="meu-perfil">
<div class="card m-4 p-3 centered" id="info-form">
    <div class="card-block">
      <h1> Meu Perfil </h1>
        <img src="../../assets/img/profile-icon.png" id="icon" alt="profile icon"><br>
        <p class="normal-text"> Informações </p><br>
        <p class="small-text"> Nome: </p>
        <div class="pill-block">
          <div class="pill-block-text">
            {{ user.name }}
          </div>
        </div><br><br>
        <p class="small-text"> Email: </p>
        <div class="pill-block">
          <div class="pill-block-text">
            {{ user.email }}
          </div>
        </div><br><br>
        <p class="small-text"> Phone: </p>
        <div class="pill-block">
          <div class="pill-block-text">
            {{ user.phone }}
          </div>
        </div><br><br>
        <p class="small-text"> Address: </p>
        <div class="pill-block">
          <div class="pill-block-text">
            {{ user.address }}
          </div>
        </div><br>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'meu-perfil',
  data () {
    return {
      user: {}
    }
  },

  beforeMount () {
    this.user = window.user
  }

}
</script>

<style scoped lang="scss">
#icon {
display: block;
margin: auto;
height: 124px;
width: 124px;
border-radius: 50%;
}

.normal-text, .small-text {
font-family: 'Open Sans', sans-serif;
text-align: center;
margin-bottom: 5px;
color: white
}

.pill-block {
height: 30px;
background-color: white;
border-style: solid;
border-color: grey;
border-radius: 20px;
border-width: 1px;
position: relative;
left: 50%;
transform: translate(-50%, 0);
width: 700px
}

.pill-block-text {
font-family: 'Open Sans', sans-serif;
font-size: 18px;
font-weight: bold;
text-align: center;
position: relative;
top: 50%;
transform: translate(0, -50%);
}

.normal-text {
font-size: 25px;
}

.small-text {
font-size: 16px;
}

#info-form{
background-color: var(--main-color);
width: 900px
}
</style>
