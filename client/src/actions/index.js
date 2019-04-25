export function listCats(cats) {
  return {
    type: "LIST_CATS",
    value: cats
  };
}

export function createCat(cat) {
  return {
    type: "CREATE_CAT",
    value: cat
  };
}

export function deleteCat(id) {
  return {
    type: "DELETE_CAT",
    value: id
  };
}
