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
            d: "M20 14H18L14.8 23H16.7L17.4 21H20.6L21.3 23H23.2L20 14M17.8 19.7L19 16L20.2 19.7H17.8M7 9H15V11H7V9M7 12H15V14H7V12M7 15H15V16.5L14.8 17H7V15M13.7 20H7V18H14.5L13.7 20M16 8H6V20H4V8H2V4H20V8H18V12H16.6L16.1 13.3L16 13.7V8Z",
        })
    ]))
}
