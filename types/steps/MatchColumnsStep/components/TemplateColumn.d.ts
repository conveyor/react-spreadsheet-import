import type { Column } from "../MatchColumnsStep";
declare type TemplateColumnProps<T extends string> = {
    onChange: (val: T, index: number) => void;
    onSubChange: (val: T, index: number, option: string) => void;
    column: Column<T>;
};
export declare const TemplateColumn: <T extends string>({ column, onChange, onSubChange }: TemplateColumnProps<T>) => JSX.Element;
export {};
