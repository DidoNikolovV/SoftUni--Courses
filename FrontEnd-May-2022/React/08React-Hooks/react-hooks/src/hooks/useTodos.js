const URL = `http://localhost:3030/jsonstore/todos`;

const useTodosApi = () => {
  const removeTodo = (todoId) => {
    return fetch(`${URL}/${todoId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  };

  const createTodo = (title) => {
    return fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ title, isCompleted: false }),
    }).then((res) => res.json());
  };

  const updateTodo = (todoId, data) => {
    return fetch(`${URL}/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  return {
    removeTodo,
    createTodo,
    updateTodo,
  };
};

export default useTodosApi;
