<template>
  <div  :class="{cheaperPrice ? 'green-background' : ''}">
    <label for="price">Price</label>
    <input type="number" name="price" v-model="price">
    <label for="diameter1">Diameter</label>
    <input type="number" name="diameter" max="50" v-model="diameter">
    <label for="pricePerSquareInch">Price Per Square Inch</label>
    <input type="number" name="pricePerSquareInch" v-model="pricePerSquareInch" disabled>
  </div>
</template>

<script>
import {ref, computed} from "vue";



export default {
  name: 'SinglePizzaForm',
  emits: ['pricePerSquareInch'],
  setup () {
    const price = ref(0);
    const diameter = ref(0);
    const pricePerSquareInch = computed(() => {
      return (price.value /(3.14 * Math.pow(diameter.value/2, 2)))
    });
    return {
      price,
      diameter,
      pricePerSquareInch,
    }
  }
}
</script>

<style scoped>

</style>
