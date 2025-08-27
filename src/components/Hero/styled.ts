import styled from 'styled-components'

export const Container = styled.section`
    position: relative;
`

export const Title1 = styled.h1`
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    left: 50%;
    position: absolute;
    text-align: left;
    top: 15%;
    transform: translate(-50%, -15%);
    width: 235px;
    z-index: 1;

    @media (min-width: 768px) {
        font-size: 32px;
        width: 353px;
    }

    @media (min-width: 1024px) {
        font-size: 42px;
        left: 33%;
        top: 40%;
        transform: translate(-50%, -15%);
        width: 488px;
    }
`

export const Banner = styled.picture`
    display: block;

    & > img {
        width: 100%;
    }
`
