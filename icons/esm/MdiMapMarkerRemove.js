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
            d: "M9,2C5.14,2 2,5.14 2,9C2,14.25 9,22 9,22C9,22 16,14.25 16,9A7,7 0 0,0 9,2M9,6.5A2.5,2.5 0 0,1 11.5,9A2.5,2.5 0 0,1 9,11.5A2.5,2.5 0 0,1 6.5,9A2.5,2.5 0 0,1 9,6.5M16.58,14.16L15.17,15.58L17.58,18L15.17,20.41L16.58,21.82L19,19.41L21.41,21.82L22.83,20.41L20.41,18L22.83,15.58L21.41,14.16L19,16.58",
        })
    ]))
}
