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
            d: "M22 4C23.1 4 24 4.9 24 6V16C24 17.1 23.1 18 22 18H6C4.9 18 4 17.1 4 16V4C4 2.9 4.9 2 6 2H12L14 4H22M2 6V20H20V22H2C.9 22 0 21.1 0 20V6H2M6 6V16H22V6H6M14 10H16V8H18V10H20V12H18V14H16V12H14V10Z",
        })
    ]))
}
