import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";

const App = () => {
	return (
		<TodoTemplate>
			<TodoInsert />
			<TodoListItem />
		</TodoTemplate>
	);
};

export default App;
