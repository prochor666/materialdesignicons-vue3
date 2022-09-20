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
            d: "M15 7.8C14.6 4.5 11.8 2 8.5 2C6.8 2 5.1 2.7 3.9 3.9S2 6.8 2 8.5V22H15V9.8L18 11.6V22H20V12.8L22 14V12L15 7.8M11 20H6V18H11V20M11 16H6V14H11V16M11 12H6V10H11V12M4.3 7C4.9 5.2 6.6 4 8.5 4S12.1 5.2 12.7 7H4.3Z",
        })
    ]))
}
