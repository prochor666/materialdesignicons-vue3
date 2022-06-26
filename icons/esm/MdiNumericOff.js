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
            d: "M22.1 21.5L2.4 1.7L1.1 3L5.1 7H2V9H4V17H6V7.9L9.3 11.2C8.5 11.4 8 12.2 8 13V17H14V15.9L20.8 22.7L22.1 21.5M10 15V13H11.1L13.1 15H10M14 10.8L10.2 7H12C13.1 7 14 7.9 14 9V10.8M20 9H16V7H20C21.1 7 22 7.9 22 9V10.5C22 11.3 21.3 12 20.5 12C21.3 12 22 12.7 22 13.5V15C22 16 21.2 16.9 20.2 17L18.2 15H20V13H18V11H20V9Z",
        })
    ]))
}
