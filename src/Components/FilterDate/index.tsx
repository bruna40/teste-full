export default function FilterDate() {
    return (
        <div>
            <p>Filtrar ano de publicação:</p>
            <input type="number" placeholder="Ano de publicação" />
            <p>até</p>
            <input type="number" placeholder="Ano de publicação" />
            <button type="button">Filtrar</button>
        </div>
    )
}