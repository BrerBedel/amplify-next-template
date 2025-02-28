/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEMR = /* GraphQL */ `
  mutation CreateEMR(
    $condition: ModelEMRConditionInput
    $input: CreateEMRInput!
  ) {
    createEMR(condition: $condition, input: $input) {
      authType
      baseEndpoint
      createdAt
      customers {
        nextToken
        __typename
      }
      emrId
      name
      requiresCustomerSpecificEndpoint
      updatedAt
      __typename
    }
  }
`;
export const createEMRCustomer = /* GraphQL */ `
  mutation CreateEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: CreateEMRCustomerInput!
  ) {
    createEMRCustomer(condition: $condition, input: $input) {
      createdAt
      credentials {
        clientId
        clientSecret
        jwtToken
        __typename
      }
      customerId
      emr {
        authType
        baseEndpoint
        createdAt
        emrId
        name
        requiresCustomerSpecificEndpoint
        updatedAt
        __typename
      }
      emrId
      endpoint
      name
      triggers {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const createTrigger = /* GraphQL */ `
  mutation CreateTrigger(
    $condition: ModelTriggerConditionInput
    $input: CreateTriggerInput!
  ) {
    createTrigger(condition: $condition, input: $input) {
      createdAt
      customer {
        createdAt
        customerId
        emrId
        endpoint
        name
        updatedAt
        __typename
      }
      customerId
      status
      timestamp
      triggerId
      updatedAt
      __typename
    }
  }
`;
export const deleteEMR = /* GraphQL */ `
  mutation DeleteEMR(
    $condition: ModelEMRConditionInput
    $input: DeleteEMRInput!
  ) {
    deleteEMR(condition: $condition, input: $input) {
      authType
      baseEndpoint
      createdAt
      customers {
        nextToken
        __typename
      }
      emrId
      name
      requiresCustomerSpecificEndpoint
      updatedAt
      __typename
    }
  }
`;
export const deleteEMRCustomer = /* GraphQL */ `
  mutation DeleteEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: DeleteEMRCustomerInput!
  ) {
    deleteEMRCustomer(condition: $condition, input: $input) {
      createdAt
      credentials {
        clientId
        clientSecret
        jwtToken
        __typename
      }
      customerId
      emr {
        authType
        baseEndpoint
        createdAt
        emrId
        name
        requiresCustomerSpecificEndpoint
        updatedAt
        __typename
      }
      emrId
      endpoint
      name
      triggers {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const deleteTrigger = /* GraphQL */ `
  mutation DeleteTrigger(
    $condition: ModelTriggerConditionInput
    $input: DeleteTriggerInput!
  ) {
    deleteTrigger(condition: $condition, input: $input) {
      createdAt
      customer {
        createdAt
        customerId
        emrId
        endpoint
        name
        updatedAt
        __typename
      }
      customerId
      status
      timestamp
      triggerId
      updatedAt
      __typename
    }
  }
`;
export const updateEMR = /* GraphQL */ `
  mutation UpdateEMR(
    $condition: ModelEMRConditionInput
    $input: UpdateEMRInput!
  ) {
    updateEMR(condition: $condition, input: $input) {
      authType
      baseEndpoint
      createdAt
      customers {
        nextToken
        __typename
      }
      emrId
      name
      requiresCustomerSpecificEndpoint
      updatedAt
      __typename
    }
  }
`;
export const updateEMRCustomer = /* GraphQL */ `
  mutation UpdateEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: UpdateEMRCustomerInput!
  ) {
    updateEMRCustomer(condition: $condition, input: $input) {
      createdAt
      credentials {
        clientId
        clientSecret
        jwtToken
        __typename
      }
      customerId
      emr {
        authType
        baseEndpoint
        createdAt
        emrId
        name
        requiresCustomerSpecificEndpoint
        updatedAt
        __typename
      }
      emrId
      endpoint
      name
      triggers {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const updateTrigger = /* GraphQL */ `
  mutation UpdateTrigger(
    $condition: ModelTriggerConditionInput
    $input: UpdateTriggerInput!
  ) {
    updateTrigger(condition: $condition, input: $input) {
      createdAt
      customer {
        createdAt
        customerId
        emrId
        endpoint
        name
        updatedAt
        __typename
      }
      customerId
      status
      timestamp
      triggerId
      updatedAt
      __typename
    }
  }
`;
