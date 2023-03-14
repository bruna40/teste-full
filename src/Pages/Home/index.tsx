import { useState } from 'react';
import Buscador from "../../Components/Buscador/index";
import Button from "../../Components/Button";
import FilterDate from "../../Components/FilterDate";
import Table from "../../Components/Table";
import { HeaderContainer } from './style';

export default function Home() {
    const [search, setSearch] = useState('');
    return (
        <>
            <HeaderContainer>
                <Button />
                <Buscador 
                    value={ search }
                    onChange={ setSearch }
                />
            </HeaderContainer>
            <FilterDate />
            <Table
                value={ search }
            />
        </>
    )
}
