import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>


                    <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="Imagen Sobre Nosotros" />
                    <div>
                        <p>
                            Quisque at odio ipsum. Mauris ante ex, viverra eget rhoncus a, blandit vel turpis. Fusce eu mauris sagittis, rutrum arcu sit amet, aliquet sapien. Phasellus ornare est vel dui lacinia, consectetur vestibulum urna scelerisque. Ut in viverra lectus. Vivamus pretium bibendum velit, at porttitor leo tristique et. Sed luctus sem vel ultricies rutrum. Phasellus imperdiet eleifend sodales. Sed nec sodales purus. Donec viverra dolor posuere pellentesque accumsan. Nulla tincidunt suscipit varius.
                        </p>
                        <p>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sodales vulputate. Vivamus quis sem eget orci molestie posuere non ut diam. Donec erat lacus, tempus eget blandit quis, efficitur eu metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis leo sed ante sollicitudin rutrum. Mauris ut semper elit. In iaculis dolor sit amet leo scelerisque, eu cursus risus varius. Curabitur iaculis id orci ut dictum. Praesent varius, mi eu efficitur accumsan, neque massa eleifend urna, sed hendrerit leo lacus sed sapien.
                        </p>


                    </div>

                </div>
            </main>
        </Layout>


    )
}

export default Nosotros



