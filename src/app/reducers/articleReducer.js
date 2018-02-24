const initialState = {
  articles: [
    {
      id: 0,
      title: "first",
      date: new Date(),
      author: "Jack London",
      text: "Some text, too long text",
      isEdit: false
    },
    {
      id: 1,
      title: "second",
      date: new Date(),
      author: "Jack London",
      text: "Some text",
      isEdit: false
    }
  ]
};

export function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_BUTTONS": {
      return {
        ...state,
        articles: state.articles.map(article => {
          return article.id === action.id
            ? { ...article, isEdit: action.isEdit }
            : article;
        })
      };
    }
    case "SAVE_ARTICLE": {
      return {
        ...state,
        articles: state.articles.map(article => {
          return article.id === action.id
            ? {
                ...article,
                isEdit: !article.isEdit,
                title: action.title,
                text: action.text
              }
            : article;
        })
      };
    }
    case "DELETE_ARTICLE": {
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.id)
      };
    }
    default: {
      return state;
    }
  }
}
