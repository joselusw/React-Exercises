import { GithubMember } from "./github-member.model";

export const getMembersByOrgId = async (
	id: string
): Promise<GithubMember[]> => {
	return fetch(`https://api.github.com/orgs/${id}/members`).then((response) =>
		response.json()
	);
};
