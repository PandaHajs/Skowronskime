<template>
    <layout>
        <div class = "gallery">
          <div class="photo">
              <img src="../img/photo1.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo2.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo3.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo4.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo5.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo6.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo7.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo8.jpg"/>
          </div>
          <div class="photo">
              <img src="../img/photo9.jpg"/>
          </div>
        </div>

    </layout>
    
</template>

<style scoped>

.gallery{
    display: grid;
    grid-template-columns: auto auto auto;
}

img{
    border-radius: 50px;
    width: 300px;
    margin: 20px;
}
</style>