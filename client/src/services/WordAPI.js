export const searchWord = async (word, dispatch, reducer) => {
  await fetch(`http://localhost:5000/corpus/search/${word}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(reducer(data));
    });
};

export const addWord = async (word, dispatch, reducer) => {
  await fetch(`http://localhost:5000/corpus/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: word }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(reducer(data));
    });
};

export const removeWord = async (word, dispatch, reducer) => {
  await fetch(`http://localhost:5000/corpus/remove/${word}`, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(reducer(data));
    });
};
