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
            d: "M10 9C8.9 9 8 9.92 8 11.05C8 11.62 8.22 12.12 8.59 12.5L12 16L15.42 12.5C15.78 12.13 16 11.61 16 11.05C16 9.92 15.1 9 14 9C13.46 9 12.95 9.23 12.59 9.6L12 10.2L11.42 9.61C11.05 9.23 10.54 9 10 9M12 .64L21.03 6.29C21.61 6.64 22 7.27 22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V8C2 7.27 2.39 6.64 2.97 6.29L12 .64M4 10V18H20V10L18 11.25C18 11.19 18 11.12 18 11.05C18 10.5 17.88 9.95 17.67 9.45L20 8L12 3L4 8L6.33 9.45C6.12 9.95 6 10.5 6 11.05C6 11.12 6 11.19 6 11.25L4 10Z",
        })
    ]))
}
