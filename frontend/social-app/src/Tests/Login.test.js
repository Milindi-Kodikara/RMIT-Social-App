import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow, mount} from "enzyme";
import LoginComponent from "../../../todo-app/src/components/todo/LoginComponent";

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

describe("<LoginScreen/>", () => {
    it('renders without crashing', () => {
        act(() => {
            render(<LoginComponent/>, container);
        });
        expect(container).toMatchSnapshot();
    });
});