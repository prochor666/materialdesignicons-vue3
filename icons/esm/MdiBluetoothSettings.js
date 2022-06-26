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
            d: "M14.88,14.29L13,16.17V12.41L14.88,14.29M13,3.83L14.88,5.71L13,7.59M17.71,5.71L12,0H11V7.59L6.41,3L5,4.41L10.59,10L5,15.59L6.41,17L11,12.41V20H12L17.71,14.29L13.41,10L17.71,5.71M15,24H17V22H15M7,24H9V22H7M11,24H13V22H11V24Z",
        })
    ]))
}
