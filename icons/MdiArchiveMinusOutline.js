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
            d: "M13 19C13 19.7 13.13 20.37 13.35 21H4V10H6V19H13M19 13C19.34 13 19.67 13.04 20 13.09V10H18V13.09C18.33 13.04 18.66 13 19 13M9.5 11C9.22 11 9 11.22 9 11.5V13H15V11.5C15 11.22 14.78 11 14.5 11H9.5M21 9H3V3H21V9M19 5H5V7H19V5M15 18V20H23V18H15Z",
        })
    ]))
}
