/** @jsx jsx */
import React from "react";
import { AppBar, TextField, Toolbar, Typography } from "@material-ui/core";
import * as classes from "./app.layout.style";
import { jsx, css } from "@emotion/react";
import { filterStore } from "../../common/stores/filter.store";

export const AppLayout: React.FC = ({ children }) => {
	const filter = filterStore((state) => state.filter);
	const setFilter = filterStore((state) => state.setFilter);
	const disable = filterStore((state) => state.disable);

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
						value={filter}
						css={classes.SearchBar}
						onChange={(evt) => setFilter(evt.target.value)}
						disabled={disable}
					/>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};
