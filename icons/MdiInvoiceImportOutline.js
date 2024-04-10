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
            d: "M18 20L21 22V3H3V9H5V5H19V18.26L18 17.6L15 19.6L12 17.6L9 19.6L6 17.6L5 18.26V15H3V22L6 20L9 22L12 20L15 22L18 20M11.5 17L10.08 15.58L12.67 13H3V11H12.67L10.08 8.41L11.5 7L16.5 12L11.5 17Z",
        })
    ]))
}
