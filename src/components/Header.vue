<template>
    <header class="header">
      <nav 
        class="navbar"
        :class="$route.path === '/' ? '' : 'with-background'"
      >
        <div class="container">
          <div class="navbar-brand">
            <a
              @click="alertMessage"
              class="navbar-item has-text-white is-size-2 has-text-weight-bold" 
              href="#"
            >
              {{ brandName }}
            </a>
            <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbar-menu" class="navbar-menu">
            <div class="navbar-end">
              <div
                v-if="isAuthenticated"
                class="navbar-item nav-home"
              >
                {{user.email}}
              </div>
              <router-link
                v-for="link in items"
                :key="link.text"
                class="navbar-item nav-home"
                :to="link.link"                
              >{{ link.text }}</router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    brandName: {
      type: String,
      default: 'Exchangario Default'
    },
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    alertMessage() {
      alert('Hello')
    }
  }
}
</script>
