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
            d: "M20 13H16C16 14.1 15.1 15 14 15H10C8.9 15 8 14.1 8 13H4L2 18V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V18M6 20C5.11 20 4.66 18.92 5.29 18.29C5.92 17.66 7 18.11 7 19C7 19.55 6.55 20 6 20M10 20C9.11 20 8.66 18.92 9.29 18.29C9.92 17.66 11 18.11 11 19C11 19.55 10.55 20 10 20M14 20C13.11 20 12.66 18.92 13.29 18.29C13.92 17.66 15 18.11 15 19C15 19.55 14.55 20 14 20M18 20C17.11 20 16.66 18.92 17.29 18.29C17.92 17.66 19 18.11 19 19C19 19.55 18.55 20 18 20M18 10V3H6V10H3V12H21V10M8 5H16V6H8M8 7H14V8H8",
        })
    ]))
}
