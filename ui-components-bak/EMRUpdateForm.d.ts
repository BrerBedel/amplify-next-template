import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EMR } from "./graphql/types";
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
export declare type EMRUpdateFormInputValues = {
    emrId?: string;
    name?: string;
    authType?: string;
    baseEndpoint?: string;
    requiresCustomerSpecificEndpoint?: boolean;
};
export declare type EMRUpdateFormValidationValues = {
    emrId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    authType?: ValidationFunction<string>;
    baseEndpoint?: ValidationFunction<string>;
    requiresCustomerSpecificEndpoint?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EMRUpdateFormOverridesProps = {
    EMRUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    emrId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    authType?: PrimitiveOverrideProps<SelectFieldProps>;
    baseEndpoint?: PrimitiveOverrideProps<TextFieldProps>;
    requiresCustomerSpecificEndpoint?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EMRUpdateFormProps = React.PropsWithChildren<{
    overrides?: EMRUpdateFormOverridesProps | undefined | null;
} & {
    emrId?: string;
    eMR?: EMR;
    onSubmit?: (fields: EMRUpdateFormInputValues) => EMRUpdateFormInputValues;
    onSuccess?: (fields: EMRUpdateFormInputValues) => void;
    onError?: (fields: EMRUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EMRUpdateFormInputValues) => EMRUpdateFormInputValues;
    onValidate?: EMRUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EMRUpdateForm(props: EMRUpdateFormProps): React.ReactElement;
