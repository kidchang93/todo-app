import React from "react";
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.css";
const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo; //{id: 1,text: "일정1", checked: true,}
	console.log(todo); // 비할당구조로 다 가져오기 때문에 필요한 정보만 쏙쏙 가져온다.
	return (
		<div className="TodoListItem">
			<div
				className={checked ? "checkbox checked" : "checkbox"}
				onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

export default TodoListItem;
