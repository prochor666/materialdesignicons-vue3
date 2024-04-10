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
            d: "M14 14V10C14 9.7 13.8 9.5 13.5 9.5H12.5V14.5H13.5C13.8 14.5 14 14.3 14 14M17 7V10.5L21 6.5V17.5L17 13.5V17C17 17.6 16.6 18 16 18H4C3.4 18 3 17.6 3 17V7C3 6.4 3.4 6 4 6H16C16.6 6 17 6.4 17 7M14 16C14.8 16 15.5 15.3 15.5 14.5V9.5C15.5 8.7 14.8 8 14 8H11V16H14M9 8H5.5C4.67 8 4 8.67 4 9.5V11C4 11.83 4.67 12.5 5.5 12.5H7.5V14.5H4V16H7.5C8.33 16 9 15.33 9 14.5V12.5C9 11.67 8.33 11 7.5 11H5.5V9.5H9V8Z",
        })
    ]))
}
