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
            d: "M15 11.5C13.62 11.5 12.5 10.38 12.5 9S13.62 6.5 15 6.5 17.5 7.62 17.5 9 16.38 11.5 15 11.5M8 9C8 14.25 15 22 15 22S22 14.25 22 9C22 5.13 18.87 2 15 2S8 5.13 8 9M6 7L1 12L6 17V7Z",
        })
    ]))
}
