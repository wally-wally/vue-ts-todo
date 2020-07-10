<template>
  <div id="app">
    <Header></Header>
    <ItemInput></ItemInput>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import ItemInput from '@/components/ItemInput.vue';

@Component({
  components: {
    Header,
    ItemInput,
  }
})
export default class App extends Vue {

}
</script>

<style>
#app {
  padding: 100px;
}
</style>
