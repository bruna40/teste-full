import { FilterDateContainer } from './style'

export default function FilterDate() {
    return (
        <FilterDateContainer>
            <form>
                <label>Filtrar ano de publicação:</label>
                <input type="number" placeholder="Ano de publicação" />
                <label>até</label>
                <input type="number" placeholder="Ano de publicação" />
                <button type="button">Filtrar</button>
            </form>
        </FilterDateContainer>
    )
}