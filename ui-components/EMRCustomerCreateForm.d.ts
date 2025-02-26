import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EMRCustomerCreateFormInputValues = {
    customerId?: string;
    name?: string;
    endpoint?: string;
};
export declare type EMRCustomerCreateFormValidationValues = {
    customerId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    endpoint?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMRCustomerCreateFormOverridesProps = {
    EMRCustomerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    endpoint?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EMRCustomerCreateFormProps = React.PropsWithChildren<{
    overrides?: EMRCustomerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EMRCustomerCreateFormInputValues) => EMRCustomerCreateFormInputValues;
    onSuccess?: (fields: EMRCustomerCreateFormInputValues) => void;
    onError?: (fields: EMRCustomerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMRCustomerCreateFormInputValues) => EMRCustomerCreateFormInputValues;
    onValidate?: EMRCustomerCreateFormValidationValues;
} & React.CSSProperties>;
export default function EMRCustomerCreateForm(props: EMRCustomerCreateFormProps): React.ReactElement;
