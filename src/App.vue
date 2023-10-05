<!--
	@author bluefirex
-->
<template>
  <div class="main-app">
    <header>
      <div class="logo">Logo</div>

      <nav>
        <ul>
          <!-- 
						1. Adding exact prop to prevent being 'active' for every route
						2. Can be specified also by using name e.g. :to="{ name: 'index' }" || :to="'index'" to make links a bit less brittle
					-->
          <li><router-link to="/" exact>Home</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="main-app-content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
$blue-color: #17a;

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Cerebri Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;
}

.main-app {
  > header {
    display: flex;
    align-items: center;

    background: #fff;
    box-shadow: 0px 2px 3px rgba(#000, 0.1), 0px 3px 6px rgba(#000, 0.04);

    .logo {
      width: 128px;
      align-self: stretch;
      background: rgba($blue-color, 0.1);
      color: $blue-color;
    }
  }

  nav {
    flex: 1;

    ul {
      display: flex;
      list-style-type: none;
      justify-content: flex-end;
      align-items: center;
      padding: 0;

      li {
        display: block;

        a {
          color: $blue-color;
          text-decoration: none;

          padding: {
            left: 20px;
            right: 20px;
          }

          &:hover {
            color: #777;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
