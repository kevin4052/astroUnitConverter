type UnitConversion = {
	[key: string]: [string, number];
};

type UnitConversions = {
	[key: string]: UnitConversion;
};

type ConversionPath = {
	[key: string]: {
		type: string;
		conversion: string;
	};
};

type StaticPath = {
	[key: string]: {
		type: string;
	};
};

type PathNameInfo = {
	unitType: string;
	fromUnit: string;
	toUnit: string;
	fv: string;
	tv: string;
};
