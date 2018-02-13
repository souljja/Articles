const initialState = {
  articles: [
    {
      title: "first",
      date: new Date(),
      author: "Jack London",
      text: "Some text, too long text"
    },
    {
      title: "second",
      date: new Date(),
      author: "Jack London",
      text: "Some text"
    }
  ]
};

export function reducer(state = initialState, action) {
  return state;
}
