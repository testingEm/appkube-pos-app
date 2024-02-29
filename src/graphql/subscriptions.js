/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      image
      name
      description
      price
      unit
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      image
      name
      description
      price
      unit
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      image
      name
      description
      price
      unit
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      products {
        id
        image
        name
        description
        price
        unit
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      products {
        id
        image
        name
        description
        price
        unit
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      products {
        id
        image
        name
        description
        price
        unit
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      totalPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
      id
      productId
      availableQuantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
      id
      productId
      availableQuantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
      id
      productId
      availableQuantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
