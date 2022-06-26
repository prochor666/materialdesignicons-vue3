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
            d: "M20.84 22.73L16.11 18H5V9H4C3.45 9 3 8.55 3 8V7C3 6.45 3.45 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H9.2L19 15.8V9Z",
        })
    ]))
}
