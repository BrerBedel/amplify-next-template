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
    rcopiaId: rcopiaIdProp,
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
    rcopiaId: "",
    clientId: "",
    baseUrl: "",
    authSlug: "",
    fhirSlug: "",
    practiceId: "",
  };
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [name, setName] = React.useState(initialValues.name);
  const [rcopiaId, setRcopiaId] = React.useState(initialValues.rcopiaId);
  const [clientId, setClientId] = React.useState(initialValues.clientId);
  const [baseUrl, setBaseUrl] = React.useState(initialValues.baseUrl);
  const [authSlug, setAuthSlug] = React.useState(initialValues.authSlug);
  const [fhirSlug, setFhirSlug] = React.useState(initialValues.fhirSlug);
  const [practiceId, setPracticeId] = React.useState(initialValues.practiceId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eMRCustomerRecord
      ? { ...initialValues, ...eMRCustomerRecord }
      : initialValues;
    setCustomerId(cleanValues.customerId);
    setName(cleanValues.name);
    setRcopiaId(cleanValues.rcopiaId);
    setClientId(cleanValues.clientId);
    setBaseUrl(cleanValues.baseUrl);
    setAuthSlug(cleanValues.authSlug);
    setFhirSlug(cleanValues.fhirSlug);
    setPracticeId(cleanValues.practiceId);
    setErrors({});
  };
  const [eMRCustomerRecord, setEMRCustomerRecord] =
    React.useState(eMRCustomerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = rcopiaIdProp
        ? (
            await client.graphql({
              query: getEMRCustomer.replaceAll("__typename", ""),
              variables: { rcopiaId: rcopiaIdProp },
            })
          )?.data?.getEMRCustomer
        : eMRCustomerModelProp;
      setEMRCustomerRecord(record);
    };
    queryData();
  }, [rcopiaIdProp, eMRCustomerModelProp]);
  React.useEffect(resetStateValues, [eMRCustomerRecord]);
  const validations = {
    customerId: [],
    name: [{ type: "Required" }],
    rcopiaId: [{ type: "Required" }],
    clientId: [{ type: "Required" }],
    baseUrl: [{ type: "Required" }],
    authSlug: [{ type: "Required" }],
    fhirSlug: [{ type: "Required" }],
    practiceId: [],
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
          customerId: customerId ?? null,
          name,
          rcopiaId,
          clientId,
          baseUrl,
          authSlug,
          fhirSlug,
          practiceId: practiceId ?? null,
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
                rcopiaId: eMRCustomerRecord.rcopiaId,
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
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId: value,
              name,
              rcopiaId,
              clientId,
              baseUrl,
              authSlug,
              fhirSlug,
              practiceId,
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
              rcopiaId,
              clientId,
              baseUrl,
              authSlug,
              fhirSlug,
              practiceId,
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
        label="Rcopia id"
        isRequired={true}
        isReadOnly={true}
        value={rcopiaId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId: value,
              clientId,
              baseUrl,
              authSlug,
              fhirSlug,
              practiceId,
            };
            const result = onChange(modelFields);
            value = result?.rcopiaId ?? value;
          }
          if (errors.rcopiaId?.hasError) {
            runValidationTasks("rcopiaId", value);
          }
          setRcopiaId(value);
        }}
        onBlur={() => runValidationTasks("rcopiaId", rcopiaId)}
        errorMessage={errors.rcopiaId?.errorMessage}
        hasError={errors.rcopiaId?.hasError}
        {...getOverrideProps(overrides, "rcopiaId")}
      ></TextField>
      <TextField
        label="Client id"
        isRequired={true}
        isReadOnly={false}
        value={clientId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId,
              clientId: value,
              baseUrl,
              authSlug,
              fhirSlug,
              practiceId,
            };
            const result = onChange(modelFields);
            value = result?.clientId ?? value;
          }
          if (errors.clientId?.hasError) {
            runValidationTasks("clientId", value);
          }
          setClientId(value);
        }}
        onBlur={() => runValidationTasks("clientId", clientId)}
        errorMessage={errors.clientId?.errorMessage}
        hasError={errors.clientId?.hasError}
        {...getOverrideProps(overrides, "clientId")}
      ></TextField>
      <TextField
        label="Base url"
        isRequired={true}
        isReadOnly={false}
        value={baseUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId,
              clientId,
              baseUrl: value,
              authSlug,
              fhirSlug,
              practiceId,
            };
            const result = onChange(modelFields);
            value = result?.baseUrl ?? value;
          }
          if (errors.baseUrl?.hasError) {
            runValidationTasks("baseUrl", value);
          }
          setBaseUrl(value);
        }}
        onBlur={() => runValidationTasks("baseUrl", baseUrl)}
        errorMessage={errors.baseUrl?.errorMessage}
        hasError={errors.baseUrl?.hasError}
        {...getOverrideProps(overrides, "baseUrl")}
      ></TextField>
      <TextField
        label="Auth slug"
        isRequired={true}
        isReadOnly={false}
        value={authSlug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId,
              clientId,
              baseUrl,
              authSlug: value,
              fhirSlug,
              practiceId,
            };
            const result = onChange(modelFields);
            value = result?.authSlug ?? value;
          }
          if (errors.authSlug?.hasError) {
            runValidationTasks("authSlug", value);
          }
          setAuthSlug(value);
        }}
        onBlur={() => runValidationTasks("authSlug", authSlug)}
        errorMessage={errors.authSlug?.errorMessage}
        hasError={errors.authSlug?.hasError}
        {...getOverrideProps(overrides, "authSlug")}
      ></TextField>
      <TextField
        label="Fhir slug"
        isRequired={true}
        isReadOnly={false}
        value={fhirSlug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId,
              clientId,
              baseUrl,
              authSlug,
              fhirSlug: value,
              practiceId,
            };
            const result = onChange(modelFields);
            value = result?.fhirSlug ?? value;
          }
          if (errors.fhirSlug?.hasError) {
            runValidationTasks("fhirSlug", value);
          }
          setFhirSlug(value);
        }}
        onBlur={() => runValidationTasks("fhirSlug", fhirSlug)}
        errorMessage={errors.fhirSlug?.errorMessage}
        hasError={errors.fhirSlug?.hasError}
        {...getOverrideProps(overrides, "fhirSlug")}
      ></TextField>
      <TextField
        label="Practice id"
        isRequired={false}
        isReadOnly={false}
        value={practiceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              name,
              rcopiaId,
              clientId,
              baseUrl,
              authSlug,
              fhirSlug,
              practiceId: value,
            };
            const result = onChange(modelFields);
            value = result?.practiceId ?? value;
          }
          if (errors.practiceId?.hasError) {
            runValidationTasks("practiceId", value);
          }
          setPracticeId(value);
        }}
        onBlur={() => runValidationTasks("practiceId", practiceId)}
        errorMessage={errors.practiceId?.errorMessage}
        hasError={errors.practiceId?.hasError}
        {...getOverrideProps(overrides, "practiceId")}
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
          isDisabled={!(rcopiaIdProp || eMRCustomerModelProp)}
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
              !(rcopiaIdProp || eMRCustomerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
