import './Rodape.css'

const Rodape = () => {
    return (
        <footer>

            <div className='rodape'>
                <div className='redes'>
                <a href='facebook.com' target='_blank'><img src='/imagens/fb.png' alt='Facebook'></img></a>
                <a href='twitter.com' target='_blank'><img src='/imagens/tw.png' alt='Twitter'></img></a>
                <a href='instagram.com' target='_blank'><img src='/imagens/ig.png' alt='Instagram'></img></a>
                </div>
                <div className='logo'>
                <img alt='logo' src='/imagens/logo.png'></img>
                </div>
                <div className='text'>
                <h2>Desenvolvido por Leonardo.</h2>
                </div>
            </div>
        </footer>
    )
}

export default Rodape