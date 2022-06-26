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
            d: "M13.26 20.74L12 22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5L3 22V2L4.5 3.5L6 2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2L19.5 3.5L21 2V13.35C20.37 13.13 19.7 13 19 13V4.91H5V19.09H13C13 19.66 13.1 20.22 13.26 20.74M6 15V17H13.35C13.61 16.25 14 15.58 14.54 15H6M6 13H18V11H6V13M6 9H18V7H6V9M23 17.23L21.84 15.82L18.25 19.41L16.66 17.82L15.5 19L18.25 22",
        })
    ]))
}
