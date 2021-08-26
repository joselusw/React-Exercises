import React from "react";
import {
	TabComponent,
	TabListComponent,
	TabPanelComponent,
} from "../../common/components/tab";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import { jsx, css } from "@emotion/react";
import { getMembersByOrgId } from "./api/github.api";
import { createEmptyGenericRow, GenericRow } from "./generic-row.vm";
import { mapGithubEmployeeListToVm } from "./responses-mapper";
import {
	AppBar,
	Button,
	CardActions,
	Grid,
	ImageList,
} from "@material-ui/core";

export const MainComponent: React.FC = () => {
	const [tab, setTab] = React.useState(0);
	const [githubMembers, setGithubMembers] = React.useState<GenericRow[]>([]);

	const onLoadGithub = async () => {
		const members = await getMembersByOrgId("lemoncode");
		const githubVM = mapGithubEmployeeListToVm(members);
		setGithubMembers(githubVM);
	};

	React.useEffect(() => {
		onLoadGithub();
	}, []);

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
				<Grid container spacing={2}>
					{githubMembers.map((member) => (
						<Grid item xs={2} sm={4} md={4} key={member.name}>
							<Card>
								<CardMedia
									component="img"
									height="300"
									src={member.avatar}
								/>
								<CardContent>
									<div>
										<Typography
											variant="h5"
											component="h3"
											align="center"
										>
											{member.name}
										</Typography>
									</div>
								</CardContent>
								<CardActions
									style={{ justifyContent: "center" }}
								>
									<Button
										size="large"
										onClick={() =>
											window.open(member.url, "_blank")
										}
									>
										Github
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</TabPanelComponent>
			<TabPanelComponent value={tab} index={1}>
				<h3>Rick & Morty</h3>
			</TabPanelComponent>
		</>
	);
};
