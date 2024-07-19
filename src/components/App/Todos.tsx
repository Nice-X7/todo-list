import React from "react";
import { Todo } from "./Todo";
import { TodoTypes } from "../Types/Types";

interface TodosProps {
  handleChecked: (id: number, completed: boolean) => void;
  handleRemove: (id: number) => void;
  todos: TodoTypes[];
}

export const Todos: React.FC<TodosProps> = ({ handleChecked, handleRemove, todos }) => {
  return (
    <>
      {todos.map((item: TodoTypes) => (
        <Todo
          todo={item}
          key={item.id}
          handleChecked={handleChecked}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
};
