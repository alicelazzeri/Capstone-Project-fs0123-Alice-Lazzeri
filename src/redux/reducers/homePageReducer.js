import { GET_BOOKS } from "../actions";

const initialState = {
  content: {
    data: [], // array di oggetti libro
    loading: false,
    error: null,
  },
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      const books = action.payload.items.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors?.join(", "),
          publisher: book.volumeInfo.publisher,
          imageLinks: book.volumeInfo.imageLinks,
        };
      });

      return {
        ...state,
        content: {
          data: books,
          loading: false,
          error: null,
        },
      };
    default:
      return state;
  }
};

export default homePageReducer;
