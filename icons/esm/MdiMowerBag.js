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
            d: "M11.95 14L10.82 12H14.76C15.5 12 16.21 12.43 16.55 13.11L17 14H11.95M23 18C23 19.66 21.66 21 20 21C18.7 21 17.6 20.16 17.18 19H11.65C11.09 20.18 9.89 21 8.5 21S5.91 20.18 5.35 19H2C1.45 19 1 18.55 1 18V11C1 10.67 1.17 10.36 1.44 10.17C1.71 10 2.06 9.95 2.37 10.07L7.43 12.09L3.42 5H1V3H4.58L11.37 15H20C21.66 15 23 16.34 23 18M7.34 14.21L3 12.5V17H5.05C5.24 15.7 6.13 14.64 7.34 14.21M10 17.5C10 16.67 9.33 16 8.5 16S7 16.67 7 17.5 7.67 19 8.5 19 10 18.33 10 17.5M21 18C21 17.45 20.55 17 20 17S19 17.45 19 18 19.45 19 20 19 21 18.55 21 18Z",
        })
    ]))
}
