import styled from 'styled-components'

export const Menu = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;

    & > img {
        height: 22px;
        width: 30px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const Nav = styled.nav`
    background-color: #ffffff;
    height: 312px;
    padding: 24px;
    position: absolute;
    right: 0;
    top: 72px;
    width: 230px;
    z-index: 2;
`

export const ListItem = styled.li`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const List = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    list-style: none;
`

export const Link = styled.a`
    color: #79747e;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
`

export const Divisor = styled.div`
    background-color: #79747e;
    border-radius: 50%;
    height: 1px;
    margin-bottom: 16px;
    width: 182px;
`

export const Overflow = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`
