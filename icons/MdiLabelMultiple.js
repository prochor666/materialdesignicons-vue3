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
            d: "M4 19H13L11 21H4C3.5 21 2.97 20.79 2.59 20.41C2.21 20.03 2 19.5 2 19V9H4V19M17.63 5.84C17.27 5.33 16.67 5 16 5H8C6.9 5 6 5.9 6 7V15C6 16.1 6.9 17 8 17H16C16.67 17 17.27 16.66 17.63 16.15L22 11L17.63 5.84Z",
        })
    ]))
}
