import type React from "react";
import type { Column, Columns } from "../MatchColumnsStep";
import type { themeOverrides } from "../../../theme";
declare type ColumnGridProps<T extends string> = {
    columns: Columns<T>;
    userColumn: (column: Column<T>) => React.ReactNode;
    templateColumn: (column: Column<T>) => React.ReactNode;
    onContinue: (val: Record<string, string>[]) => void;
    isLoading: boolean;
};
export declare type Styles = typeof themeOverrides["components"]["MatchColumnsStep"]["baseStyle"];
export declare const ColumnGrid: <T extends string>({ columns, userColumn, templateColumn, onContinue, isLoading, }: ColumnGridProps<T>) => JSX.Element;
export {};
