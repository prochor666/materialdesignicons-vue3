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
            d: "M21 22L18 20L15 22L12 20L9 22L6 20L3 22V3H21V9.67L19 7.67V5H5V18.26L6 17.6L9 19.6L12 17.6L15 19.6L18 17.6L19 18.26V16.33L21 14.33V22M20.5 12L15.5 7L14.08 8.41L16.67 11H7V13H16.67L14.08 15.58L15.5 17L20.5 12Z",
        })
    ]))
}
