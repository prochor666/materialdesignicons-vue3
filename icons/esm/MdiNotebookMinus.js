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
            d: "M3 7V5H5V4C5 2.9 5.9 2 7 2H13V9L15.5 7.5L18 9V2H19C20 2 21 3 21 4V13.8C20.1 13.3 19.1 13 18 13C14.7 13 12 15.7 12 19C12 20.1 12.3 21.1 12.8 22H7C5.9 22 5 21 5 20V19H3V17H5V13H3V11H5V7H3M5 5V7H7V5H5M5 19H7V17H5V19M5 13H7V11H5V13M14 18V20H22V18H14Z",
        })
    ]))
}
