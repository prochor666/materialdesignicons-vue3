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
            d: "M19,12C19,16.42 15.64,20 11.5,20C7.36,20 4,16.42 4,12C4,7.58 7.36,4 11.5,4H20V6H16.46C18,7.47 19,9.61 19,12M11.5,6C8.46,6 6,8.69 6,12C6,15.31 8.46,18 11.5,18C14.54,18 17,15.31 17,12C17,8.69 14.54,6 11.5,6Z",
        })
    ]))
}
