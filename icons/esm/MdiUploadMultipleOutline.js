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
            d: "M19 8H15V14H9V8H5L12 1L19 8M14.17 6L12 3.83L9.83 6H11V12H13V6H14.17M5 16V18H19V16H5M19 20V22H5V20H19Z",
        })
    ]))
}
