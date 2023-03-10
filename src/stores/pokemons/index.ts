import type { Pokemon } from "@/types";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

import { computed } from "vue";

const fakePokemons: Pokemon[] = [];

const setup = () => {
  // Data
  const pokemons = reactive(fakePokemons);
  const search = ref("");

  // Computed

  const filteredPokemons = computed(() => {
    return pokemons.filter((pokemon) => {
      return pokemon.name.includes(search.value);
    });
  });

  // Methods | Actions

  // Create a function that fetches pokemons from api

  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        const results: Pokemon[] = data.results.map((item: Pokemon) => {
          const splitURL = item.url.split("/");
          const id = splitURL[splitURL.length - 2];

          return {
            id: id,
            name: item.name,
            url: item.url,
          };
        });

        // Delete all pokemons from the array
        pokemons.splice(0, pokemons.length);
        // Add new pokemons to the array
        pokemons.push(...results);
      });
  };

  const getPokemon = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
  };
  return { search, pokemons, filteredPokemons, getPokemons, getPokemon };
};

export const usePokemonStore = defineStore("pokemon", setup);
