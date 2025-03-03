import unitData from "@data/unitData.ts"

// get elements from the DOM
const input = document.getElementById("input") as HTMLInputElement;
const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
const selectFrom = document.getElementById(
        "selectFrom"
    ) as HTMLSelectElement;

// get selected unit type value
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

const getUnitType = (): string => {
    const href = window.location.href.split("/");
    return href[href.length - 1].toLowerCase() as string;
};


// calculate the conversion
const cal = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    const output = document.getElementById("output") as HTMLInputElement;
    const unitType = getUnitType();
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

// Event listeners
input.addEventListener("keyup", () => cal());
selectFrom.addEventListener("change", () => cal());
selectTo.addEventListener("change", () => cal());
