<template>
  <div class="card-style">
    {{card.text}}
  </div>
</template>

<script>
export default {
  props: {
    card: Object
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
