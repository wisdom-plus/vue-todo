<template>
  <div class = 'list-style'>
    {{category.title}}
    <MainCard
      v-for="card in cardList"
      :key="card.id"
      :card="card"
      :isNew="false"
      ></MainCard>
    <MainCard :card="newCard" :isNew="true"></MainCard>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import MainCard from './MainCard.vue';

export default {
  components: {MainCard},
  props: {
    category: Object
  },
  setup(props) {
    const store = useStore();
    onMounted(store.dispatch("fetchCardList"));
    const cardList = computed(() =>
      store.state.cardList.filter(card => card.categoryId === props.category.id));
    const newCard = {
      id: -1,
      text: "",
      categoryId: props.category.id
    };
    return {
      cardList,
      newCard
    }
  }
};
</script>

<style scoped>
.list-style {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  background-color: silver;
  min-width: 200px;
  min-height: 400px;
}
</style>
