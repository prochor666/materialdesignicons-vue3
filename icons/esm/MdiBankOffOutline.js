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
            d: "M20.8 22.7L19.1 21H2V19H17.1L12.5 14.4V17H10.5V12.4L6.1 8H2V6L3.4 5.3L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M4.5 10V17H6.5V10H4.5M11.5 3.3L16.7 6H9.2L11.2 8H21V6L11.5 1L6.7 3.5L8.2 5L11.5 3.3M18.5 15.3V10H16.5V13.3L18.5 15.3Z",
        })
    ]))
}
