import styles from './react-lib.module.css';

/* eslint-disable-next-line */
export interface ReactLibProps {}

export function ReactLib(props: ReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLib!</h1>
    </div>
  );
}

export default ReactLib;
