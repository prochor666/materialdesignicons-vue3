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
            d: "M22.11 21.46L2.39 1.73L1.11 3L3 4.9C3 4.94 3 4.97 3 5V19C3 20.1 3.9 21 5 21H19C19.03 21 19.06 21 19.1 21L20.84 22.73L22.11 21.46M5 19V6.89L7.65 9.54C6.71 9.71 6 10.5 6 11.5V14H7V18H10V14H11V12.89L17.11 19H5M8.2 5L6.2 3H19C20.1 3 21 3.9 21 5V17.8L19 15.8V5H8.2M18 11H14.2L13.46 10.26L15.5 7L18 11M17.31 14.11L16.2 13H18L17.31 14.11Z",
        })
    ]))
}
