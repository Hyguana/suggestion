import styles from '../styles/Estiloso.module.css'
import Link from 'next/dist/client/link'
import Layout from '../components/Layout'

export default function Estiloso(){
    return (
        <Layout>
            <div className = {styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
                <p>nepia</p>
            </div>
        </Layout>
    )
}