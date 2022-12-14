import Link from 'next/link'
import Image from 'next/image'
import {formatearFecha} from '../helpers'
import styles from '../styles/Entrada.module.css'

const entrada = ({entrada}) => {

    const {titulo, resumen, imagen, published_at, id, url } = entrada
  return (
    <article>
        <Image priority="true" layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen Blog ${titulo}`} />
        <div className={styles.contenido}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>
            Leer Entrada
          </a>
        </Link>
        </div>
    </article>
  )
}

export default entrada
