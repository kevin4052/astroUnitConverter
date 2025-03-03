type UnitConversion = {
    [key: string]: [string, number];
};

type UnitConvertions = {
    [key: string]: UnitConversion;
};

type ConversionPath = {
    [key: string]: {
        type: string;
        conversion: string;
    };
}

type StaticPath = {
    [key: string]: {
        type: string;
    };
}
