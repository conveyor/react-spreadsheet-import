declare type ContinueButtonProps = {
    onContinue: (val: any) => void;
    title: string;
    isLoading?: boolean;
};
export declare const ContinueButton: ({ onContinue, title, isLoading }: ContinueButtonProps) => JSX.Element;
export {};
