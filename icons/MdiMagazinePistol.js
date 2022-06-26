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
            d: "M14 1L12 3H7L9 21H8V23H18V21L16 1M9 5H12L12.24 7H9.24M9.47 9H12.47L12.71 11H9.71M9.94 13H12.94L13.18 15H10.18M10.41 17H13.41L13.65 19H10.65Z",
        })
    ]))
}
