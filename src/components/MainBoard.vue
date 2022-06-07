<template>
  <div class = 'board-style'>
    <MainList
      v-for="category in categoryList"
      :key="category.id"
      :category="category"
    ></MainList>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import MainList from './MainList.vue';

export default {
  components: {MainList},
  setup() {
    const store = useStore();
    onMounted(store.dispatch("fetchCategoryList"));
    return {
      categoryList: computed(() => store.state.categoryList)
    };
  }
}

</script>

<style scoped>
.board-style {
  display: flex;
  gap: 10px;
}
</style>
