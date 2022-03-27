import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe("Add Input Test", ()=>{
    test("should render input element", async()=>{
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        expect(inputElement).toBeInTheDocument(inputElement);
    });

    test("should be able to change the input", async()=>{
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        fireEvent.change(inputElement, { target : { value : 'Go to market'} })
        expect(inputElement.value).toBe('Go to market');
    });

    test("should have empty input when add button is click",()=>{
        render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        const buttonElement = screen.getByRole("button");
        fireEvent.change(inputElement, { target : { value : 'Go to market' }});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    });
})