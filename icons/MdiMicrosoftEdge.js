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
            d: "M10.86 15.37C10.17 14.6 9.7 13.68 9.55 12.65C9.25 13.11 9 13.61 8.82 14.15C7.9 16.9 9.5 20.33 12.22 21.33C14.56 22.11 17.19 20.72 18.92 19.2C19.18 18.85 21.23 17.04 20.21 16.84C17.19 18.39 13.19 17.95 10.86 15.37M11.46 9.56C12.5 9.55 11.5 9.13 11.07 8.81C10.03 8.24 8.81 7.96 7.63 7.96C3.78 8 .995 10.41 2.3 14.4C3.24 18.28 6.61 21.4 10.59 21.9C8.54 20.61 7.3 18.19 7.3 15.78C7.38 13.25 8.94 10.28 11.46 9.56M2.78 8.24C5.82 6 10.66 6.18 13.28 9C14.3 10.11 15 12 14.07 13.37C12.33 15.25 17.15 15.5 18.18 15.22C21.92 14.5 22.91 10.15 21.13 7.15C19.43 3.75 15.66 1.97 11.96 2C7.9 1.93 4.25 4.5 2.78 8.24Z",
        })
    ]))
}
