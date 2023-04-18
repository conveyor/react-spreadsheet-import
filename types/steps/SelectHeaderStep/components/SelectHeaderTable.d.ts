import type { RawData } from "../../../types";
interface Props {
    data: RawData[];
    selectedRows: ReadonlySet<number>;
    setSelectedRows: (rows: ReadonlySet<number>) => void;
}
export declare const SelectHeaderTable: ({ data, selectedRows, setSelectedRows }: Props) => JSX.Element;
export {};
