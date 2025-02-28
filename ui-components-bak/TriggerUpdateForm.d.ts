import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Trigger } from "./graphql/types";
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
export declare type TriggerUpdateFormInputValues = {
    triggerId?: string;
    status?: string;
    timestamp?: string;
};
export declare type TriggerUpdateFormValidationValues = {
    triggerId?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TriggerUpdateFormOverridesProps = {
    TriggerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    triggerId?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TriggerUpdateFormProps = React.PropsWithChildren<{
    overrides?: TriggerUpdateFormOverridesProps | undefined | null;
} & {
    triggerId?: string;
    trigger?: Trigger;
    onSubmit?: (fields: TriggerUpdateFormInputValues) => TriggerUpdateFormInputValues;
    onSuccess?: (fields: TriggerUpdateFormInputValues) => void;
    onError?: (fields: TriggerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TriggerUpdateFormInputValues) => TriggerUpdateFormInputValues;
    onValidate?: TriggerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TriggerUpdateForm(props: TriggerUpdateFormProps): React.ReactElement;
