/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEMRCustomer = /* GraphQL */ `
  mutation CreateEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: CreateEMRCustomerInput!
  ) {
    createEMRCustomer(condition: $condition, input: $input) {
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
export const deleteEMRCustomer = /* GraphQL */ `
  mutation DeleteEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: DeleteEMRCustomerInput!
  ) {
    deleteEMRCustomer(condition: $condition, input: $input) {
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
export const updateEMRCustomer = /* GraphQL */ `
  mutation UpdateEMRCustomer(
    $condition: ModelEMRCustomerConditionInput
    $input: UpdateEMRCustomerInput!
  ) {
    updateEMRCustomer(condition: $condition, input: $input) {
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
