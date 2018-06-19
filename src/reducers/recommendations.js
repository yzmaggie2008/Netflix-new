const initState = [
  {
    title: "Family Guy",
    id: 4,
    img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
  },
  {
    title: "The Croods",
    id: 5,
    img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
  },
  {
    title: "Friends",
    id: 6,
    img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
  }
];
const recommendations = (state = initState, action) => {
  switch (action.type) {
    case "REMOVE_FILM":
      for (let film of state) {
          if (film.id === action.data.id) {
              return state;
          }
      }
      return [...state, action.data];
    case "ADD_FILM":
      return state.filter(film => film.id !== action.data.id);
    default:
      return state;
  }
};
export default recommendations;
