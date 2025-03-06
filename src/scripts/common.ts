import unitData from "@data/unitData.ts";
import {
	getSelectValueById,
	getInputElementValueById,
	getUnitConversion,
} from "@utils/helpers";

const cal = () => {
	const output = document.getElementById("output") as HTMLParagraphElement;
	const unitType = getSelectValueById("unitType");
	const inputValue = getInputElementValueById("input");
	const selectFromValue = getSelectValueById("selectFrom");
	const selectToValue = getSelectValueById("selectTo");

	if (inputValue === "" || !Number(inputValue)) {
		output.innerText = "";
		return;
	}

	const fromConvertion = getUnitConversion(
		unitData,
		unitType,
		selectFromValue
	);
	const toConvertion = getUnitConversion(unitData, unitType, selectToValue);
	output.innerText = `${(
		Number(inputValue) *
		(fromConvertion[1] / toConvertion[1])
	).toString()} ${toConvertion[0]}`;
};

const populateConvertions = () => {
	const selectedUnitType = getSelectValueById("unitType");
	const selectFrom = document.getElementById(
		"selectFrom"
	) as HTMLSelectElement;
	const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
	const convertions = unitData[selectedUnitType];
	selectFrom.innerHTML = "";
	selectTo.innerHTML = "";
	for (const key in convertions) {
		const option = document.createElement("option");
		option.value = key;
		option.textContent = key;
		selectFrom.appendChild(option);
		selectTo.appendChild(option.cloneNode(true));
	}
};

// Event listeners
const input = document.getElementById("input") as HTMLInputElement;
const unitTypeSelect = document.getElementById("unitType") as HTMLSelectElement;
const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
const selectFrom = document.getElementById("selectFrom") as HTMLSelectElement;

// Event listeners
input.addEventListener("keyup", () => cal());
selectFrom.addEventListener("change", () => cal());
selectTo.addEventListener("change", () => cal());
unitTypeSelect.addEventListener("change", () => {
	populateConvertions();
	cal();
});

// Initial setup
populateConvertions();
