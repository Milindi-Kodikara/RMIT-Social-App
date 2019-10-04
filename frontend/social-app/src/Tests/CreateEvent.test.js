import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow, mount} from "enzyme";
import CreateEventModal from "../Components/CreateEventModal";

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

describe("<CreateEventModal/>", () => {
    it('Renders the modal', () => {
        act(() => {
            render(<CreateEventModal/>, container);
        });
        expect(container).toMatchSnapshot();
    });
});
