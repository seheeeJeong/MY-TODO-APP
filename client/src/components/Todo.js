import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import "../styles/Todo.scss";

const Todo = ({ item, deleteItem, updateItem }) => {
  console.log(item); // {done: false, id: 1, title: "저녁먹기"}
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title input을 클릭; readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false); // title input이 편집이 가능한 상태
    //흐리게
  };

  // title input에서 enter키; readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      updateItem(todoItem); // 수정 1 - text input에서 enter 누르면 수정 완료
    }
  };

  // 사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox의 체크 여부에 따라 todoItem state의 done 상태값을 변경
  const checkboxEventHandler = (e) => {
    // rest: id, title 정보
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem); // 수정 2 - checkbox input에서 check 여부 변경시 수정
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done} // item의 done에서 true한 값만 고정값으로 체크되어있음
        onChange={checkboxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        onChange={editEventHandler}
      />
      <button onClick={onDeleteButtonClick}>
        <AiTwotoneDelete />
      </button>
    </div>
  );
};

export default Todo;
