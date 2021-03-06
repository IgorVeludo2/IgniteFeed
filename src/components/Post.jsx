import styles from './Post.module.css';
export function Post(props) {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/IgorVeludo2.png" />
          <div className={styles.authorInfo}>
            <strong>Igor Veludo</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time 
          title="11 de Maio às 08:13h" 
          dateTime="2022-05-11 08:13:30">
            Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="">jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto{' '}</a>
            <a href="">#nlw{' '}</a>
            <a href="">#rocketseat</a>
          </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
};