<template>
  <div class="container">
    <div class="header">
      <nav>
        <RouterLink to="/">
          <h1>Hacker news clone</h1>
        </RouterLink>
        <RouterLink to="/new">new</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  row-gap: 1rem;
}

.list {
  display: grid;
  row-gap: 2rem;
}

.header {
  display: flex;
  background-color: var(--colorThemePrimary);
  padding: 10px;
  font-size: 1rem;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

html {
  font-size: 16px;
  color: var(--colorFontPrimary);
}
</style>
