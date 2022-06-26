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
            d: "M20 12H4L2 22H22L20 12M18.36 14L18.76 16H13V14H18.36M11 14V16H5.24L5.64 14H11M4.84 18H11V20H4.44L4.84 18M13 20V18H19.16L19.56 20H13M11 8H13V11H11V8M15.76 7.21L17.18 5.79L19.3 7.91L17.89 9.33L15.76 7.21M4.71 7.91L6.83 5.79L8.24 7.21L6.12 9.33L4.71 7.91M3 2H6V4H3V2M18 2H21V4H18V2M12 7C14.76 7 17 4.76 17 2H15C15 3.65 13.65 5 12 5S9 3.65 9 2H7C7 4.76 9.24 7 12 7Z",
        })
    ]))
}
