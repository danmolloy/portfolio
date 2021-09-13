import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Welcome component renders", () => {
  act(() => {
    render(<App />, container)
  })
  const welcomeText = screen.getByText(/I'm Dan/i);
  expect(welcomeText).toBeInTheDocument();
})

it("About component renders", () => {
  act(() => {
    render(<App />, container)
  })
  const aboutText = screen.getByText(/About/i);
  expect(aboutText).toBeInTheDocument();
})

it("Portfolio component renders", () => {
  act(() => {
    render(<App />, container)
  })
  const portfolioText = screen.getByText(/portfolio/i);
  expect(portfolioText).toBeInTheDocument();
})

it("Contact component renders", () => {
  act(() => {
    render(<App />, container)
  })
  cont contactText = screen.getByText(/contact/i);
  expect(contactText).toBeInTheDocument();
})