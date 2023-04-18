import type { SelectOption } from "../../types";
interface Props {
    onChange: (value: SelectOption | null) => void;
    value?: SelectOption;
    options: readonly SelectOption[];
    placeholder?: string;
    name?: string;
}
export declare const MatchColumnSelect: ({ onChange, value, options, placeholder, name }: Props) => JSX.Element;
export {};
