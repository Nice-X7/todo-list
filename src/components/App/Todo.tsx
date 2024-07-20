import { Button } from "../functions/Button";
import { Check } from "../functions/Check";
import { useTypedSelector } from "../hooks";
import { TodoTypes } from "../Types/Types";
import { User } from "../Types/Types";
import styles from '../../style/todo.module.scss'

interface TodoProps {
  handleChecked: (id: number, completed: boolean) => void
  handleRemove: (id: number) => void
  todo: TodoTypes
  check?: boolean
  Delete?: boolean
}

export const Todo: React.FC<TodoProps> = ({ handleChecked, handleRemove, todo }) => {
  const users = useTypedSelector((state) => state.users as User[]);
  const user = users.find((x) => x.id === todo.userId);

  return (
    <div key={todo.id} className={styles.todo}>
      <Check
        handleChecked={handleChecked}
        id={todo.id}
        check={todo.check || false}
        completed={todo.completed}
      />
      <div className={styles.email}>
        <span>{todo.title}</span>
        <br />
        <b>
          <span className={styles.email}>Email: {user?.email}</span>
        </b>
      </div>
      {/* ---------------------------Button_for_deleting--------------------------- */}
      <Button handleRemove={handleRemove} Delete={todo.delete || false} id={todo.id} />
    </div>
  );
};