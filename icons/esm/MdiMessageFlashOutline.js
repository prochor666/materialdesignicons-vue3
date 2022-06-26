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
            d: "M4 17.2V4H20V10H22V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H15V16H5.2L4 17.2M22.5 16H20.3L22 12H17V18H19V23L22.5 16Z",
        })
    ]))
}
