/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEMR = /* GraphQL */ `
  query GetEMR($emrId: ID!) {
    getEMR(emrId: $emrId) {
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
export const getEMRCustomer = /* GraphQL */ `
  query GetEMRCustomer($customerId: ID!) {
    getEMRCustomer(customerId: $customerId) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      isDone
      updatedAt
      __typename
    }
  }
`;
export const getTrigger = /* GraphQL */ `
  query GetTrigger($triggerId: ID!) {
    getTrigger(triggerId: $triggerId) {
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
export const listEMRCustomers = /* GraphQL */ `
  query ListEMRCustomers(
    $customerId: ID
    $filter: ModelEMRCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEMRCustomers(
      customerId: $customerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        customerId
        emrId
        endpoint
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listEMRS = /* GraphQL */ `
  query ListEMRS(
    $emrId: ID
    $filter: ModelEMRFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEMRS(
      emrId: $emrId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        authType
        baseEndpoint
        createdAt
        emrId
        name
        requiresCustomerSpecificEndpoint
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        isDone
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTriggers = /* GraphQL */ `
  query ListTriggers(
    $filter: ModelTriggerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $triggerId: ID
  ) {
    listTriggers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      triggerId: $triggerId
    ) {
      items {
        createdAt
        customerId
        status
        timestamp
        triggerId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
