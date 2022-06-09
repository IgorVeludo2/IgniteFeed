import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author= "Igor Guimarães Veludo" 
            content= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure quam rem beatae autem iste ex ad nihil quae facere officia, ullam dolor eaque ipsa incidunt exercitationem perspiciatis optio porro."
          />
        </main>
      </div>
    </div>
  )
}

