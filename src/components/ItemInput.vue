<template>
  <div class="form-group">
    <input type="text"
      class="form-control"
      v-model="title"
      @keyup.enter="addItem"
      placeholder="할 일을 입력해주세요.">
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {mapState} from 'vuex';

@Component({
  computed: {
    ...mapState([
      'todoList',
    ]),
  },
})
export default class ItemInput extends Vue {
  title: string = '';
  todoList!: any[];

  addItem() {
    this.$store.commit('addItem', {
      id: this.todoList[this.todoList.length - 1].id + 1,
      title: this.title,
      status: 'active',
    });
    this.title = '';
  }
}
</script>

<style>

</style>