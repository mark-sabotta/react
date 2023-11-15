import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


//smoke test
it("renders without crashing", function() {
    render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={TEST_IMAGES.length}
        />);
});

//snapshot test
it("matches snaphot", function() {
    const {asFragment} = render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={TEST_IMAGES.length}
        />);
    expect(asFragment()).toMatchSnapshot();
});