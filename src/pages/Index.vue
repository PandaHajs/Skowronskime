<template>
  <Layout>
      <h1>Hello There</h1>

      <p class="p1">I don't really know how you got here... but here goes</p>
      <div class="box">
        <img src="../img/Koto.png" class="img">
        <p class="p1">My first name's Casper but with a K and a C, 
          middle name's Maria, yes it can be a man's 
          name too, my surname's Skowroński
        <br><br>
          A 17 year old IT Student from Poland with the life motto 
          “If I don't have to do it, I won't. If I have to do it, I'll make it quick.”, 
          who for some reason made this site without having to</p>
      </div>
      <div id="box3">
        <a href="https://discord.gg/2HC6A7zV5E"><img src="../img/discord.png" class="logos"/></a>
        <a href="https://github.com/PandaHajs"><img src="../img/github.png" class="logos"/></a>
        <a href="https://steamcommunity.com/id/Brothersmoment/"><img src="../img/Steam.png" class="logos"/></a>
        <a href="https://anilist.co/user/Kac/"><img src="../img/al-logo-min.png" class="logos"/></a>
        <a href="https://twitter.com/K4cp3rSk0wr0n"><img src="../img/twitter.png" class="logos"/></a>
        <a href="https://open.spotify.com/user/bw0ll1dlqune2qo1lh0xjhqxo"><img src="../img/spotify.png" class="logos"/></a>
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

<style scoped>
.p1{
  margin: 0px;
  margin-bottom: 10px;
}
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

a{
  border-radius: 100%;
  background-color: rgb(197, 175, 185);
}

a:hover{
  background-color: rgb(151, 130, 139);
  border-radius: 100%;
}

#box3{
  display: grid;
  justify-content: right;
  grid-template-columns: auto auto auto;
  grid-gap: 20px 20px;
}

.logos{  
  height: 30px;
  display: flex;
  border-radius: 100%;  
}
</style>
