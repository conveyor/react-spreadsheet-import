import lavenstein from 'js-levenshtein';

const findMatch = (header, fields, autoMapDistance) => {
    const smallestValue = fields.reduce((acc, field) => {
        var _a;
        const distance = Math.min(...[
            lavenstein(field.key, header),
            ...(((_a = field.alternateMatches) === null || _a === void 0 ? void 0 : _a.map((alternate) => lavenstein(alternate, header))) || []),
        ]);
        return distance < acc.distance || acc.distance === undefined
            ? { value: field.key, distance }
            : acc;
    }, {});
    return smallestValue.distance <= autoMapDistance ? smallestValue.value : undefined;
};

export { findMatch };
