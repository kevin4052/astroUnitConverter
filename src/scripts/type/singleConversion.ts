import unitData from "@data/unitData.ts";

// get elements from the DOM
const input = document.getElementById("input") as HTMLInputElement;

// get selected unit type value
const getUnitType = (): string => {
    const pathnameList = window.location.pathname
        .split("/")
        .filter((item) => item !== "");
    return pathnameList[0].toLowerCase() as string;
};

const getFromUnit = (): string => {
    const pathnameList = window.location.pathname
        .split("/")
        .filter((item) => item !== "");
    return pathnameList[1].split("-")[0].toLowerCase() as string;
};

const getToUnit = (): string => {
    const pathnameList = window.location.pathname
        .split("/")
        .filter((item) => item !== "");
    return pathnameList[1].split("-")[1].toLowerCase() as string;
};

// calculate the conversion
const cal = () => {
    const input = document.getElementById("input") as HTMLInputElement;
    const output = document.getElementById("output") as HTMLInputElement;
    const unitType = getUnitType();
    const inputValue = input.value;

    const selectFrom = getFromUnit();
    const selectTo = getToUnit();

    if (inputValue === "" || !Number(inputValue)) {
        output.value = "";
        return;
    }

    const fromConvertion =
        unitData[unitType][selectFrom as keyof typeof unitData];
    const toConvertion = unitData[unitType][selectTo as keyof typeof unitData];

    output.value = (
        Number(inputValue) *
        (fromConvertion[1] / toConvertion[1])
    ).toString();
};

// Event listeners
input.addEventListener("keyup", () => cal());
