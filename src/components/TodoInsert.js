import React, { useCallback, useState } from "react";
import "./TodoInsert.css";
import { MdAdd } from "react-icons/md";
const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState("");
	const onChange = useCallback((e) => {
		// 마운트 될때 한번만 함수 실행하게 관리해주는 것. ( state가 신규로 업데이트 되면 매번 함수도 같이 실행하니까)
		setValue(e.target.value);
		// console.log(value); // 업데이트 계속 반영하려면 [value,setValue]
	}, []);
	const onSubmit = useCallback(
		(e) => {
			onInsert(value); // App.js => onInsert를 props로 내려주고 얘가 받는다
			setValue("");
			e.preventDefault(); // 이중 클릭 방지
		},
		[onInsert, value]
	);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input
				placeholder="할 일을 입력하세요."
				onChange={onChange}
				value={value}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;
