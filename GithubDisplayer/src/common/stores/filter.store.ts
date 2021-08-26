import create from "zustand";

type State = {
	filter: string;
	setFilter: (filter: string) => void;
	disable: boolean;
	setDisabled: (disabled: boolean) => void;
};

export const filterStore = create<State>((set) => ({
	filter: "Lemoncode", // set initial values here
	setFilter: (filter) =>
		set((state) => ({
			...state,
			filter,
		})),
	disable: false,
	setDisabled: (disable) =>
		set((state) => ({
			...state,
			disable,
		})),
}));
