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
            d: "M19 16.5C17.8 16.5 16.5 16.3 15.4 15.9H15.1C14.8 15.9 14.6 16 14.4 16.2L12.2 18.4C9.4 16.9 7 14.6 5.6 11.8L7.8 9.6C8.1 9.3 8.2 8.9 8 8.6C7.7 7.5 7.5 6.2 7.5 5C7.5 4.5 7 4 6.5 4H3C2.5 4 2 4.5 2 5C2 14.4 9.6 22 19 22C19.5 22 20 21.5 20 21V17.5C20 17 19.5 16.5 19 16.5M4 6H5.5C5.6 6.9 5.8 7.8 6 8.6L4.8 9.8C4.4 8.6 4.1 7.3 4 6M18 20C16.7 19.9 15.4 19.6 14.2 19.2L15.4 18C16.2 18.2 17.1 18.4 18 18.4V20M16 9V7.5H12.5L18 2L17 1L11.5 6.5V3H10V9H16M17 6V7.5H20.5L15 13L16 14L21.5 8.5V12H23V6H17Z",
        })
    ]))
}
