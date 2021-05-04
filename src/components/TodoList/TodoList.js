import React from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ todo, deleteTodoItem }) => {
  const todoQuantity = todo.length;
  const todoDone = todo.reduce((accum, item) => {
    return item.completed ? accum + 1 : accum;
  }, 0);

  return (
    <>
      <p>
        Всего заметок: <span>{todoQuantity}</span>
      </p>
      <p>
        Заметок выполнено: <span>{todoDone}</span>
      </p>

      <ul className={styles.TodoList}>
        {todo.map(({ id, text }) => {
          return (
            <li key={id} className={styles.TodoList__item}>
              <p className={styles.TodoList__text}>{text}</p>
              <button
                onClick={() => {
                  deleteTodoItem(id);
                }}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
