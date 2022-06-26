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
            d: "M15 18V20H23V18H15M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.26 20.74C13.09 20.18 13 19.59 13 19C13 18.32 13.12 17.64 13.34 17H6V15H14.53C15.67 13.73 17.29 13 19 13C19.68 13 20.36 13.12 21 13.34V2L19.5 3.5M18 13H6V11H18V13M18 9H6V7H18V9Z",
        })
    ]))
}
