import unitData from "@data/unitData.ts";
import { getPathNameInfo, getInputElementValueById, getUnitConversion } from "@utils/helpers";

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
    output.value = (Number(inputValue) * (fromConvertion / toConvertion)).toString();
};

// get elements from the DOM
const input = document.getElementById("input") as HTMLInputElement;

// Event listeners
input.addEventListener("keyup", () => cal());
