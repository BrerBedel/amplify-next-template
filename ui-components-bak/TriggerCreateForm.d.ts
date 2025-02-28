import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TriggerCreateFormInputValues = {
    triggerId?: string;
    status?: string;
    timestamp?: string;
};
export declare type TriggerCreateFormValidationValues = {
    triggerId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TriggerCreateFormOverridesProps = {
    TriggerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    triggerId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TriggerCreateFormProps = React.PropsWithChildren<{
    overrides?: TriggerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TriggerCreateFormInputValues) => TriggerCreateFormInputValues;
    onSuccess?: (fields: TriggerCreateFormInputValues) => void;
    onError?: (fields: TriggerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriggerCreateFormInputValues) => TriggerCreateFormInputValues;
    onValidate?: TriggerCreateFormValidationValues;
} & React.CSSProperties>;
export default function TriggerCreateForm(props: TriggerCreateFormProps): React.ReactElement;
