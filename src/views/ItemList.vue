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
import {Getter} from 'vuex-class';

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {
  @Getter allTodoList!: any[];
  @Getter activeTodoList!: any[];
  @Getter clearTodoList!: any[];

  renderList: any[] = [];

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