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
            d: "M18 9H20V4H22V9A2 2 0 0 1 20 11H18V13L15 10L18 7M14 10A2 2 0 1 0 12 12A2 2 0 0 0 14 10M2 11V16H4V11H6V13L9 10L6 7V9H4A2 2 0 0 0 2 11M15 16L12 13L9 16H11V18A2 2 0 0 0 13 20H18V18H13V16",
        })
    ]))
}
