export function toggleButtons(id, value) {
  return { type: "TOGGLE_BUTTONS", id: id };
}

export function deleteArticle(id) {
  return { type: "DELETE_ARTICLE", id: id };
}

export function saveArticle(id, title, text) {
  return { type: "SAVE_ARTICLE", id: id, title: title, text: text };
}

export function addArticle(title, text, author) {
  return { type: "ADD_ARTICLE", title: title, text: text, author: author };
}

export function isAddingArticle() {
  return { type: "IS_ADDING_ARTICLE" };
}
