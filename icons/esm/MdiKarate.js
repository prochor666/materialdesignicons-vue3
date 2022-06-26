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
            d: "M19.8 2L11.6 8.7L10.39 7.66L14 5.58L9.41 1L8 2.41L10.74 5.15L5 8.46L3.81 12.75L6.27 17L8 16L5.97 12.5L6.32 11.18L9.5 13L10 22H12L12.5 12L21 3.4L19.8 2M5 3C6.11 3 7 3.9 7 5S6.11 7 5 7 3 6.11 3 5 3.9 3 5 3Z",
        })
    ]))
}
