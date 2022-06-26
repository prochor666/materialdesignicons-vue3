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
            d: "M13 7H16C17.66 7 19 8.34 19 10V14C19 15.66 17.66 17 16 17H13V7M16 15C16.55 15 17 14.55 17 14V10C17 9.45 16.55 9 16 9H15V15H16M5 7H9C10.11 7 11 7.9 11 9V11C11 12.11 10.11 13 9 13H7V15H11V17H5V13C5 11.9 5.9 11 7 11H9V9H5V7Z",
        })
    ]))
}