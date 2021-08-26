export interface GenericRow {
	name: string;
	avatar: string;
	url: string;
}

export const createEmptyGenericRow = (): GenericRow => ({
	name: "",
	avatar: "",
	url: "",
});
