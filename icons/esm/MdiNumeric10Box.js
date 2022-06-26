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
            d: "M14,9H16V15H14V9M21,5V19C21,20.11 20.11,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19C20.11,3 21,3.9 21,5M10,7H6V9H8V17H10V7M18,9A2,2 0 0,0 16,7H14A2,2 0 0,0 12,9V15C12,16.11 12.9,17 14,17H16C17.11,17 18,16.11 18,15V9Z",
        })
    ]))
}
