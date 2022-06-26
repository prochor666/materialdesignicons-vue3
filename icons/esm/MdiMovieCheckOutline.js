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
            d: "M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13.81C21.39 13.46 20.72 13.22 20 13.09V10H5.76L4 6.47V18H13.09C13.04 18.33 13 18.66 13 19M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z",
        })
    ]))
}