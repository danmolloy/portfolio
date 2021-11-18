import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-dom';
import { Welcome} from "./Components/Welcome";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";
import pretty from "pretty"
import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Welcome renders without error", () => {
  act(() => {
    render(<Welcome />, container)
  })
  
  expect(container.textContent).toMatch(/Dan Molloy/gi)
  expect(pretty(container.innerHTML)).toMatchSnapshot();
})


it("About component renders", () => {
  act(() => {
    render(<About />, container)
  })
  expect(container.textContent).toMatch(/about/gi)
  expect(pretty(container.innerHTML)).toMatchSnapshot();
})

it("Projects component renders", () => {
  act(() => {
    render(<Projects />, container)
  })
  expect(container.textContent).toMatch(/projects/gi)
  expect(pretty(container.innerHTML)).toMatchSnapshot();
})

it("Footer component renders", () => {
  act(() => {
    render(<Footer />, container)
  })
  expect(container.textContent).toMatch(/contact/gi)
  expect(pretty(container.innerHTML)).toMatchSnapshot();
})