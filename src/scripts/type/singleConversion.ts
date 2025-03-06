import unitData from "@data/unitData.ts";
import {
	getPathNameInfo,
	getInputElementValueById,
	getUnitConversion,
} from "@utils/helpers";

// calculate the conversion
const cal = () => {
	const output = document.getElementById("output") as HTMLInputElement;
	const inputValue = getInputElementValueById("input");
	const { unitType, fromUnit, toUnit } = getPathNameInfo();

	if (inputValue === "" || !Number(inputValue)) {
		output.value = "";
		return;
	}

	const fromConvertion = getUnitConversion(unitData, unitType, fromUnit);
	const toConvertion = getUnitConversion(unitData, unitType, toUnit);
	output.value = (
		Number(inputValue) *
		(fromConvertion[1] / toConvertion[1])
	).toString();
};

const setSwitchLink = () => {
	const input = getInputElementValueById("input");
	const output = getInputElementValueById("output");
	const switchLink = document.getElementById(
		"switchLink"
	) as HTMLAnchorElement;

	const { unitType, fromUnit, toUnit } = getPathNameInfo();
	switchLink.href = `/${unitType}/${toUnit}-${fromUnit}?fv=${output}&tv=${input}`;
};

const setInitialValues = () => {
	const { fv, tv } = getPathNameInfo();
	const input = document.getElementById("input") as HTMLInputElement;
	const output = document.getElementById("output") as HTMLInputElement;

	!!fv && (input.value = fv);
	!!tv && (output.value = tv);
};

// get elements from the DOM
const input = document.getElementById("input") as HTMLInputElement;

// Event listeners
input.addEventListener("keyup", () => {
	cal();
	setSwitchLink();
});

setInitialValues();
setSwitchLink();
