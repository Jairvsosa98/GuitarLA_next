import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlogs from '../components/ListadoBlogs'
export default function Home({ guitarras, curso, entradas }) {

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
      <Curso
        curso={curso}
      />
      <section className='contenedor'>
        <ListadoBlogs
          entradas={entradas}
        />
      </section>
    </Layout>
  )
}


export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}
