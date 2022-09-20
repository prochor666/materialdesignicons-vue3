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
            d: "M6 3C6.6 3 7 3.4 7 4V4.9C8.1 4.4 9.5 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19 14 16 14S13 12 11 12C8 12 7 14 7 14V21H5V4C5 3.4 5.4 3 6 3M7 7.2V11.4C7 11.4 9 9.9 11 9.9S14 11.9 16 11.9 18 10.9 18 10.9V7.5C18 7.5 17 8 16 8C14 8 13 6 11 6S7 7.2 7 7.2M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z",
        })
    ]))
}
