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
            d: "M6 0A2 2 0 0 0 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M6 2H13V7H18V18H6V2M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z",
        })
    ]))
}
