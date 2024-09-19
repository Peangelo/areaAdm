import styled from 'styled-components'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import google from './assets/google.png'
import whatsapp from './assets/whatsapp.png'

const RodapeEstilizado = styled.footer`
    
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const ListaEstilizada = styled.ul`

    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const ItemEstilizado = styled.li` 

    list-style-type: none;
`

const LinkEstilizado  = styled.a`
    justify-content: space-between;
    padding: .5em;
`
function Rodape() {
    
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <LinkEstilizado href="#">
                        <img src={facebook} alt='lofo do facebook'/>
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={instagram} alt='lofo do instagram'/>
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={google} alt='lofo do google'/>
                    </LinkEstilizado>
                    <LinkEstilizado href="#">
                        <img src={whatsapp} alt='lofo do whatsapp'/>
                    </LinkEstilizado>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>Desenvolvido por Rafael Peangelo</p>
        </RodapeEstilizado>
    )
}

export default Rodape