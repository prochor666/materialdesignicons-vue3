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
            d: "M10.5 3H18V7H10.5C8.57 7 7 8.57 7 10.5S8.57 14 10.5 14H13V10L20 16L13 22V18H10.5C6.36 18 3 14.64 3 10.5S6.36 3 10.5 3Z",
        })
    ]))
}
