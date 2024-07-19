import styles from '../../styles/todo.module.scss'

interface ButtonProps {
  handleRemove: (id: number) => void
  id: number
  Delete: boolean
}

export const Button: React.FC<ButtonProps> = ({handleRemove, Delete, id}) => {
  return (
    <button
        onClick={() => handleRemove(id)}
        disabled={Delete}
        className={styles.delete}
        >
        Delete
  </button>
  );
}
