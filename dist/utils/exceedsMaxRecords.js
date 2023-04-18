const exceedsMaxRecords = (workSheet, maxRecords) => {
    var _a;
    const [top, bottom] = ((_a = workSheet["!ref"]) === null || _a === void 0 ? void 0 : _a.split(":").map((position) => parseInt(position.replace(/\D/g, ""), 10))) || [];
    return bottom - top > maxRecords;
};

export { exceedsMaxRecords };
