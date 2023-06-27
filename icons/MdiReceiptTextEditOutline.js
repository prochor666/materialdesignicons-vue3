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
            d: "M18 2L19.5 3.5L21 2V9.13L19 11.13V4.91H5V19.09H10.5V20.5L9 22L7.5 20.5L6 22L4.5 20.5L3 22V2L4.5 3.5L6 2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2M13 19.96L19.13 13.83L21.17 15.87L15.04 22H13V19.96M19.83 13.13L20.81 12.15L20.83 12.13C20.88 12.09 20.94 12.05 21 12.03C21.18 11.97 21.39 12 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19L21.87 15.17L19.83 13.13M18 12.13L17.13 13H6V11H18V12.13M15.13 15L13.13 17H6V15H15.13M18 9V7H6V9H18Z",
        })
    ]))
}
