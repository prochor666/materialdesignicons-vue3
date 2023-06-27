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
            "clip-rule": "evenodd",
            d: "M10 9C8.9 9 8 9.92 8 11.05C8 11.62 8.22 12.12 8.59 12.5L12 16L15.42 12.5C15.78 12.13 16 11.61 16 11.05C16 9.92 15.1 9 14 9C13.46 9 12.95 9.23 12.59 9.6L12 10.2L11.42 9.61C11.05 9.23 10.54 9 10 9M20 4C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20M16.7 8.06L20 6H4L7.3 8.06C6.89 8.45 6.55 8.92 6.33 9.45L4 8V18H20V8L17.67 9.45C17.45 8.92 17.11 8.45 16.7 8.06Z",
        })
    ]))
}
