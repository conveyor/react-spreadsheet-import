'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const findUnmatchedRequiredFields = (fields, columns) => fields
    .filter((field) => { var _a; return (_a = field.validations) === null || _a === void 0 ? void 0 : _a.some((validation) => validation.rule === "required"); })
    .filter((field) => columns.findIndex((column) => "value" in column && column.value === field.key) === -1)
    .map((field) => field.label) || [];

exports.findUnmatchedRequiredFields = findUnmatchedRequiredFields;
