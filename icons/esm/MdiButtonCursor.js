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
            d: "M18.1 15.3C18 15.4 17.8 15.5 17.7 15.6L15.3 16L17 19.6C17.2 20 17 20.4 16.6 20.6L13.8 21.9C13.7 22 13.6 22 13.5 22C13.2 22 12.9 21.8 12.8 21.6L11.2 18L9.3 19.5C9.2 19.6 9 19.7 8.8 19.7C8.4 19.7 8 19.4 8 18.9V7.5C8 7 8.3 6.7 8.8 6.7C9 6.7 9.2 6.8 9.3 6.9L18 14.3C18.3 14.5 18.4 15 18.1 15.3M6 12H4V4H20V12H18.4L20.6 13.9C21.4 13.6 21.9 12.9 21.9 12V4C21.9 2.9 21 2 19.9 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H6V12Z",
        })
    ]))
}
