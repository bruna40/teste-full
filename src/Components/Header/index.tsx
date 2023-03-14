export default function Header() {
    function search() {
        console.log("search")
    }
    return (
        <header>
            <div>
                Logo
            </div>
            <div>
                <input type="text" placeholder="Search" />
                <button
                    type="button"
                    onClick={search}
                >Filtrar</button>
            </div>
        </header>
    )
}