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
            d: "M4 6C4 4.9 4.9 4 6 4S8 4.9 8 6 7.1 8 6 8 4 7.1 4 6M1 9H7L14 4L15.31 5.5L11.14 8.5H14L21.8 4L23 5.4L14.5 12L14 22H12L11.5 12L8 11H1V9Z",
        })
    ]))
}
