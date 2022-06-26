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
            d: "M7.5 4C7.9 3.6 8.5 3.6 8.9 4L11.8 7C11 7.4 10.6 7.6 10.2 8.2L7.5 5.5C7.1 5.1 7.1 4.4 7.5 4M6.3 7.2C6.7 6.8 7.3 6.8 7.7 7.2L9.6 9.2C9.4 9.8 9.3 10.5 9.4 11H8.6L6.3 8.6C5.9 8.2 5.9 7.6 6.3 7.2M19 21.5C19 22.9 17.9 24 16.5 24H5.5C5 24 4.5 23.5 4.5 23S5 22 5.5 22H10V21H4C3.5 21 3 20.5 3 20S3.5 19 4 19H10V18H3C2.5 18 2 17.5 2 17S2.5 16 3 16H10V15H4.5C4 15 3.5 14.5 3.5 14S4 13 4.5 13H12.5L11.6 11.1C11.2 10.4 11.5 9.5 12.3 9.1L12.5 9L18.2 14.5C18.7 15 19 15.6 19 16.3V21.5M22 11.3C22 12 21.7 12.6 21.2 13.1L20.3 13.9C20.1 13.6 19.9 13.3 19.6 13L19 12.4L15.4 9L12.7 6.6L8.9 2.6C8.5 2.2 8.5 1.6 8.9 1.2C9.3 .8 9.9 .8 10.3 1.2L15.1 6.3L15.8 5.6L12 1.6C11.6 1.2 11.6 .6 12 .2S13-.2 13.4 .2L18.9 6L19.6 4C20.1 3.4 21 3 21.7 3.2L22 3.3V11.3Z",
        })
    ]))
}
