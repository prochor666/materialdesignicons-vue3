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
            d: "M13 20H13.09A5.5 5.5 0 0 0 13.81 22H9A2 2 0 0 1 11 20V12H3.5L6 9.5L3.5 7H11V3L12 2L13 3V7H18L20.5 9.5L18 12H13M18 15V18H15V20H18V23H20V20H23V18H20V15Z",
        })
    ]))
}
