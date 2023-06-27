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
            d: "M11 8.32C11.57 8.7 12 9.35 12 10V15.5L8.5 19V22H3.5V19L0 15.5V10C0 9 1 8 2 8V4H4V8H8V4H10V8C10.35 8 10.7 8.12 11 8.32M7.09 17.59L10 14.67V10.09C10 10.06 9.95 10 9.92 10H2.09C2.06 10 2 10.06 2 10.09V14.67L5.33 18H6.67L7.09 17.59M12 4.04C12.11 4 12.22 4 12.33 4H14V2H20V4H21.67C22.4 4 23 4.6 23 5.33V20.67C23 21 22.86 21.36 22.61 21.61C22.36 21.86 22 22 21.67 22H12.33C11.6 22 11 21.4 11 20.67V19.33L13 17.33V20H21V6H12V4.04Z",
        })
    ]))
}
