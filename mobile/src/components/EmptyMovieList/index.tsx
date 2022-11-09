import {Text} from 'react-native'
import { THEME } from '../../theme'

interface EmptyMovieListProps {
    query?: string
}

export function EmptyMovieList({query = ''}: EmptyMovieListProps) {
    return (
        <Text
            style={{
                color: THEME.COLORS.CAPTION_400,
                fontFamily: THEME.FONT_FAMILY.SANS.REGULAR,
                fontSize: THEME.FONT_SIZE.XS,
                textAlign: 'center'
            }}
        >
            {query.length === 0 
                ? "Os filmes ainda não foram carregados, \n digite para buscar os filmes que deseja." 
                : `Nenhum filme foi encontrado.`
            }
        </Text>
    )
}
