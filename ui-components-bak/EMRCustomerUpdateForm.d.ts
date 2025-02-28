import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EMRCustomer } from "./graphql/types";
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
export declare type EMRCustomerUpdateFormInputValues = {
    customerId?: string;
    name?: string;
    endpoint?: string;
};
export declare type EMRCustomerUpdateFormValidationValues = {
    customerId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    endpoint?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMRCustomerUpdateFormOverridesProps = {
    EMRCustomerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    endpoint?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EMRCustomerUpdateFormProps = React.PropsWithChildren<{
    overrides?: EMRCustomerUpdateFormOverridesProps | undefined | null;
} & {
    customerId?: string;
    eMRCustomer?: EMRCustomer;
    onSubmit?: (fields: EMRCustomerUpdateFormInputValues) => EMRCustomerUpdateFormInputValues;
    onSuccess?: (fields: EMRCustomerUpdateFormInputValues) => void;
    onError?: (fields: EMRCustomerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMRCustomerUpdateFormInputValues) => EMRCustomerUpdateFormInputValues;
    onValidate?: EMRCustomerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EMRCustomerUpdateForm(props: EMRCustomerUpdateFormProps): React.ReactElement;
