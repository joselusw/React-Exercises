/** @jsx jsx */
import React from "react";
import { AppBar, TextField, Toolbar, Typography } from "@material-ui/core";
import * as classes from "./app.layout.style";
import { jsx, css } from "@emotion/react";

export const AppLayout: React.FC = ({ children }) => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						css={css`
							color: black;
						`}
					>
						José Luis del Pino Gallardo
					</Typography>

					<TextField
						label="Search"
						value="Lemoncode"
						css={classes.SearchBar}
					/>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};
