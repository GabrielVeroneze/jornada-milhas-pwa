import styled from 'styled-components'

export const Banner = styled.picture`
    display: block;
    margin-bottom: -8px;

    & > img {
        width: 100%;
    }
`

export const Footer = styled.footer`
    align-items: center;
    background-color: #000000;
    display: flex;
    justify-content: center;
    padding: 32px 24px;

    @media (min-width: 768px) {
        padding: 32px 60px;
    }
`

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 1024px) {
        align-items: center;
        justify-content: space-between;
        width: 1000px;
    }
`

export const Wrapper = styled.div`
    align-items: start;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    gap: 8px;
`

export const Networks = styled.div`
    align-items: center;
    color: #ffff;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    gap: 16px;

    & > div {
        display: flex;
        gap: 8px;

        & > img {
            height: 32px;
            width: 32px;
        }
    }
`
