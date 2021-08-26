import { RickMortyCharacter } from "./rickmorty-member.model";

export const getCharacters = async (): Promise<RickMortyCharacter[]> => {
	return fetch(`https://rickandmortyapi.com/api/character`).then((response) =>
		response.json().then((json) => json.results)
	);
};
