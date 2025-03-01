import unitData from "../data/unitData.ts"
const input = document.getElementById("input") as HTMLInputElement;
const unitTypeSelect = document.getElementById("unitType") as HTMLSelectElement;
const selectFrom = document.getElementById(
        "selectFrom"
    ) as HTMLSelectElement;
const selectTo = document.getElementById("selectTo") as HTMLSelectElement;

const getSelectedUnitTypeValue = (): string => {
    const unitTypeSelect = document.getElementById(
        "unitType"
    ) as HTMLSelectElement;
    return unitTypeSelect.value;
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
    const unitType = getSelectedUnitTypeValue();
    const inputValue = input.value;

    const selectFrom = getSelectFrom();
    const selectTo = getSelectTo();

    if (inputValue === "" || !Number(inputValue)) {
        output.value = "";
        return;
    }

    const fromConvertion =
        unitData[unitType][
            selectFrom as keyof typeof unitData
        ];
    const toConvertion =
        unitData[unitType][
            selectTo as keyof typeof unitData
        ];

    output.value = (Number(inputValue) * (fromConvertion[1] / toConvertion[1])).toString();
};

const populateConvertions = () => {
    const selectedUnitType = getSelectedUnitTypeValue();
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
input.addEventListener("keyup", () => cal());
selectFrom.addEventListener("change", () => cal());
selectTo.addEventListener("change", () => cal());
unitTypeSelect.addEventListener("change", () => {
    populateConvertions();
    cal();
});

// Initial setup
populateConvertions();
