import { HeaderContainer } from "./style"
import Button  from '../../Components/Button/index'

export default function Header() {
    function search() {
        console.log("search")
    }
    return (
        <HeaderContainer>
            <div>
                <Button />
                <input type="text" placeholder="Search" />
                <button
                    type="button"
                    onClick={search}
                >Filtrar</button>
            </div>
        </HeaderContainer>
    )
}