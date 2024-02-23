import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove }) => {
	console.log(todos);
	console.log(onRemove, "dfdfdf");
	return (
		<div className="TodoList">
			{todos.map((todo) => (
				<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
			))}
		</div>
	);
};

export default TodoList;
