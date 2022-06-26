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
            d: "M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M8,17H10V7H6V9H8M14,7H16C17.11,7 18,7.9 18,9V15C18,16.11 17.11,17 16,17H14A2,2 0 0,1 12,15V9A2,2 0 0,1 14,7M14,9V15H16V9H14Z",
        })
    ]))
}
