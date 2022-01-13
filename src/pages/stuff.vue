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
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Keyboard</h3>
        <p>Placeholder</p>
      </div>
      <div class="box4">
        <h3>Headphones</h3>
        <p>Placeholder</p>
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
}
</style>
