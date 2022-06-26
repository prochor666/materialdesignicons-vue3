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
            d: "M11.5 3C14.1 3 16.5 4 18.4 5.6L21 3V10H14L16.6 7.4C15.2 6.2 13.4 5.5 11.5 5.5C8 5.5 4.9 7.8 3.9 11L1.5 10.2C2.9 6 6.8 3 11.5 3M13 12H19V14H15V16H17C18.1 16 19 16.9 19 18V20C19 21.1 18.1 22 17 22H13V20H17V18H13V12M5 12V18H9V22H11V12H9V16H7V12H5Z",
        })
    ]))
}
