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
            d: "M5 6V8C8.2 8 11.36 9.18 13.57 11.15C15.64 13 16.83 15.5 17 18H18.97A14 12.5 0 0 0 5 6M22 21H2V3H4V19H22Z",
        })
    ]))
}
