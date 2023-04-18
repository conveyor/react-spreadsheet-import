import type { Fields } from "../../../types";
interface Props<T extends string> {
    fields: Fields<T>;
}
export declare const ExampleTable: <T extends string>({ fields }: Props<T>) => JSX.Element;
export {};
