export function toggleButtons(id, value) {
  return { type: "TOGGLE_BUTTONS", id: id, isEdit: value };
}

export function deleteArticle(id) {
  return { type: "DELETE_ARTICLE", id: id };
}

export function saveArticle(id, title, text) {
  return { type: "SAVE_ARTICLE", id: id, title: title, text: text };
}