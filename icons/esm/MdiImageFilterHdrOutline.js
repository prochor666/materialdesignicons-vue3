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
            d: "M23 18H1L8.25 8.33L10.25 11L14 6L23 18M11.5 12.67L14 16L19 16L14 9.33L11.5 12.67M5 16L11.5 16L8.25 11.67L5 16Z",
        })
    ]))
}
