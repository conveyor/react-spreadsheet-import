'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DataGrid = require('react-data-grid');
var react = require('@chakra-ui/react');
var cg = require('react-icons/cg');
var TableSelect = require('../../../components/Selects/TableSelect.js');

const SELECT_COLUMN_KEY = "select-row";
function autoFocusAndSelect(input) {
    input === null || input === void 0 ? void 0 : input.focus();
    input === null || input === void 0 ? void 0 : input.select();
}
const generateColumns = (fields) => [
    {
        key: SELECT_COLUMN_KEY,
        name: "",
        width: 35,
        maxWidth: 35,
        resizable: false,
        sortable: false,
        frozen: true,
        cellClass: "rdg-checkbox",
        formatter: (props) => {
            // eslint-disable-next-line  react-hooks/rules-of-hooks
            const [isRowSelected, onRowSelectionChange] = DataGrid.useRowSelection();
            return (jsxRuntime.jsx(react.Checkbox, { bg: "white", "aria-label": "Select", isChecked: isRowSelected, onChange: (event) => {
                    onRowSelectionChange({
                        row: props.row,
                        checked: Boolean(event.target.checked),
                        isShiftClick: event.nativeEvent.shiftKey,
                    });
                } }));
        },
    },
    ...fields.map((column) => ({
        key: column.key,
        name: column.label,
        minWidth: 150,
        resizable: true,
        headerRenderer: () => (jsxRuntime.jsxs(react.Box, { display: "flex", gap: 1, alignItems: "center", position: "relative", children: [jsxRuntime.jsx(react.Box, { flex: 1, overflow: "hidden", textOverflow: "ellipsis", children: column.label }), column.description && (jsxRuntime.jsx(react.Tooltip, { placement: "top", hasArrow: true, label: column.description, children: jsxRuntime.jsx(react.Box, { flex: "0 0 auto", children: jsxRuntime.jsx(cg.CgInfo, { size: "1rem" }) }) }))] })),
        editable: column.fieldType.type !== "checkbox",
        editor: ({ row, onRowChange, onClose }) => {
            let component;
            switch (column.fieldType.type) {
                case "select":
                    component = (jsxRuntime.jsx(TableSelect.TableSelect, { value: column.fieldType.options.find((option) => option.value === row[column.key]), onChange: (value) => {
                            onRowChange({ ...row, [column.key]: value === null || value === void 0 ? void 0 : value.value }, true);
                        }, options: column.fieldType.options }));
                    break;
                default:
                    component = (jsxRuntime.jsx(react.Box, { paddingInlineStart: "0.5rem", children: jsxRuntime.jsx(react.Input, { ref: autoFocusAndSelect, variant: "unstyled", autoFocus: true, size: "small", value: row[column.key], onChange: (event) => {
                                onRowChange({ ...row, [column.key]: event.target.value });
                            }, onBlur: () => onClose(true) }) }));
            }
            return component;
        },
        editorOptions: {
            editOnClick: true,
        },
        formatter: ({ row, onRowChange }) => {
            var _a, _b, _c, _d;
            let component;
            switch (column.fieldType.type) {
                case "checkbox":
                    component = (jsxRuntime.jsx(react.Box, { display: "flex", alignItems: "center", height: "100%", onClick: (event) => {
                            event.stopPropagation();
                        }, children: jsxRuntime.jsx(react.Switch, { isChecked: row[column.key], onChange: () => {
                                onRowChange({ ...row, [column.key]: !row[column.key] });
                            } }) }));
                    break;
                case "select":
                    component = (jsxRuntime.jsx(react.Box, { minWidth: "100%", minHeight: "100%", overflow: "hidden", textOverflow: "ellipsis", children: ((_a = column.fieldType.options.find((option) => option.value === row[column.key])) === null || _a === void 0 ? void 0 : _a.label) || null }));
                    break;
                default:
                    component = (jsxRuntime.jsx(react.Box, { minWidth: "100%", minHeight: "100%", overflow: "hidden", textOverflow: "ellipsis", children: row[column.key] }));
            }
            if ((_b = row.__errors) === null || _b === void 0 ? void 0 : _b[column.key]) {
                return (jsxRuntime.jsx(react.Tooltip, { placement: "top", hasArrow: true, label: (_d = (_c = row.__errors) === null || _c === void 0 ? void 0 : _c[column.key]) === null || _d === void 0 ? void 0 : _d.message, children: component }));
            }
            return component;
        },
        cellClass: (row) => {
            var _a, _b;
            switch ((_b = (_a = row.__errors) === null || _a === void 0 ? void 0 : _a[column.key]) === null || _b === void 0 ? void 0 : _b.level) {
                case "error":
                    return "rdg-cell-error";
                case "warning":
                    return "rdg-cell-warning";
                case "info":
                    return "rdg-cell-info";
                default:
                    return "";
            }
        },
    })),
];

exports.generateColumns = generateColumns;
