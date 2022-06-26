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
            d: "M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z",
        })
    ]))
}
