import styled from 'styled-components'

export const Container = styled.header`
    align-items: center;
    background-color: #000000;
    display: flex;
    height: 72px;
    justify-content: center;
    padding: 20px 24px;
    width: 100%;

    @media (min-width: 768px) {
        padding: 20px 60px;
    }
`

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
`

export const Link = styled.a`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
`

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 1024px) {
        max-width: 1000px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const MenuMobile = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        display: none;
    }
`

export const LogoMobile = styled.img`
    height: 40px;
    width: 42px;
`
