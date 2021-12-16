<template>
  <Layout>
      <h1>Hello There</h1>

      <p>I don't really know how you got here... but here goes</p>
      <div class="box">
        <img src="../Koto.png" class="img">
        <p>My first name's Casper but with a K and a C, 
          middle name's Maria, yes it can be a man's 
          name too, my surname's Skowroński
        <br><br>
          A 17 year old IT Student from Poland with the life motto 
          “If I don't have to do it, I won't. If I have to do it, I'll make it quick.”, 
          who for some reason made this site without having to</p>
      </div>
      <div id="box3">
        <button class="btn"><a href=""><img src="../discord.png"></a></button>
        <button class="btn"><a href="https://github.com/PandaHajs"><img src="../GitHub-Emblem.png"></a></button>
        <button class="btn"><a href=""><img src=""></a></button>
        <button class="btn"><a href=""><img src=""></a></button>
        <button class="btn"><a href=""><img src=""></a></button>
        <button class="btn"><a href=""><img src=""></a></button>
      </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Main'
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

.img{
  border-radius: 100%;
  height: 11rem;
  width: 11rem;
}

#box3{
  display: grid;
  justify-content: right;
  grid-template-columns: auto auto auto;
  grid-gap: 20px 20px;
}

.btn{
  width: 80px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img{
  width: 60px;
  height: 30px;
  display: flex;
}
</style>
