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
            d: "M16 12.2C16 13.71 14.64 14.94 12.58 16.81L12 17.34L11.42 16.81C9.36 14.94 8 13.71 8 12.2C8 10.97 8.97 10 10.2 10C10.9 10 11.56 10.32 12 10.83C12.44 10.32 13.1 10 13.8 10C15.03 10 16 10.97 16 12.2M21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 5V7H19V5H5M19 19V9H5V19H19Z",
        })
    ]))
}
