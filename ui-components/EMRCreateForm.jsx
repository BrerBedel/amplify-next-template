/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEMR } from "./graphql/mutations";
const client = generateClient();
export default function EMRCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    emrId: "",
    name: "",
    authType: "",
    baseEndpoint: "",
    requiresCustomerSpecificEndpoint: false,
  };
  const [emrId, setEmrId] = React.useState(initialValues.emrId);
  const [name, setName] = React.useState(initialValues.name);
  const [authType, setAuthType] = React.useState(initialValues.authType);
  const [baseEndpoint, setBaseEndpoint] = React.useState(
    initialValues.baseEndpoint
  );
  const [
    requiresCustomerSpecificEndpoint,
    setRequiresCustomerSpecificEndpoint,
  ] = React.useState(initialValues.requiresCustomerSpecificEndpoint);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmrId(initialValues.emrId);
    setName(initialValues.name);
    setAuthType(initialValues.authType);
    setBaseEndpoint(initialValues.baseEndpoint);
    setRequiresCustomerSpecificEndpoint(
      initialValues.requiresCustomerSpecificEndpoint
    );
    setErrors({});
  };
  const validations = {
    emrId: [{ type: "Required" }],
    name: [{ type: "Required" }],
    authType: [],
    baseEndpoint: [{ type: "Required" }],
    requiresCustomerSpecificEndpoint: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          emrId: crypto.randomUUID(),
          name,
          authType,
          baseEndpoint,
          requiresCustomerSpecificEndpoint,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createEMR.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EMRCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emrId,
              name: value,
              authType,
              baseEndpoint,
              requiresCustomerSpecificEndpoint,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Auth type"
        placeholder="Please select an option"
        isDisabled={false}
        value={authType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emrId,
              name,
              authType: value,
              baseEndpoint,
              requiresCustomerSpecificEndpoint,
            };
            const result = onChange(modelFields);
            value = result?.authType ?? value;
          }
          if (errors.authType?.hasError) {
            runValidationTasks("authType", value);
          }
          setAuthType(value);
        }}
        onBlur={() => runValidationTasks("authType", authType)}
        errorMessage={errors.authType?.errorMessage}
        hasError={errors.authType?.hasError}
        {...getOverrideProps(overrides, "authType")}
      >
        <option
          children="Client secret"
          value="CLIENT_SECRET"
          {...getOverrideProps(overrides, "authTypeoption0")}
        ></option>
        <option
          children="Oauth2"
          value="OAUTH2"
          {...getOverrideProps(overrides, "authTypeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Base endpoint"
        isRequired={true}
        isReadOnly={false}
        value={baseEndpoint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              emrId,
              name,
              authType,
              baseEndpoint: value,
              requiresCustomerSpecificEndpoint,
            };
            const result = onChange(modelFields);
            value = result?.baseEndpoint ?? value;
          }
          if (errors.baseEndpoint?.hasError) {
            runValidationTasks("baseEndpoint", value);
          }
          setBaseEndpoint(value);
        }}
        onBlur={() => runValidationTasks("baseEndpoint", baseEndpoint)}
        errorMessage={errors.baseEndpoint?.errorMessage}
        hasError={errors.baseEndpoint?.hasError}
        {...getOverrideProps(overrides, "baseEndpoint")}
      ></TextField>
      <SwitchField
        label="Requires customer specific endpoint"
        defaultChecked={false}
        isDisabled={false}
        isChecked={requiresCustomerSpecificEndpoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              emrId,
              name,
              authType,
              baseEndpoint,
              requiresCustomerSpecificEndpoint: value,
            };
            const result = onChange(modelFields);
            value = result?.requiresCustomerSpecificEndpoint ?? value;
          }
          if (errors.requiresCustomerSpecificEndpoint?.hasError) {
            runValidationTasks("requiresCustomerSpecificEndpoint", value);
          }
          setRequiresCustomerSpecificEndpoint(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "requiresCustomerSpecificEndpoint",
            requiresCustomerSpecificEndpoint
          )
        }
        errorMessage={errors.requiresCustomerSpecificEndpoint?.errorMessage}
        hasError={errors.requiresCustomerSpecificEndpoint?.hasError}
        {...getOverrideProps(overrides, "requiresCustomerSpecificEndpoint")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
