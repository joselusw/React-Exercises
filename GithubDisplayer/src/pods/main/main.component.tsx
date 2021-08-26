import React from "react";
import {
	TabComponent,
	TabListComponent,
	TabPanelComponent,
} from "../../common/components/tab";
import { getMembersByOrgId } from "./api/github/github.api";
import { GenericRow } from "./generic-row.vm";
import {
	mapGithubResponseToVm,
	mapRickMortyResponseToVm,
} from "./responses-mapper";
import { AppBar, Grid } from "@material-ui/core";
import { getCharacters } from "./api/rickmorty/rickmorty.api";
import { CustomCard } from "../../common/components/card/card.component";
import { filterStore } from "../../common/stores/filter.store";
import { useDebounce } from "use-debounce/lib";

export const MainComponent: React.FC = () => {
	const [tab, setTab] = React.useState(0);
	const [githubMembers, setGithubMembers] = React.useState<GenericRow[]>([]);
	const [characters, setCharacters] = React.useState<GenericRow[]>([]);
	const filter = filterStore((state) => state.filter);
	const [debounceFilter] = useDebounce(filter, 500);
	const disableSearch = filterStore((state) => state.setDisabled);

	const onLoadGithub = async () => {
		const githubResponse = await getMembersByOrgId(filter);
		const members = mapGithubResponseToVm(githubResponse);
		setGithubMembers(members);
	};

	const onloadRMCharacters = async () => {
		const rickMortyResponse = await getCharacters();
		const characters = mapRickMortyResponseToVm(rickMortyResponse);
		setCharacters(characters);
	};

	const onTabChange = (newValue) => {
		setTab(newValue);
		disableSearch(newValue !== 0);
	};

	React.useEffect(() => {
		onLoadGithub();
		onloadRMCharacters();
	}, [debounceFilter]);

	return (
		<>
			<AppBar position="static">
				<TabListComponent
					value={tab}
					onChange={onTabChange}
					indicatorColor="secondary"
					textColor="secondary"
					variant="fullWidth"
					aria-label="true"
				>
					<TabComponent label="Github" />
					<TabComponent label="Rick & Morty" />
				</TabListComponent>
			</AppBar>
			<TabPanelComponent value={tab} index={0}>
				<Grid container spacing={2}>
					{githubMembers.map((member) => (
						<Grid item xs={2} sm={4} md={4} key={member.name}>
							<CustomCard row={member} />
						</Grid>
					))}
				</Grid>
			</TabPanelComponent>
			<TabPanelComponent value={tab} index={1}>
				<Grid container spacing={2}>
					{characters.map((member) => (
						<Grid item xs={2} sm={4} md={4} key={member.name}>
							<CustomCard row={member} />
						</Grid>
					))}
				</Grid>
			</TabPanelComponent>
		</>
	);
};
function useStore(arg0: (state: any) => any) {
	throw new Error("Function not implemented.");
}
