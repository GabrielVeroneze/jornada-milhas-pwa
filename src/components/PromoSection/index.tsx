import type { Card } from '@/types/Card'
import CardPromo from '@/components/CardPromo'
import * as Styled from './styled'

interface PromoSectionProps {
    cards: Card[]
}

const PromoSection = ({ cards }: PromoSectionProps) => {
    return (
        <Styled.Section>
            <Styled.Container>
                <Styled.Title>Promoções</Styled.Title>
                <Styled.Wrapper>
                    {cards.map((card) => (
                        <CardPromo key={card.titulo} card={card} />
                    ))}
                </Styled.Wrapper>
                <Styled.Link href="/">Ver mais</Styled.Link>
            </Styled.Container>
        </Styled.Section>
    )
}

export default PromoSection
