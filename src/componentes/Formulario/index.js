import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
        setCargo('')
        setNome('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                valor={nome}
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                aoAlterado={valor => setNome(valor)} />
                
                <CampoTexto 
                valor={cargo}
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                aoAlterado={valor => setCargo(valor)} />
                
                <CampoTexto
                valor={imagem} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                aoAlterado={valor => setImagem(valor)}/>
                
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                value={time}
                aoAlterado={valor => setTime(valor)} />
                <Botao texto="Criar card" />
            </form>
        </section>
    )
}
export default Formulario