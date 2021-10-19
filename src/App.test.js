import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-dom';
import { Welcome} from "./Components/Welcome";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Welcome renders without error", () => {
  act(() => {
    render(<Welcome />, container)
  })
  
  expect(container.textContent).toMatch(/welcome/gi)
})


it("About component renders", () => {
  act(() => {
    render(<About />, container)
  })
  expect(container.textContent).toMatch(/about/gi)
})

it("Projects component renders", () => {
  act(() => {
    render(<Projects />, container)
  })
  expect(container.textContent).toMatch(/projects/gi)
})

it("Contact component renders", () => {
  act(() => {
    render(<Contact />, container)
  })
  expect(container.textContent).toMatch(/contact/gi)
})