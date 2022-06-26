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
            d: "M5.79 12.79L2 9C2 9 6 3 12 3S22 9 22 9L18.21 12.79L12 6.59L5.79 12.79M13.5 18H10.5V20L12 21L13.5 20V18M16.79 14.21L14.2 16.8C13.6 16.31 12.84 16 12 16S10.4 16.31 9.8 16.8L7.21 14.21L12 9.41L16.79 14.21M13 14C13 13.45 12.55 13 12 13S11 13.45 11 14 11.45 15 12 15 13 14.55 13 14Z",
        })
    ]))
}
