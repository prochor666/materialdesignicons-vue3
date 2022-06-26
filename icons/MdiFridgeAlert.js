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
            d: "M5 2H15C16.11 2 17 2.9 17 4V9H3V4C3 2.9 3.9 2 5 2M17 19C17 20.11 16.11 21 15 21V22H13V21H7V22H5V21C3.9 21 3 20.11 3 19V10H17V19M6 5V7H8V5H6M6 12V15H8V12H6M19 15H21V17H19V15M19 7H21V13H19V7Z",
        })
    ]))
}
