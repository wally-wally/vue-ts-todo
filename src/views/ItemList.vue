<template>
  <div>
    <Item v-for="item in renderList"
      :id="item.id"
      :title="item.title"
      :status="item.status"
      :key="item.id"></Item>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import Item from '@/components/Item.vue';
import {mapGetters} from 'vuex';

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList',
    ]),
  },
})
export default class ItemList extends Vue {
  renderList: any[] = [];
  // mapGetters 관련 lint error를 없애기 위한 단순 선언 부분
  // 추후 vuex-class 라이브러리로 구현해보자.
  allTodoList!: any[];
  activeTodoList!: any[];
  clearTodoList!: any[];

  created() {
    this.$store.dispatch('initData');
  }

  initRenderList(status: string) {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === 'active') {
      this.renderList = this.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch('$route.params.status')
  routeUpdate(newValue: 'active' | 'clear') {
    this.initRenderList(newValue);
  }
  @Watch('$store.state.todoList', {deep: true})
  statusUpdate() {
    const status: string = this.$route.params.status;
    this.initRenderList(status);
  }
}
</script>

<style>

</style>