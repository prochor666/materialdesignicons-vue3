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
            d: "M21,21H3V11.25L9.45,15L13.22,12.8L21,17.29V21M3,8.94V6.75L9.45,10.5L13.22,8.3L21,12.79V15L13.22,10.5L9.45,12.67L3,8.94Z",
        })
    ]))
}
