import type { RawData } from "../../types";
declare type SelectHeaderProps = {
    data: RawData[];
    onContinue: (headerValues: RawData, data: RawData[]) => Promise<void>;
};
export declare const SelectHeaderStep: ({ data, onContinue }: SelectHeaderProps) => JSX.Element;
export {};
