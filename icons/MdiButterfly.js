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
            d: "M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21M7 6C4.24 6 2 8.24 2 11C2 12.64 2.79 14.09 4 15H4V17C4 19.21 5.79 21 8 21C8.72 21 9.39 20.81 9.97 20.5L10 20.46V7C9.16 6.37 8.13 6 7 6M6.5 12.5L5 11L6.5 9.5L8 11L6.5 12.5M22 11C22 8.24 19.76 6 17 6C15.88 6 14.85 6.37 14 7L14 7V20.46C14.59 20.81 15.27 21 16 21C18.21 21 20 19.21 20 17V15H20C21.21 14.09 22 12.64 22 11M17.5 12.5L16 11L17.5 9.5L19 11L17.5 12.5Z",
        })
    ]))
}
