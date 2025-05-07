import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PokemonCard from '../components/pokemonItem/pokemonItem'
import { Comic } from '@/types/Comic'
import { getFormattedDate } from '../utils/getFormattedDate'
import { Pokemon, PokemonResponse } from '@/types/Pokemon'

const mockPokemonResponse: PokemonResponse = {
    "id": 1,
    "name": "Zephyr",
    "thumbnail": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "url": "",
}

describe('Comic Card', () => {
    it('renders the pokemon name', () => {
        render(<PokemonCard pokemon={mockPokemonResponse} />)

        const nameElement = screen.getByText(mockPokemonResponse.name)

        expect(nameElement).toBeInTheDocument()
    })

    it('renders the pokedex ID', () => {
        render(<PokemonCard pokemon={mockPokemonResponse} />)

        const idElement = screen.getByText(/Pokedex ID:/i).closest('p');

        expect(idElement).toBeInTheDocument()
        const strongElement = idElement?.querySelector('strong');
        expect(strongElement).toBeInTheDocument();
        expect(strongElement).toHaveTextContent('Pokedex ID:');
        expect(idElement).toHaveTextContent(`Pokedex ID: ${mockPokemonResponse.id}`)
    })

    it('renders the pokemon thumbnail', () => {
        render(<PokemonCard pokemon={mockPokemonResponse} />)

        const thumbnailElement = screen.getByRole('img')

        expect(thumbnailElement).toBeInTheDocument()
        expect(thumbnailElement.getAttribute('src')).toContain(encodeURIComponent(mockPokemonResponse.thumbnail))
    })
})