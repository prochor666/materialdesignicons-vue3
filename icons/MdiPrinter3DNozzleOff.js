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
            d: "M20.8 22.7L14 15.9L13 17H11L7.5 13H5V8H6.1L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M11 19C11 19.6 10.6 20 10 20H2V22H10C11.7 22 13 20.7 13 19V18H11V19M19 13V8H17V2H7V3.8L16.2 13H19Z",
        })
    ]))
}
