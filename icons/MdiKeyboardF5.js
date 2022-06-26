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
            d: "M5 7H11V9H7V11H10V13H7V17H5V7M13 7H19V9H15V11H17C18.11 11 19 11.9 19 13V15C19 16.11 18.11 17 17 17H13V15H17V13H13V7Z",
        })
    ]))
}
