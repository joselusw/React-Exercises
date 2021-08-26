import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { GenericRow } from "../../../pods/main/generic-row.vm";
import { Button, CardActions } from "@material-ui/core";

interface Props {
	row: GenericRow;
}

export const CustomCard: React.FC<Props> = (props) => {
	const { row } = props;
	return (
		<Card>
			<CardMedia component="img" height="300" src={row.avatar} />
			<CardContent>
				<div>
					<Typography variant="h5" component="h3" align="center">
						{row.name}
					</Typography>
				</div>
			</CardContent>
			<CardActions style={{ justifyContent: "center" }}>
				<Button
					size="large"
					onClick={() => window.open(row.url, "_blank")}
				>
					Github
				</Button>
			</CardActions>
		</Card>
	);
};
