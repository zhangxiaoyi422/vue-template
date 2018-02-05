<template>
  <div class="hello">
    <button @click="addNumHandler">点赞</button> </br>
    <span>{{agreeNum}}</span>
  </div>
</template>

<script>
import {mapState,mapAction} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:{
      agreeNum(){
          return this.$store.state.UserModule.agreeNum
      }
  },
  methods:{
    addNumHandler(){
        this.$store.dispatch('addNum')
    }
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
