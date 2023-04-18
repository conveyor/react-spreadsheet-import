import type { Column } from "../MatchColumnsStep";
import type { RawData } from "../../../types";
declare type UserTableColumnProps<T extends string> = {
    column: Column<T>;
    entries: RawData;
    onIgnore: (index: number) => void;
    onRevertIgnore: (index: number) => void;
};
export declare const UserTableColumn: <T extends string>(props: UserTableColumnProps<T>) => JSX.Element;
export {};
