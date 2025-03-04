const unitConvertions: UnitConversions = {
    length: {
        meter: ["m", 1],
        centimeter: ["cm", 0.01],
        millimeter: ["mm", 0.001],
        kilometer: ["km", 1000],
        inch: ["in", 0.0254],
        foot: ["ft", 0.3048],
        yard: ["yd", 0.9144],
        mile: ["mi", 1609.34],
    },
    mass: {
        kilogram: ["kg", 1],
        gram: ["g", 0.001],
        milligram: ["mg", 0.000001],
        pound: ["lb", 0.453592],
        ounce: ["oz", 0.0283495],
    },
    time: {
        second: ["s", 1],
        minute: ["min", 60],
        hour: ["hr", 3600],
        day: ["day", 86400],
        week: ["wk", 604800],
        month: ["mo", 2628000],
        year: ["yr", 31536000],
        millisecond: ["ms", 0.001],
        microsecond: ["μs", 0.000001],
        nanosecond: ["ns", 0.000000001],
    }
};

export default unitConvertions;