export const getStaticConversionPaths = (data: UnitConvertions, delimiter: string = '-'): ConversionPath[] => {
    const paths: ConversionPath[] = [];
    for (const type in data) {
        const unitKeys = Object.keys(data[type]);

        for (let i = 0; i < unitKeys.length; i++) {
            for (let j = 0; j < unitKeys.length; j++) {
                paths.push({ params: { type, conversion: `${unitKeys[i]}${delimiter}${unitKeys[j]}` } });
            }
        }
    }
    return paths;
};

export const getStaticTypePaths = (data: UnitConvertions): StaticPath[] => {
    const types = Object.keys(data);
    return types.map((type) => ({ params: { type } }));

};
