<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="link" to="/">/home</g-link>
        <g-link class="link" to="/stuff/">/stuff</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      copyright © 2022 kacper skowronski.
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: rgb(184, 161, 171);
  color: #111;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.link {
  margin: 20px;
  color:#111;
  text-decoration: none;
  transition: rgb(201, 179, 189) .5s;
  background-color: rgb(197, 175, 185);
  border-radius: 5px;
}

.link:hover{
  background-color: rgb(151, 130, 139);
}

.footer{
position: absolute;
bottom: 0;
display: flex;
padding: 5px;
width: 58%;
justify-content: flex-end;
}

</style>
