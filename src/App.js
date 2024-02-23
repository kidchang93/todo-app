import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// bulk Insert
function createBulkTodos() {
	const array = [];
	for (let index = 0; index < 2500; index++) {
		array.push({ id: index + 1, text: "할일" + (index + 1), checked: false });
	}
	return array;
}

const App = () => {
	const [todos, setTodos] = useState(createBulkTodos);
	// console.log(todos);
	const nextId = useRef(2501); // id 관리용
	const onInsert = useCallback((text) => {
		const nextTodo = { id: nextId.current, text: text, checked: false };
		setTodos((todos) => todos.concat(nextTodo));
		nextId.current = nextId.current + 1;
	}, []);
	// TodoListItem remove button click => id
	const onRemove = useCallback((id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
		console.log(todos);
	}, []);

	// todos 배열 객체 수정하기
	// ...todo => 전체 다 까봐야되니까 ( 데이터가 많으면 성능 저하됨 ) 다른 방법 구상해야됨.
	const onToggle = useCallback((id) => {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		);
	}, []);
	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
