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
            d: "M20.84 22.73L18.11 20H5V18H16.11L13.06 14.95L12 16L5 9H7.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H15V3H9V5.8L15.6 12.4L19 9Z",
        })
    ]))
}
