import type { Field } from "../../../types";
import { Column } from "../MatchColumnsStep";
export declare const setColumn: <T extends string>(oldColumn: Column<T>, field?: Field<T> | undefined, data?: import("../../../types").RawData[] | undefined) => Column<T>;
