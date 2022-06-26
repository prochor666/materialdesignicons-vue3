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
            d: "M3.5,19L8.34,12L3.5,5H14.5C15.17,5 15.72,5.3 16.13,5.86L20.5,12L16.13,18.14C15.72,18.7 15.17,19 14.5,19H3.5Z",
        })
    ]))
}
