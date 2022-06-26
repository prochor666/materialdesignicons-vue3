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
            d: "M4 19H8.6L2.62 8.64C2.23 8 2 7.29 2 6.5C2 4.29 3.79 2.5 6 2.5C7.86 2.5 9.43 3.78 9.87 5.5H14V3C14 1.9 14.9 1 16 1V3.59L17.59 2H22V4H18.41L16 6.41V6.59L18.41 9H22V11H17.59L16 9.41V12C14.9 12 14 11.11 14 10V7.5H9.87C9.77 7.89 9.61 8.26 9.41 8.6L15.41 19H20C21.11 19 22 19.9 22 21V22H2V21C2 19.9 2.9 19 4 19M7.91 10C7.35 10.32 6.7 10.5 6 10.5L10.91 19H13.1L7.91 10M6 4.5C4.89 4.5 4 5.4 4 6.5C4 7.61 4.89 8.5 6 8.5C7.11 8.5 8 7.61 8 6.5C8 5.4 7.11 4.5 6 4.5Z",
        })
    ]))
}
