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
            d: "M11 7.8L9 5.8V5C9 3.34 10.34 2 12 2S15 3.34 15 5V11.8L11.2 8H13V5C13 4.45 12.55 4 12 4S11 4.45 11 5V7.8M22.11 21.46L2.39 1.73L1.11 3L9 10.89V13C6.79 14.66 6.34 17.79 8 20C9.66 22.21 12.79 22.66 15 21C15.84 20.37 16.4 19.5 16.71 18.6L20.84 22.73L22.11 21.46Z",
        })
    ]))
}
