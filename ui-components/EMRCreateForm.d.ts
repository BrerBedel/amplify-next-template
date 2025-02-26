import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EMRCreateFormInputValues = {
    emrId?: string;
    name?: string;
    authType?: string;
    baseEndpoint?: string;
    requiresCustomerSpecificEndpoint?: boolean;
};
export declare type EMRCreateFormValidationValues = {
    emrId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    authType?: ValidationFunction<string>;
    baseEndpoint?: ValidationFunction<string>;
    requiresCustomerSpecificEndpoint?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMRCreateFormOverridesProps = {
    EMRCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    emrId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    authType?: PrimitiveOverrideProps<SelectFieldProps>;
    baseEndpoint?: PrimitiveOverrideProps<TextFieldProps>;
    requiresCustomerSpecificEndpoint?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EMRCreateFormProps = React.PropsWithChildren<{
    overrides?: EMRCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EMRCreateFormInputValues) => EMRCreateFormInputValues;
    onSuccess?: (fields: EMRCreateFormInputValues) => void;
    onError?: (fields: EMRCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMRCreateFormInputValues) => EMRCreateFormInputValues;
    onValidate?: EMRCreateFormValidationValues;
} & React.CSSProperties>;
export default function EMRCreateForm(props: EMRCreateFormProps): React.ReactElement;
