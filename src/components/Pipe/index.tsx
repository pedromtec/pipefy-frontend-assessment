import type { OrganizationPipe } from '../../graphql/types'
import * as S from './styles'

type PipeProps = Omit<OrganizationPipe, 'id'>

export function Pipe({ name, cards_count, color }: PipeProps) {
    return (
        <S.Wrapper color={color}>
            <S.Info>
                <S.Name>{name}</S.Name>
                <S.CardsCount>{cards_count} cards</S.CardsCount>
            </S.Info>
        </S.Wrapper>
    )
}