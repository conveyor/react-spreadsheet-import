import type { Info } from "../../types";
export declare type Meta = {
    __index: string;
    __errors?: Error | null;
};
export declare type Error = {
    [key: string]: Info;
};
export declare type Errors = {
    [id: string]: Error;
};
