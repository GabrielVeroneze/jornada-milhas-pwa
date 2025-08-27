import styled from 'styled-components'

export const Section = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        margin: 0 60px;
    }
`

export const Container = styled.div`
    max-width: 1000px;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`

export const Title = styled.h2`
    flex: 0 0 auto;
    font-size: 32px;
    font-style: normal;
    margin-bottom: 32px;
    text-align: left;
`

export const Wrapper = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    margin: 0;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const Link = styled.a`
    color: #625b71;
    font-size: 32px;
    font-style: normal;
    text-decoration: none;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`
