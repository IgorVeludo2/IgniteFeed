import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
      <aside className={styles.sidebar} >
        <img 
          className={styles.cover} 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  
        />
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://github.com/IgorVeludo2.png" />

          <strong>Igor Veludo</strong>
          <span>Full Stack Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Perfil
          </a>
        </footer>
      </aside>
  );
}