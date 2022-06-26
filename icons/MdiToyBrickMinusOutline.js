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
            d: "M13.09 20H3V6H5V5C5 3.9 5.9 3 7 3H9C10.11 3 11 3.9 11 5V6H13V5C13 3.9 13.9 3 15 3H17C18.11 3 19 3.9 19 5V6H21V13.35C20.37 13.13 19.7 13 19 13V8H5V18H13.09C13.04 18.33 13 18.66 13 19S13.04 19.67 13.09 20M23 18H15V20H23V18Z",
        })
    ]))
}
