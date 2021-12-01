<template>
 <div>
   <h1>Pizza Compare</h1>
   <SinglePizzaForm/>
   <SinglePizzaForm/>
 </div>
</template>

<script>


import SinglePizzaForm from "./components/SinglePizzaForm";
export default {
  name: 'App',
  components: {
    SinglePizzaForm
  }
}
</script>

<style>
#app {

}
</style>
