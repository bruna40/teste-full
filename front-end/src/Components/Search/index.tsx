import { MagnifyingGlass } from "@phosphor-icons/react";
import { IBuscador } from "../../interfaces/IBuscador";
import { Input } from "./style";

export default function Buscador({value, onChange}: IBuscador) {
    return (
        <Input>
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                data-testid="input__search"
            />
            <MagnifyingGlass size={32} />
        </Input>
    )
}