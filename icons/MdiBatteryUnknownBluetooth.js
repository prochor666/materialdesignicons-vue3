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
            d: "M5,2V4H3.33A1.33,1.33 0 0,0 2,5.33V20.66C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.66V5.33C14,4.59 13.4,4 12.67,4H11V2H5M8,6A4,4 0 0,1 12,10C12,10.88 11.64,11.68 11.07,12.25L10.17,13.17C9.63,13.71 9.25,14.18 9.09,15H7.05C7.16,14.1 7.56,13.28 8.17,12.67L9.41,11.41C9.78,11.05 10,10.55 10,10C10,8.89 9.1,8 8,8A2,2 0 0,0 6,10H4A4,4 0 0,1 8,6M19,8V11.79L16.71,9.5L16,10.21L18.79,13L16,15.79L16.71,16.5L19,14.21V18H19.5L22.35,15.14L20.21,13L22.35,10.85L19.5,8H19M20,9.91L20.94,10.85L20,11.79V9.91M20,14.21L20.94,15.14L20,16.08V14.21M7,17H9V19H7V17Z",
        })
    ]))
}
