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
            d: "M16 2H8C6.89 2 6 2.89 6 4V16C6 17.11 6.9 18 8 18H10V20H8V22H16V20H14V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.1 2 16 2M16 16H8V4H16V16Z",
        })
    ]))
}
