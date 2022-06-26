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
            d: "M18 17.35L3.38 2.73L2.11 4L6 7.89V20.67A1.34 1.34 0 0 0 7.33 22H16.67A1.34 1.34 0 0 0 18 20.67V19.89L20.84 22.73L22.11 21.46M16 20H8V9.89L16 17.89M16 6V12.8L18 14.8V5.33A1.34 1.34 0 0 0 16.67 4H15V2H9V4H7.21L9.21 6Z",
        })
    ]))
}