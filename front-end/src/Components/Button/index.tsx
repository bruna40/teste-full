import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from '../../Style/theme';
import GlobalStyle from '../../Style/globalStyles';
import { ButtonContainer } from "./style";
import { Moon, Sun } from "@phosphor-icons/react";


export default function  Modo() {
    const [isDarkTheme, setIsDarkTheme ] = useState(false)

    return(
        <ThemeProvider theme={
            isDarkTheme? darkTheme : lightTheme
        }>
            <GlobalStyle />
            <ButtonContainer
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
                {
                    isDarkTheme? <Moon size={32} /> : <Sun size={32} />
                }
            </ButtonContainer>
        </ThemeProvider>
    )
}