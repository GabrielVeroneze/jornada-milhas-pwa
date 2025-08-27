import * as Styled from './styled'

interface ButtonProps {
    children: React.ReactNode
    variante?: 'primario' | 'secundario'
}

const Button = ({ children, variante = 'primario' }: ButtonProps) => {
	return (
		<Styled.Button $variant={variante}>
			{children}
		</Styled.Button>
	)
}

export default Button
