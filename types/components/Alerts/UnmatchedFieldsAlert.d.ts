interface Props {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    fields: string[];
}
export declare const UnmatchedFieldsAlert: ({ isOpen, onClose, onConfirm, fields }: Props) => JSX.Element;
export {};
