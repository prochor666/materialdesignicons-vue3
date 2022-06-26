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
            d: "M23 9V7H1V9L2 10.33V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H10L11 18H13L14 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H22V10.33L23 9M4 15V13L5.5 15H4M5 10V9H19V10H5M20 15H18.5L20 13V15Z",
        })
    ]))
}
