<template>
    <div>
        <Hero />
        <section class="posts">
        <div class="container">
            <div class="posts-type">Latest Posts</div>
            <ExchangeList 
            :exchanges="exchanges"
            />
        </div>
        </section>
        <button
          @click="$store.dispatch('test')"
        >Test Vuex</button>
        <Pagination />
    </div>
</template>


<script>
import Hero from '@/components/Hero'
import Pagination from '@/components/Pagination'
import ExchangeList from '@/components/exchange/ExchangeList'

export default {
  components: {
    Hero,
    Pagination,
    ExchangeList
  },
  created() {
    this.$store.dispatch('exchange/bindExchanges')    
  },
  computed: {
    exchanges() {
      return this.$store.state.exchange.items
    }
  }
}
</script>