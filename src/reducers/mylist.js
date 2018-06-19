const initState = [
  {
    title: "Futurama",
    id: 1,
    img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
  },
  {
    title: "The Interview",
    id: 2,
    img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
  },
  {
    title: "Gilmore Girls",
    id: 3,
    img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
  }
];
const myList = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FILM":
      for (let film of state) {
        if (film.id === action.data.id) {
          return state;
        }
      }
      return [...state, action.data];
    case "REMOVE_FILM":
      return state.filter(film => film.id !== action.data.id);
    default:
      return state;
  }
};

export default myList;
