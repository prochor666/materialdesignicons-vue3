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
            d: "M16 12C18.76 12 21 9.76 21 7S18.76 2 16 2 11 4.24 11 7 13.24 12 16 12M21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63S17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95 11H7V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6M5 11H.984V22H5V11Z",
        })
    ]))
}
