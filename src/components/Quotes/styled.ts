import styled from 'styled-components'

export const Section = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    margin-bottom: 24px;
    padding: 24px;

    @media (min-width: 768px) {
        margin: 0 60px;
        padding-left: 0;
        padding-right: 0;
    }

    @media (min-width: 1024px) {
        max-width: 1000px;
    }
`

export const Title = styled.h2`
    color: #000000;
    font-size: 32px;
    margin-bottom: 32px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

export const Card = styled.li`
    align-items: flex-start;
    background-color: #fef7ff;
    display: flex;
    gap: 16px;
    padding: 12px 16px;
`

export const Image = styled.img`
    height: 56px;
    width: 56px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Testimonial = styled.p`
    color: #49454f;
    font-size: 16px;
    font-style: normal;
`

export const Autor = styled.span`
    color: #1d1b20;
    font-size: 16px;
    font-weight: 500;
`
