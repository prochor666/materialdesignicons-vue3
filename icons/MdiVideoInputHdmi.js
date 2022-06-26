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
            d: "M18,7V4A2,2 0 0,0 16,2H8A2,2 0 0,0 6,4V7H5V13L8,19V22H16V19L19,13V7H18M8,4H16V7H14V5H13V7H11V5H10V7H8V4Z",
        })
    ]))
}
