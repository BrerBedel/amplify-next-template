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
    rcopiaId?: string;
    clientId?: string;
    baseUrl?: string;
    authSlug?: string;
    fhirSlug?: string;
    practiceId?: string;
};
export declare type EMRCustomerUpdateFormValidationValues = {
    customerId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    rcopiaId?: ValidationFunction<string>;
    clientId?: ValidationFunction<string>;
    baseUrl?: ValidationFunction<string>;
    authSlug?: ValidationFunction<string>;
    fhirSlug?: ValidationFunction<string>;
    practiceId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMRCustomerUpdateFormOverridesProps = {
    EMRCustomerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    rcopiaId?: PrimitiveOverrideProps<TextFieldProps>;
    clientId?: PrimitiveOverrideProps<TextFieldProps>;
    baseUrl?: PrimitiveOverrideProps<TextFieldProps>;
    authSlug?: PrimitiveOverrideProps<TextFieldProps>;
    fhirSlug?: PrimitiveOverrideProps<TextFieldProps>;
    practiceId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EMRCustomerUpdateFormProps = React.PropsWithChildren<{
    overrides?: EMRCustomerUpdateFormOverridesProps | undefined | null;
} & {
    rcopiaId?: string;
    eMRCustomer?: EMRCustomer;
    onSubmit?: (fields: EMRCustomerUpdateFormInputValues) => EMRCustomerUpdateFormInputValues;
    onSuccess?: (fields: EMRCustomerUpdateFormInputValues) => void;
    onError?: (fields: EMRCustomerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMRCustomerUpdateFormInputValues) => EMRCustomerUpdateFormInputValues;
    onValidate?: EMRCustomerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EMRCustomerUpdateForm(props: EMRCustomerUpdateFormProps): React.ReactElement;
