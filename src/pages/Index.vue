<template>
  <Layout>
      <h1>Hello There</h1>

      <p>I don't really know how you got here... but here goes</p>
      <div class="box">
        <img src="../koto.png">
        <p>My first name's Casper but with a K and a C, 
          middle name's Maria, yes it can be a man's 
          name too, my surname's Skowroński
        <br><br>
          A 17 year old IT Student from Poland with the life motto 
          “If I don't have to do it, I won't. If I have to do it, I'll make it quick.”, 
          who for some reason made this site without having to</p>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Title'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.box{
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px 20px;
}

img{
  border-radius: 100%;
  height: 11rem;
  width: 11rem;
}
</style>
