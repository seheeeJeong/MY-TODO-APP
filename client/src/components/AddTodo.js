import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "../styles/AddTodo.scss";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // 1. props addItem 함수 실행
    addItem(todoItem);
    // 2. input 초기화
    setTodoItem({ title: "" });
  };

  const onEnterKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKeyDown}
      />
      <button onClick={onButtonClick}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default AddTodo;
