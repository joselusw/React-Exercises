import { GithubMember } from "./api/github-member.model";
import * as viewModel from "./generic-row.vm";

export const mapResponseIntoGenericRow = (
	apiResponse: GithubMember
): viewModel.GenericRow => {
	return Boolean(apiResponse)
		? {
				name: apiResponse.login,
				url: apiResponse.html_url,
				avatar: apiResponse.avatar_url,
		  }
		: viewModel.createEmptyGenericRow();
};

export const mapGithubEmployeeListToVm = (
	employeeList: GithubMember[]
): viewModel.GenericRow[] =>
	employeeList.map((emp) => mapResponseIntoGenericRow(emp));
