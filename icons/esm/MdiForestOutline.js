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
            d: "M19.19 18H24L20.14 12H22L15 2L12.61 5.41L17.92 13H15.97L19.19 18M16 12L9 2L2 12H3.86L0 18H7V22H11V18H18L14.14 12H16M12.16 10H10.5L14.34 16H3.67L7.53 10H5.84L9 5.5L12.16 10M13 19V22H17V19H13Z",
        })
    ]))
}
