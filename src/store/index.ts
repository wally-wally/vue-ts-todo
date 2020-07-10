import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {State, Item} from '@/store/index.interface';
import AxiosService from '@/service/axios.service';
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  mutations: {
    // add TODO item
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // change TODO item's status
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    // remove TODO item
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    },
  },
  actions: {
    async initData({commit}) {
      // HTTP 통신
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json');
      commit('setTodoList', response.data.todoList);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => state.todoList.filter((item: Item) => item.status === 'active'),
    clearTodoList: (state) => state.todoList.filter((item: Item) => item.status === 'clear'),
  },
};

export default new Vuex.Store(store);
