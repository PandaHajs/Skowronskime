<template>
  <Layout>
    <h1>Stuff I use/have or something</h1>
    <h2>Hardware</h2>
    <div id="box5">
      <div class="box4">
        <h3>CPU</h3>
        <p>Intel Core I5 8300H</p>
      </div>
      <div class="box4">
        <h3>GPU</h3>
        <p>GTX 1050 Ti</p>
      </div>
      <div class="box4">
        <h3>RAM</h3>
        <p>idfk</p>
      </div>
      <div class="box4">
        <h3>Mouse</h3>
        <p>SilverCrest SGM 4000 A1</p>
      </div>
      <div class="box4">
        <h3>Keyboard</h3>
        <p>Cooler Master Masterkeys Lite L</p>
      </div>
      <div class="box4">
        <h3>Headphones</h3>
        <p>SoundBlaster Tactic3D Rage</p>
      </div>
      <div class="box4">
        <h3>Laptop</h3>
        <p>Lenovo Legion Y530</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
    </div>
    <h2>Software</h2>
    <div id="box5">
      <div class="box4">
        <h3>IDE</h3>
        <p>Visual Studio Code</p>
      </div>
      <div class="box4">
        <h3>Wallpaper</h3>
        <p>Wallpaper Engine</p>
      </div>
      <div class="box4">
        <h3>Recording Software</h3>
        <p>OBS</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Placeholder</h3>
        <p>Placeholder</p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "stuff"
  }
};
</script>

<style scoped>
p,
h3 {
  margin: 2px;
}
.box4 {
  width: 250px;
  border: 1px solid #111;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
}

#box5 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  animation: 1.5s ease-out 0s 1 Slidetop;
}

h2,
h1 {
  animation: 1s ease-out 0s 1 Slidetop;
}
@keyframes Slidetop {
  0% {
    transform: translateX(40%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
