const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
    _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd"
            d: "M21 9H16C15 9 14.1 9.8 14 10.8L17.8 14.6C18 14.5 18.2 14.5 18.5 14.5H18.6C20.3 14.5 21.6 15.8 21.6 17.5C21.6 17.7 21.6 18 21.5 18.2L23.1 19.8V11C23 9.9 22.1 9 21 9M18.5 13.5C17.7 13.5 17 12.8 17 12S17.7 10.5 18.5 10.5 20 11.2 20 12 19.3 13.5 18.5 13.5M23 5V7H21V5H8.2L6.2 3H21C22.1 3 23 3.9 23 5M2.4 1.7L1.1 3L1.6 3.5C1.3 3.9 1 4.4 1 5V17C1 18.1 1.9 19 3 19H8V21H12V17H3V5H3.1L14 15.9V20C14 21.1 14.9 22 16 22H20.1L20.8 22.7L22.2 21.5L2.4 1.7M18.5 20.5C16.8 20.5 15.5 19.2 15.5 17.5V17.4L18.6 20.5H18.5Z",
        })
    ]))
}
