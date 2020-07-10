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

@Component({
  components: {
    Item,
  }
})
export default class ItemList extends Vue {
  data: any[] = [
    {id: 0, title: 'test1', status: 'active'},
    {id: 1, title: 'test2', status: 'active'},
    {id: 2, title: 'test3', status: 'clear'},
  ];

  renderList: any[] = this.data;

  @Watch('$route.params.status')
  routeUpdate(newValue: string) {
    if (!newValue) {
      this.renderList = this.data;
    } else if (newValue === 'active' || newValue === 'clear') {
      this.renderList = this.data.filter((item: any) => item.status === newValue);
    }
  }
}
</script>

<style>

</style>