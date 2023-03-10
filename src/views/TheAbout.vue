<template>
  <div class="about">
    <div
      v-if="loadedInfo"
      class="w-3/12 m-auto bg-purple-100 shadow-2xl flex justify-center flex-col items-center"
    >
      <h3 class="text-2xl text-green-900 uppercase">
        {{ localState.pokemon.name }}
      </h3>

      <div class="flex justify-center">
        <img
          class="w-48"
          :src="localState.pokemon.sprites.front_shiny"
          alt=""
        />
        <img class="w-48" :src="localState.pokemon.sprites.back_shiny" alt="" />
      </div>

      <h3 class="text-yellow-400">Types</h3>

      <div v-for="type in localState.pokemon.types" :key="type.id">
        <h5 class="text-blue-900">{{ type.type.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { usePokemonStore } from "@/stores/pokemons";

const pokemonsStore = usePokemonStore();

const loadedInfo = ref(false);
const localState = reactive({
  pokemon: {} as any,
});

// Define Props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});


// This is similar to On Created hook
pokemonsStore.getPokemon(props.id).then((data) => {
  localState.pokemon = data;
  loadedInfo.value = true;
});
</script>

<style scoped></style>
