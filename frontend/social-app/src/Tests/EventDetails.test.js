import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow, mount} from "enzyme";
import EventDetail from "../Screens/EventDetails";

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

describe("<EventDetail/>", () => {
    it('Renders the modal', () => {
        act(() => {
            render(<EventDetail/>, container);
        });
        expect(container).toMatchSnapshot();
    });
});
