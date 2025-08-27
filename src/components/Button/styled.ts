import styled from 'styled-components'

export const Button = styled.button<{ $variant?: 'primario' | 'secundario' }>`
    background-color: ${(props) =>
        props.$variant === 'secundario' ? 'transparent' : '#6750a4'};
    border: ${(props) =>
        props.$variant === 'secundario' ? '1px solid #79747E' : 'none'};
    border-radius: 50px;
    color: ${(props) =>
        props.$variant === 'secundario' ? '#6750a4' : '#ffffff'};
    cursor: pointer;
    font-weight: 500;
    padding: 10px 24px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d0bcff;
    }
`
