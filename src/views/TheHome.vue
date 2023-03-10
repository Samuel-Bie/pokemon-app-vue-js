<template>
  <div class="flex justify-center w-full">
    <input
      type="text"
      class="p-2 mt-10 border-2 border-blue-500"
      placeholder="Enter pokemon name"
      v-model="search"
    />
  </div>

  <div class="flex flex-wrap justify-center p-4 mt-10">
    <div
      class="ml-4 text-blue-200 text-2x"
      v-for="pokemon in filteredPokemons"
      :key="pokemon.id"
    >
      <router-link :to="`/about/${pokemon.id}`">
        {{ pokemon.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemons";
import { storeToRefs } from "pinia";

const pokemonsStore = usePokemonStore();

const { /* pokemons ,*/ filteredPokemons, search } = storeToRefs(pokemonsStore);

onMounted(() => {
  pokemonsStore.getPokemons();
});
</script>

<style scoped></style>
