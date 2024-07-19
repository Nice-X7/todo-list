import { FC } from "react";
import styles from '../../styles/header.module.scss'

interface InputProps {
  handleChecked: (id: number, completed: boolean) => void
  id: number
  completed: boolean
}

export const Input: FC<InputProps> = ({handleChecked, id, completed}) => {
  return (
        <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChecked(id, completed)}
            className={styles.check}
        />
  );
}
