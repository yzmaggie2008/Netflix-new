export const addFilm = item => {
  return {
    type: "ADD_FILM",
    data: item
  };
};

export const removeFilm = item => {
  return {
    type: "REMOVE_FILM",
    data: item
  };
};
