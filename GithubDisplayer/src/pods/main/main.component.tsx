import React from "react";
import {
	TabComponent,
	TabListComponent,
	TabPanelComponent,
} from "../../common/components/tab";
import { AppBar } from "@material-ui/core";
import { jsx, css } from "@emotion/react";

export const MainComponent: React.FC = () => {
	const [tab, setTab] = React.useState(0);

	return (
		<>
			<AppBar position="static">
				<TabListComponent
					value={tab}
					onChange={setTab}
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
				<h3>Github</h3>
			</TabPanelComponent>
			<TabPanelComponent value={tab} index={1}>
				<h3>Rick & Morty</h3>
			</TabPanelComponent>
		</>
	);
};
