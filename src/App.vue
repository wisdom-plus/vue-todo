<template>
  <div>
    カード一覧:{{cardList}}<br />
    カテゴリ一覧:{{categoryList}}
  </div>
</template>

<script>
import {computed, onMounted} from 'vue'
import { useStore} from 'vuex'

export default {
  name: 'App',
  components: {},
  setup() {
    const store = useStore();
    onMounted(store.dispatch("fetchCategoryList"));
    onMounted(store.dispatch("fetchCardList"));
    return {
      cardList: computed(() => store.getters.cardList),
      categoryList: computed(() => store.getters.categoryList)
    };
  }
};
</script>

<style></style>
