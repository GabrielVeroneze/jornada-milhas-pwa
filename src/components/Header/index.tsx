import Button from '@/components/Button'
import MenuBurguer from '@/components/MenuBurguer'
import * as Styled from './styled'

const Header = () => {
    return (
        <Styled.Container>
            <Styled.MenuMobile>
                <Styled.LogoMobile
                    src="/images/logo-mobile.svg"
                    alt="ícone de uma bússola, logotipo do site"
                />
                <MenuBurguer />
            </Styled.MenuMobile>

            <Styled.Wrapper>
                <img
                    src="/logo.svg"
                    alt="ícone de uma bússola, logotipo do site"
                />
                <Styled.Nav>
                    <Styled.Link href="#">Vender Milhas</Styled.Link>
                    <Styled.Link href="#">Sobre</Styled.Link>
                    <Button>Cadastre-se</Button>
                    <Button variante="secundario">Login</Button>
                </Styled.Nav>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default Header
