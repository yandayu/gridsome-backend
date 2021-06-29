<template>
  <div class="layout">
    <header class="header">
      <g-link class="nav__link" to="/">
        <img width="60" height="24" src="/logo.svg" alt="" />
      </g-link>
      <nav class="nav">
        <strong>
          <g-link class="nav__link" to="/journal">
            Journal
          </g-link>
        </strong>
        <strong>
          <g-link class="nav__link" to="/contact">
            Say Hi
          </g-link>
        </strong>
      </nav>
    </header>
    <slot />
    <div class="foot">Copyright©2021</div>
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
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
  text-decoration: none;
}
.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: inherit;
}
.foot {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
