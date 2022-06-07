<template>
  <div>
    カード一覧：{{ cardList }}<br />
    カテゴリ一覧：{{ categoryList }}
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    onMounted(store.dispatch("fetchCategoryList"));
    onMounted(store.dispatch("fetchCardList"));
    return {
      cardList: computed(() => store.state.cardList),
      categoryList: computed(() => store.state.categoryList)
    };
  }
};
</script>

<style></style>
