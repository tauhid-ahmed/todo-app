"use client";
import {
  type TodoState,
  type TodoEvent,
  type FilterOption,
  type Todo,
  type NewTodo,
} from "../types/todo.types";
import { useReducer } from "react";

import { applyTodoFilters } from "../utils/todo-filters";

const defaultFilterOption: FilterOption = {
  searchTerm: "",
  sortBy: "created_at",
  sortDirection: "asc",
  category: "",
  status: "",
};

const initialState: TodoState = {
  status: "fetching",
  filterOption: defaultFilterOption,
  selectedTodosId: [],
};

const reducer = (state: TodoState, action: TodoEvent): TodoState => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      if (state.status !== "fetching") return state;
      return {
        status: "idle",
        todos: action.payload.todos,
        filteredTodos: action.payload.todos,
        filterOption: state.filterOption,
        selectedTodosId: state.selectedTodosId,
      };

    case "CREATE_TODO":
      // Do not allow creating a todo while the app is in the initial fetching state.
      if (state.status !== "idle") return state;

      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: action.payload.newTodo.title,
        description: action.payload.newTodo.description,
        category: action.payload.newTodo.category,
        status: "pending",
        created_at: new Date(),
      };

      // In every other state ('idle', 'error', 'editing', etc.), `state.todos` is available.
      const nextTodos = [...state.todos, newTodo];

      return {
        status: "idle",
        todos: nextTodos,
        filteredTodos: applyTodoFilters(nextTodos, state.filterOption),
        filterOption: state.filterOption,
        selectedTodosId: state.selectedTodosId,
      };

    default:
      return state;
  }
};

export function useTodo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTodos = (todos: Todo[]) =>
    dispatch({ type: "FETCH_SUCCESS", payload: { todos } });

  const createTodo = (
    newTodo: NewTodo = {
      title: "Todo 1",
      description: "Todo description",
      category: "Finance",
    }
  ) =>
    dispatch({
      type: "CREATE_TODO",
      payload: { newTodo },
    });

  return { state, fetchTodos, createTodo };
}
