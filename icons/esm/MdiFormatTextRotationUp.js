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
            d: "M3 12V13.5L14 18.25V16.15L11.8 15.25V10.25L14 9.35V7.25L3 12M10 14.62L5 12.75L10 10.88V14.62M18 4.25L15 7.25H17V19.75H19V7.25H21L18 4.25Z",
        })
    ]))
}
