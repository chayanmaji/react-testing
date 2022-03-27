import { render, screen } from '@testing-library/react';
import Header from '../Header';

test("Header should render the text that passed as title", async ()=>{
    render(<Header title={"Hello brother"}/>)
    const headerElement = screen.getByText(/hello brother/i)
    expect(headerElement).toBeInTheDocument();
})

test("Header should render the text that passed as title and tested by getByRole",async ()=>{
    render(<Header title={"Hello World"}/>);
    const headerElement = screen.getByRole("heading",{name:"Hello World"});
    expect(headerElement).toBeInTheDocument();
})
