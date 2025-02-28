/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEMR = /* GraphQL */ `
  subscription OnCreateEMR($filter: ModelSubscriptionEMRFilterInput) {
    onCreateEMR(filter: $filter) {
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
export const onCreateEMRCustomer = /* GraphQL */ `
  subscription OnCreateEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onCreateEMRCustomer(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const onCreateTrigger = /* GraphQL */ `
  subscription OnCreateTrigger($filter: ModelSubscriptionTriggerFilterInput) {
    onCreateTrigger(filter: $filter) {
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
export const onDeleteEMR = /* GraphQL */ `
  subscription OnDeleteEMR($filter: ModelSubscriptionEMRFilterInput) {
    onDeleteEMR(filter: $filter) {
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
export const onDeleteEMRCustomer = /* GraphQL */ `
  subscription OnDeleteEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onDeleteEMRCustomer(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTrigger = /* GraphQL */ `
  subscription OnDeleteTrigger($filter: ModelSubscriptionTriggerFilterInput) {
    onDeleteTrigger(filter: $filter) {
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
export const onUpdateEMR = /* GraphQL */ `
  subscription OnUpdateEMR($filter: ModelSubscriptionEMRFilterInput) {
    onUpdateEMR(filter: $filter) {
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
export const onUpdateEMRCustomer = /* GraphQL */ `
  subscription OnUpdateEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onUpdateEMRCustomer(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTrigger = /* GraphQL */ `
  subscription OnUpdateTrigger($filter: ModelSubscriptionTriggerFilterInput) {
    onUpdateTrigger(filter: $filter) {
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
