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
            d: "M19 2A2 2 0 0 1 21 4V16A2 2 0 0 1 19 18H9A2 2 0 0 1 7 16V4A2 2 0 0 1 9 2H19M19 4H16V10L13.5 7.75L11 10V4H9V16H19M3 20A2 2 0 0 0 5 22H17V20H5V6H3Z",
        })
    ]))
}
