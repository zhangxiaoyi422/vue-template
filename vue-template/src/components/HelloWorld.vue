<template>
  <div class="hello">
    <button @click="addNum(2)">点赞123123123144dddddddddddd44444444421231233</button> </br>
    <span>{{agreeNum}}</span>
  </div>
</template>

<script>
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:{
        ...mapState('UserModule',[
            'agreeNum'
        ])
  },
  methods:{
    ...mapActions([
        'addNum', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        // 'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    // addNumHandler(){
    //     // this.$store.dispatch('addNum')
    //     this.$store.dispatch('addNum').UserModule
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
