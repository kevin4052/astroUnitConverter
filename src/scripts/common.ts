const input = document.getElementById("input") as HTMLInputElement;
const unitTypeSelect = document.getElementById("unitType") as HTMLSelectElement;
const convertionSelect = document.getElementById(
    "convertions"
) as HTMLSelectElement;

const unitConvertions: UnitConvertions = {
    length: {
        inch: ["in", 0.0254],
        foot: ["ft", 0.3048],
        yard: ["yd", 0.9144],
        mile: ["mi", 1609.34],
        mm: ["mm", 0.001],
        cm: ["cm", 0.01],
        m: ["m", 1],
        km: ["km", 1000],
    },
    mass: {
        kilogram: ["kg", 1],
        gram: ["g", 0.001],
        milligram: ["mg", 0.000001],
        pound: ["lb", 0.453592],
        ounce: ["oz", 0.0283495],
    },
};

const getSelectedUnitType = (): string => {
    const unitTypeSelect = document.getElementById(
        "unitType"
    ) as HTMLSelectElement;
    return unitTypeSelect.value;
};

const getSelectedConvertion = (): string => {
    const convertionSelect = document.getElementById(
        "convertions"
    ) as HTMLSelectElement;
    return convertionSelect.value;
};

const getSelectFrom = (): string => {
    const selectFrom = document.getElementById(
        "selectFrom"
    ) as HTMLSelectElement;
    return selectFrom.value;
};

const getSelectTo = (): string => {
    const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
    return selectTo.value;
};

const cal = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    const output = document.getElementById("output") as HTMLInputElement;
    const unitType = getSelectedUnitType();
    const inputValue = input.value;
    const selectedConvertion = getSelectedConvertion();
    const convertion =
        unitConvertions[unitType][
            selectedConvertion as keyof typeof unitConvertions
        ];

    if (inputValue === "" || !Number(inputValue)) {
        output.value = "";
        return;
    }
    // output.value = convertion(Number(inputValue)).toString();
};

const populateConvertions = () => {
    const selectedUnitType = getSelectedUnitType();
    const selectFrom = document.getElementById(
        "selectFrom"
    ) as HTMLSelectElement;
    const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
    const convertions = unitConvertions[selectedUnitType];
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

const populateUnitTypes = () => {
    const unitTypeSelect = document.getElementById(
        "unitType"
    ) as HTMLSelectElement;
    const unitTypes = Object.keys(unitConvertions);
    unitTypeSelect.innerHTML = "";
    for (const unitType of unitTypes) {
        const option = document.createElement("option");
        option.value = unitType;
        option.textContent = unitType;
        unitTypeSelect.appendChild(option);
    }
};

// Event listeners
input.addEventListener("keyup", () => cal());
unitTypeSelect.addEventListener("change", () => {
    populateConvertions();
    cal();
});

// Initial setup
populateUnitTypes();
populateConvertions();
