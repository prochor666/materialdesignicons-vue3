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
            d: "M16 3.23C16.71 2.41 17.61 2 18.7 2C19.61 2 20.37 2.33 21 3C21.63 3.67 21.96 4.43 22 5.3C22 6 21.67 6.81 21 7.76S19.68 9.5 19.03 10.15C18.38 10.79 17.37 11.74 16 13C14.61 11.74 13.59 10.79 12.94 10.15S11.63 8.71 10.97 7.76C10.31 6.81 10 6 10 5.3C10 4.39 10.32 3.63 10.97 3C11.62 2.37 12.4 2.04 13.31 2C14.38 2 15.27 2.41 16 3.23M22 19V20L14 22.5L7 20.56V22H1V11H8.97L15.13 13.3C16.25 13.72 17 14.8 17 16H19C20.66 16 22 17.34 22 19M5 20V13H3V20H5M19.9 18.57C19.74 18.24 19.39 18 19 18H13.65C13.11 18 12.58 17.92 12.07 17.75L9.69 16.96L10.32 15.06L12.7 15.85C13 15.95 15 16 15 16C15 15.63 14.77 15.3 14.43 15.17L8.61 13H7V18.5L13.97 20.41L19.9 18.57Z",
        })
    ]))
}
