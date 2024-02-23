import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "일정1",
			checked: true,
		},
		{
			id: 2,
			text: "일정2",
			checked: true,
		},
		{
			id: 3,
			text: "일정3",
			checked: false,
		},
	]);
	// console.log(todos);
	const nextId = useRef(4); // id 관리용
	const onInsert = useCallback(
		(text) => {
			const nextTodo = { id: nextId.current, text: text, checked: false };
			setTodos(todos.concat(nextTodo));
			nextId.current = nextId.current + 1;
		},
		[todos]
	);
	// TodoListItem remove button click => id
	const onRemove = useCallback(
		(id) => {
			setTodos(todos.filter((todo) => todo.id !== id));
			console.log(todos);
		},
		[todos]
	);
	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} />
		</TodoTemplate>
	);
};

export default App;
