import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home/index";

describe('Home', () => {
    it('Deve ter o elemento de input para pesquisa', () => {
        render(<Home />);
        const input = screen.getByTestId('input-search');
        expect(input).toBeInTheDocument();
    })
});