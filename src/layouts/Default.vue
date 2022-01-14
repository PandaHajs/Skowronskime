<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="link" to="/">/home</g-link>
        <g-link class="link" to="/stuff/">/stuff</g-link>
      </nav>
      <button id="theme" v-on:click="change">
        <p id="chk">a</p>
        <img id="moon" src="@/img/moon.svg" />
        <img id="sun" src="@/img/sun.svg" />
      </button>
    </header>
    <slot />
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: var(--maincolor);
  color: var(--textcolor);
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
  color: var(--textcolor);
  text-decoration: none;
  background-color: var(--buttoncolor);
  border-radius: 5px;
  border: 1px solid var(--buttoncolor);
}

.link:hover {
  background-color: var(--buttonhover);
  border: 1px solid black;
}

.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 5px;
  width: 58%;
  justify-content: flex-end;
}

#theme {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 0;
  justify-content: space-around;
  display: flex;
  align-items: center;
  background-color: var(--buttoncolor);
}

#theme:hover {
  border: 1px solid black;
  background-color: var(--darkmodebutton);
}

#moon,
#sun {
  width: 20px;
  height: 20px;
  filter: invert(var(--logocolor));
  position: absolute;
}

#moon {
  visibility: var(--lightmodevisibility);
}

#sun {
  visibility: var(--darkmodevisibility);
}

#chk {
  visibility: hidden;
  width: 0px;
  height: 0px;
}

.link2 {
  border-radius: 100%;
  background-color: var(--buttoncolor);
  border: 1px solid var(--maincolor);
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link2:hover {
  background-color: var(--buttonhover);
  border: 1px solid black;
}

:root {
  --buttonhover: rgb(151, 130, 139);
  --maincolor: rgb(184, 161, 171);
  --buttoncolor: rgb(197, 175, 185);
  --textcolor: black;
  --darkmodebutton: #2c3e50;
  --logocolor: 0;
  --darkmodevisibility: hidden;
  --lightmodevisibility: visible;
}

.darkmode {
  --maincolor: #2c3e50;
  --buttonhover: #9b59b6;
  --buttoncolor: #34495e;
  --textcolor: white;
  --darkmodebutton: rgb(184, 161, 171);
  --logocolor: 1;
  --darkmodevisibility: visible;
  --lightmodevisibility: hidden;
}
</style>

<script>
export default {
  methods: {
    check: function() {
      const dark = window.localStorage.getItem("darkmode");
      if (dark == "true") {
        document.body.classList.add("darkmode");
      } else if (dark == "false") {
        document.body.classList.remove("darkmode");
      }
    },
    change: function() {
      let dark = window.localStorage.getItem("darkmode");
      if (dark == "false" || !window.localStorage.getItem("darkmode")) {
        document.body.classList.add("darkmode");
        window.localStorage.setItem("darkmode", "true");
      } else if (dark == "true") {
        document.body.classList.remove("darkmode");
        window.localStorage.setItem("darkmode", "false");
      }
    }
  },
  mounted() {
    this.check();
  }
};
</script>
