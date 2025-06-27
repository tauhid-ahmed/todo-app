"use client";
import {
  type TodoState,
  type TodoEvent,
  type FilterOption,
  Todo,
} from "../_types/todo.types";
import { useReducer } from "react";

import { applyFilters } from "../_utils/todo.utils";

const defaultFilterOption: FilterOption = {
  searchTerm: "",
  sortBy: "created_at",
  sortDirection: "asc",
};

const initialState: TodoState = {
  status: "fetching",
  filterOption: defaultFilterOption,
  selectedTodosId: [],
};

const reducer = (state: TodoState, action: TodoEvent) => {
  switch (action.type) {
    case "CREATE_TODO":
      if (state.status === "idle") {
        const prevTodos = state.todos;
        const newTodo: Todo = {
          id: crypto.randomUUID(),
          title: action.payload.title,
          description: action.payload.description,
          status: "pending",
          created_at: new Date(),
        };
      }
      return state;
  }
};
