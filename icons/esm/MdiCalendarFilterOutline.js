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
            d: "M19 3C20.11 3 21 3.89 21 5V11H19V9H5V19H15V21H4.75C4.31 20.93 3.9 20.73 3.58 20.42C3.27 20.1 3.07 19.69 3 19.25V5 4.75C3.07 4.31 3.27 3.9 3.58 3.58C3.9 3.27 4.31 3.07 4.75 3H6V1H8V3H16V1H18V3H19M19 7V5H5V7H19M19 21.44C19 21.59 18.97 21.75 18.86 21.86L18.69 21.96L18.5 22L18.31 21.96L18.15 21.85L17.15 20.85L17.03 20.66L17 20.44V17.5L14.1 13.81C14.03 13.71 14 13.57 14 13.44C14 13.31 14.09 13.19 14.19 13.11L14.5 13H21.5L21.81 13.11C21.92 13.19 22 13.31 22 13.44C22 13.57 22 13.71 21.9 13.81L19 17.5V21.44Z",
        })
    ]))
}
