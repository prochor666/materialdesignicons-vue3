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
            d: "M11,5H8L12,1L16,5H13V9.43C12.25,9.89 11.58,10.46 11,11.12V5M22,11L18,7V10C14.39,9.85 11.31,12.57 11,16.17C9.44,16.72 8.62,18.44 9.17,20C9.72,21.56 11.44,22.38 13,21.83C14.56,21.27 15.38,19.56 14.83,18C14.53,17.14 13.85,16.47 13,16.17C13.47,12.17 17.47,11.97 17.95,11.97V14.97L22,11M10.63,11.59C9.3,10.57 7.67,10 6,10V7L2,11L6,15V12C7.34,12.03 8.63,12.5 9.64,13.4C9.89,12.76 10.22,12.15 10.63,11.59Z",
        })
    ]))
}
