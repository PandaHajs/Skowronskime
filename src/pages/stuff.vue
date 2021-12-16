<template>
  <Layout>
    <h1>Stuff I use/have or something</h1>
    <h2>Hardware</h2>
    <div id="box5">
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
      <div class="box4"> 
        <p>Placeholder</p>
      </div>
    </div>
    <h2>Software</h2>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'stuff'
  }
}
</script>

<style>

.box4{
  border: 1px solid #111;
  display: flex;
  justify-content: center;
  align-content: center;
}

#box5{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}

</style>
