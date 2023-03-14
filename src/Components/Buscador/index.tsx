import { MagnifyingGlass } from "@phosphor-icons/react";
import { IBuscador } from "../../@types/IBuscador";
import { Input } from "./style";

export default function Buscador({value, onChange}: IBuscador) {
    return (
        <Input>
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <MagnifyingGlass size={32} />
        </Input>
    )
}