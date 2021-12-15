<template>
  <Layout>
    <h1>My Internet Presence</h1>
    <div>
      <table>
        <tr>
          <th>Site</th>
          <th>Username</th>
          <th>Link</th>
       </tr>
       <tr>
         <td>Steam</td>
         <td>Kac Biznesu</td>
         <td><a href="https://steamcommunity.com/id/Brothersmoment/">Click</a></td>
        </tr>
        <tr>
          <td>Discord</td>
          <td>Kac Biznesu#4012</td>
          <td>Lmao what</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>PandaHajs</td>
          <td><a href="https://github.com/PandaHajs">Click</a></td>
        </tr>
        <tr>
          <td>AniList</td>
          <td>Kac</td>
          <td><a href="https://anilist.co/user/Kac/">Am a Weeb</a></td>
        </tr>
      </table>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Presence'
  }
}
</script>

<style>
td, th{
  text-align: left;
  padding: 8px;
  border: 1px solid #111;
}

table{
  border-collapse: collapse;
  width: 100%;
}

a{
  text-decoration: none;
  color: #111;
}
</style>
