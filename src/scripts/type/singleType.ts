import unitData from "@data/unitData.ts";
import {
	getSelectValueById,
	getInputElementValueById,
	getUnitConversion,
	getPathNameInfo,
} from "@utils/helpers";

// calculate the conversion
const cal = () => {
	const output = document.getElementById("output") as HTMLParagraphElement;
	const inputValue = getInputElementValueById("input");
	const unitType = getPathNameInfo().unitType;
	const selectFrom = getSelectValueById("selectFrom");
	const selectTo = getSelectValueById("selectTo");

	if (inputValue === "" || !Number(inputValue)) {
		output.innerText = "";
		return;
	}

	const fromConvertion = getUnitConversion(unitData, unitType, selectFrom);
	const toConvertion = getUnitConversion(unitData, unitType, selectTo);
	output.innerText = `${(
		Number(inputValue) *
		(fromConvertion[1] / toConvertion[1])
	).toString()} ${toConvertion[0]}`;
};

// get elements from the DOM
const input = document.getElementById("input") as HTMLInputElement;
const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
const selectFrom = document.getElementById("selectFrom") as HTMLSelectElement;

// Event listeners
input.addEventListener("keyup", () => cal());
selectFrom.addEventListener("change", () => cal());
selectTo.addEventListener("change", () => cal());
