const initialState = {
  articles: [
    {
      id: 0,
      title: "first",
      date: new Date(),
      author: "Jack London",
      text: "Some text, too long text"
    },
    {
      id: 1,
      title: "second",
      date: new Date(),
      author: "Jack London",
      text: "Some text"
    }
  ]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_BUTTONS": {
      return { ...state, articles: state.articles.map(article => {
        return article.id === action.id ? { ...article, isEdit: action.isEdit } : article;
      })
      };
    }
    default: {
      return state;
    }
  }
}
