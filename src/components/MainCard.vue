<template>
  <div class="card-style">
    <input type="text" v-if=" isNew" v-model="text" />
    <button @click="addCard" v-if=" isNew">追加</button>
    <span v-else>
      {{card.text}}
    </span>
  </div>
</template>

<script>
import {ref} from '@vue/reactivity'
import { useStore } from "vuex";

export default {
  props: {
    card: Object,
    isNew: Boolean
  },
  setup(props) {
    const store = useStore();
    let text = ref("");
    const addCard = async () => {
      const data = {
        text: text.value,
        categoryId: props.card.categoryId
      };
      await store.dispatch("addCard",data);
      await store.dispatch("fetchCardList");
      text.value = "";
    };
    return {
      text,
      addCard
    };
  }
};
</script>


<style scoped>
.card-style {
  display: flex;
  flex-direction: column;
  background-color: yellowgreen;
  margin: 10px;
  height: 10vh;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
</style>
