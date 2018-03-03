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
  ],
  isAddingArticle: false
};

export function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_BUTTONS": {
      return {
        ...state,
        articles: state.articles.map(article => {
          return article.id === action.id
            ? { ...article, isEdit: !article.isEdit }
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
    case "ADD_ARTICLE": {
      return {
        ...state,
        articles: [
          ...state.articles,
          {
            id: state.articles.length,
            title: action.title,
            date: new Date(),
            author: action.author,
            text: action.text,
            isEdit: false
          }
        ],
        isAddingArticle: !state.isAddingArticle
      };
    }
    case "IS_ADDING_ARTICLE": {
      console.log('here');
      return {
        ...state,
        isAddingArticle: !state.isAddingArticle
      };
    }
    default: {
      return state;
    }
  }
}
