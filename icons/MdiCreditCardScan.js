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
            d: "M18 6H6A2 2 0 0 0 4 8V16A2 2 0 0 0 6 18H18A2 2 0 0 0 20 16V8A2 2 0 0 0 18 6M18 12H6V9H18M2 4H6V2H2A2 2 0 0 0 0 4V8H2V4M22 2H18V4H22V8H24V4A2 2 0 0 0 22 2M2 16H0V20A2 2 0 0 0 2 22H6V20H2V16M22 20H18V22H22A2 2 0 0 0 24 20V16H22V20",
        })
    ]))
}
