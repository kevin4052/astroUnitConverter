export const getSelectValueById = (id: string): string => {
	const select = document.getElementById(id) as HTMLSelectElement;
	return select.value;
};

export const getInputElementValueById = (id: string): string => {
	const input = document.getElementById(id) as HTMLInputElement;
	return input.value;
};

export const getUnitConversion = (
	data: UnitConversions,
	type: string,
	key: string
): number => {
	return data[type][key as keyof typeof data][1];
};

export const getPathNameInfo = (): PathNameInfo => {
	const pathnameList = window.location.pathname
		.split("/")
		.filter((item) => item !== "");

	const path: PathNameInfo = {
		unitType: pathnameList[0].toLowerCase(),
		fromUnit: "",
		toUnit: "",
		fv: "",
		tv: "",
	};

	if (pathnameList.length === 1) {
		return path;
	}

	const units = pathnameList[1].split("-");
	path.fromUnit = units[0].toLowerCase();
	path.toUnit = units[1].toLowerCase();

	const searchParams = window.location.search
		.slice(1)
		.split("&")
		.filter(
			(item) =>
				item !== "" && (item.includes("fv=") || item.includes("tv="))
		);
	if (searchParams.length === 0) {
		return path;
	}

	for (const param of searchParams) {
		const [key, value] = param.split("=");
		path[key as keyof PathNameInfo] = value;
	}

	return path;
};
