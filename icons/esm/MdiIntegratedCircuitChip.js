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
            d: "M10 4H20C21.11 4 22 4.89 22 6V8H18.59L16 10.59V14.59L14 16.59V20H10V16.59L8 14.59V9.41L10 7.41V4M18 11.41V14H22V10H19.41L18 11.41M6.59 8L8 6.59V4H4C2.89 4 2 4.89 2 6V8H6.59M6 14V10H2V14H6M8 17.41L6.59 16H2V18C2 19.11 2.89 20 4 20H8V17.41M17.41 16L16 17.41V20H20C21.11 20 22 19.11 22 18V16H17.41Z",
        })
    ]))
}
