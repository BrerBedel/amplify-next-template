/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEMRCustomer } from "./graphql/queries";
import { updateEMRCustomer } from "./graphql/mutations";
const client = generateClient();
export default function EMRCustomerUpdateForm(props) {
  const {
    customerId: customerIdProp,
    eMRCustomer: eMRCustomerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customerId: "",
    name: "",
    endpoint: "",
  };
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [name, setName] = React.useState(initialValues.name);
  const [endpoint, setEndpoint] = React.useState(initialValues.endpoint);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eMRCustomerRecord
      ? { ...initialValues, ...eMRCustomerRecord }
      : initialValues;
    setCustomerId(cleanValues.customerId);
    setName(cleanValues.name);
    setEndpoint(cleanValues.endpoint);
    setErrors({});
  };
  const [eMRCustomerRecord, setEMRCustomerRecord] =
    React.useState(eMRCustomerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = customerIdProp
        ? (
            await client.graphql({
              query: getEMRCustomer.replaceAll("__typename", ""),
              variables: { customerId: customerIdProp },
            })
          )?.data?.getEMRCustomer
        : eMRCustomerModelProp;
      setEMRCustomerRecord(record);
    };
    queryData();
  }, [customerIdProp, eMRCustomerModelProp]);
  React.useEffect(resetStateValues, [eMRCustomerRecord]);
  const validations = {
    customerId: [{ type: "Required" }],
    name: [{ type: "Required" }],
    endpoint: [],
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
          customerId,
          name,
          endpoint: endpoint ?? null,
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
            query: updateEMRCustomer.replaceAll("__typename", ""),
            variables: {
              input: {
                customerId: eMRCustomerRecord.customerId,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EMRCustomerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Customer id"
        isRequired={true}
        isReadOnly={true}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId: value,
              name,
              endpoint,
            };
            const result = onChange(modelFields);
            value = result?.customerId ?? value;
          }
          if (errors.customerId?.hasError) {
            runValidationTasks("customerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("customerId", customerId)}
        errorMessage={errors.customerId?.errorMessage}
        hasError={errors.customerId?.hasError}
        {...getOverrideProps(overrides, "customerId")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name: value,
              endpoint,
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
      <TextField
        label="Endpoint"
        isRequired={false}
        isReadOnly={false}
        value={endpoint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              endpoint: value,
            };
            const result = onChange(modelFields);
            value = result?.endpoint ?? value;
          }
          if (errors.endpoint?.hasError) {
            runValidationTasks("endpoint", value);
          }
          setEndpoint(value);
        }}
        onBlur={() => runValidationTasks("endpoint", endpoint)}
        errorMessage={errors.endpoint?.errorMessage}
        hasError={errors.endpoint?.hasError}
        {...getOverrideProps(overrides, "endpoint")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(customerIdProp || eMRCustomerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(customerIdProp || eMRCustomerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
