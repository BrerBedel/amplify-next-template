/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEMRCustomer = /* GraphQL */ `
  query GetEMRCustomer($rcopiaId: String!) {
    getEMRCustomer(rcopiaId: $rcopiaId) {
      authSlug
      baseUrl
      clientId
      createdAt
      customerId
      fhirSlug
      name
      practiceId
      rcopiaId
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
export const listEMRCustomers = /* GraphQL */ `
  query ListEMRCustomers(
    $filter: ModelEMRCustomerFilterInput
    $limit: Int
    $nextToken: String
    $rcopiaId: String
    $sortDirection: ModelSortDirection
  ) {
    listEMRCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      rcopiaId: $rcopiaId
      sortDirection: $sortDirection
    ) {
      items {
        authSlug
        baseUrl
        clientId
        createdAt
        customerId
        fhirSlug
        name
        practiceId
        rcopiaId
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
