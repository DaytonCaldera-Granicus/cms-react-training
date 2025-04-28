'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "@/components/pokemonItem/pokemonItem";
import { Pokemon, PokemonResponse } from "@/types/Pokemon";
import ErrorAlert from "@/components/shared/errorAlert/errorAlert";
import LoadingSpinner from "@/components/shared/loadingSpinner/loadingSpinner";

export default function Home() {

  const { data: pokemons, loading, error } = usePokemon(``);


  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 185px)', gap: '20px' }}>
        {!loading && !error ? pokemons.map((item: any, index: number) => {
          const pokemon: PokemonResponse = {
            thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${++index}.png`,
            name: item.name,
            id: ++index,
            url: item.url
          }
          return (
            <PokemonCard key={index} pokemon={pokemon} />
          );
        }) : (!loading && error) ? <ErrorAlert data={error} /> : <LoadingSpinner/>}
      </main>
    </div>
  );
}
