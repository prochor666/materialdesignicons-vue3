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
            d: "M9 7H11L12 9.5L13 7H15L13 12L15 17H13L12 14.5L11 17H9L11 12L9 7M16 7H18V15H22V17H16V7M8 15C8 16.11 7.11 17 6 17H2V15H6V13H4V11H6V9H2V7H6C7.1 7 8 7.89 8 9V10.5C8 11.33 7.33 12 6.5 12C7.33 12 8 12.67 8 13.5V15Z",
        })
    ]))
}
