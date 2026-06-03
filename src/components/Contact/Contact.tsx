import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section>
        <div className={styles.contactSection}>
            <div className={styles.header}>
          <span className={styles.badge}>Contato</span>
          <h2 className={styles.title}>Vamos Construir Algo Juntos?</h2>
          <p className={styles.subtitle}>
            Sinta-se à vontade para enviar uma mensagem. Estou sempre aberto a novas propostas, 
            projetos desafiadores e conexões no mercado de engenharia de software.
          </p>
        </div>
        </div>
    </section>
  )
}

export default Contact
