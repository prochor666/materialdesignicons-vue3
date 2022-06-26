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
            d: "M2 3V10L17 12L2 14V21L23 12M4 6.03L11.53 9.25L4 8.25M11.53 14.75L4 17.97V15.75M22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17Z",
        })
    ]))
}
