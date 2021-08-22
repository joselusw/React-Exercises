import merge from "lodash/merge";
import { createTheme } from "@material-ui/core";
import { Theme } from "@material-ui/core";

const defaultTheme = createTheme();

export const MainTheme: Theme = merge(defaultTheme, {
	palette: {
		primary: {
			light: "#ffe0b2",
			main: "#e0e0e0",
			dark: "#ffa726",
		},
		secondary: {
			light: "#fff584",
			main: "#000",
			dark: "#a29223",
		},
		success: {
			main: "#43a047",
		},
		info: {
			main: "#1976d2",
		},
		warning: {
			main: "#ffa000",
		},
		table: {
			row: {
				main: "#ddd",
			},
		},
	},
});
