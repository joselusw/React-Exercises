import { GithubMember } from "./api/github/github-member.model";
import { RickMortyCharacter } from "./api/rickmorty/rickmorty-member.model";
import * as viewModel from "./generic-row.vm";

export const mapGithubMemberIntoGenericRow = (
	gitHubMember: GithubMember
): viewModel.GenericRow => {
	return Boolean(gitHubMember)
		? {
				name: gitHubMember.login,
				url: gitHubMember.html_url,
				avatar: gitHubMember.avatar_url,
		  }
		: viewModel.createEmptyGenericRow();
};

export const mapGithubResponseToVm = (
	apiResponse: GithubMember[]
): viewModel.GenericRow[] =>
	apiResponse.map((resp) => mapGithubMemberIntoGenericRow(resp));

export const mapRickMortyCharacterIntoGenericRow = (
	character: RickMortyCharacter
): viewModel.GenericRow => {
	return Boolean(character)
		? {
				name: character.name,
				url: `https://rickandmortyapi.com/api/character/${character.id}`,
				avatar: character.image,
		  }
		: viewModel.createEmptyGenericRow();
};

export const mapRickMortyResponseToVm = (
	apiResponse: RickMortyCharacter[]
): viewModel.GenericRow[] =>
	apiResponse.map((resp) => mapRickMortyCharacterIntoGenericRow(resp));
