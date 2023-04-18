import type { Data } from "../../types";
declare type Props<T extends string> = {
    initialData: Data<T>[];
};
export declare const ValidationStep: <T extends string>({ initialData }: Props<T>) => JSX.Element;
export {};
