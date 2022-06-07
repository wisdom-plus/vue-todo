import { createStore } from "vuex";
import fetchItems from "../../utils/http";

export default createStore({
  state() {
    return {
      categoryList: [],
      cardlist: [],
    };
  },
  mutations: {
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList;
    },
    setCardList(state, cardList) {
      state.cardlist = cardList;
    },
  },
  actions: {
    async fetchCategoryList(context) {
      const categoryList = await fetchItems("http://localhost:3000/categories");
      context.commit("setCategoryList", categoryList);
    },
    async fetchCardList(context) {
      const cardList = await fetchItems("http://localhost:3000/cards");
      context.commit("setCardList", cardList);
    },
  },
});
