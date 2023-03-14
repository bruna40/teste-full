import React, { useState } from 'react'
import { HeaderContainer } from "../../Pages/Home/style"
import Button  from '../../Components/Button/index'
import Buscador from '../../Components/Buscador/index'

export default function Header() {
    const [search, setSearch] = useState('');
    return (
        <HeaderContainer>
            <div>
                <Button />
                <Buscador 
                    value={search}
                    onChange={(value) => setSearch(value)}
                />
            </div>
        </HeaderContainer>
    )
}