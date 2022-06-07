import { createStore } from "vuex";
import fetchItems, { insertItems } from "../../utils/http.js";

export default createStore({
  state() {
    return {
      categoryList: [],
      cardList: [],
    };
  },
  mutations: {
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList;
    },
    setCardList(state, cardList) {
      state.cardList = cardList;
    },
  },
  actions: {
    async fetchCategoryList(context) {
      const categoryList = await fetchItems("http://localhost:3000/categories");
      context.commit("setCategoryList", categoryList);
    },
    async fetchCardList(context) {
      const cardList = await fetchItems("http://localhost:3000/todos");
      context.commit("setCardList", cardList);
    },
    async addCard(context, data) {
      await insertItems("http://localhost:3000/todos", data);
    },
  },
});
