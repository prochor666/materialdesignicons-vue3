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
            d: "M20.84 22.73L10.78 12.67C10 12.03 9.27 11.5 8.5 11.5C4.5 11.5 4.5 15 4.5 15H2C2 15 2 9.59 7.16 9.05L1.11 3L2.39 1.73L10.03 9.37L10.03 9.37L15.64 15L15.63 15L22.11 21.46L20.84 22.73M22 9H19.5C19.5 9 19.5 12.38 15.69 12.5L17.95 14.75C22 13.62 22 9 22 9Z",
        })
    ]))
}
