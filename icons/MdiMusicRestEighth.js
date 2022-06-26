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
            d: "M14 6A5.56 5.56 0 0 1 10.95 7.86A1.5 1.5 0 1 0 9.5 9H9.74A6.32 6.32 0 0 0 13.25 7.93L10 18H12L16 6Z",
        })
    ]))
}
