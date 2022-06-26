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
            d: "M10 5H13V3H10V2C10 1.4 9.6 1 9 1S8 1.4 8 2V15.3C7.4 15.6 7 16.3 7 17C7 18.1 7.9 19 9 19S11 18.1 11 17C11 16.3 10.6 15.6 10 15.3V13H13V11H10V9H13V7H10V5M22 17.5C22 17.5 24 19.7 24 21C24 22.1 23.1 23 22 23S20 22.1 20 21C20 19.7 22 17.5 22 17.5M22.9 15.5C22.6 16 22 16.1 21.5 15.9L19.4 14.7L15.8 21C15.5 21.6 14.8 22 14 22H5C3.9 22 3 21.1 3 20V17C3 15.9 3.9 15 5 15V20H14L16.1 16.4L13 18.2V15.8L19.2 12.2L22.5 14.1C23 14.4 23.1 15 22.9 15.5M3.5 13.9L1.8 15.6C1.4 16 .8 16 .4 15.6S0 14.6.4 14.2L2.1 12.5C2.5 12.1 3.1 12.1 3.5 12.5S3.9 13.5 3.5 13.9Z",
        })
    ]))
}