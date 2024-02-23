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

	// todos 배열 객체 수정하기
	// ...todo => 전체 다 까봐야되니까 ( 데이터가 많으면 성능 저하됨 ) 다른 방법 구상해야됨.
	const onToggle = useCallback(
		(id) => {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
			);
		},
		[todos]
	);
	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
