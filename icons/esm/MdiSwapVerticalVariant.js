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
            d: "M18,4L14,8H17V16A2,2 0 0,1 15,18A2,2 0 0,1 13,16V8A4,4 0 0,0 9,4A4,4 0 0,0 5,8V16H2L6,20L10,16H7V8A2,2 0 0,1 9,6A2,2 0 0,1 11,8V16A4,4 0 0,0 15,20A4,4 0 0,0 19,16V8H22L18,4Z",
        })
    ]))
}
