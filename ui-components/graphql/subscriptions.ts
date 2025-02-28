/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEMRCustomer = /* GraphQL */ `
  subscription OnCreateEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onCreateEMRCustomer(filter: $filter) {
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
export const onDeleteEMRCustomer = /* GraphQL */ `
  subscription OnDeleteEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onDeleteEMRCustomer(filter: $filter) {
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
export const onUpdateEMRCustomer = /* GraphQL */ `
  subscription OnUpdateEMRCustomer(
    $filter: ModelSubscriptionEMRCustomerFilterInput
  ) {
    onUpdateEMRCustomer(filter: $filter) {
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
