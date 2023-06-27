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
            d: "M15.53 11.03L14.47 9.97L8.47 15.97L9.53 17.03L15.53 11.03M10.63 10.37C10.4 10.13 10.08 10 9.75 10C9.42 10 9.1 10.13 8.87 10.37C8.63 10.6 8.5 10.92 8.5 11.25C8.5 11.58 8.63 11.9 8.87 12.13C9.1 12.37 9.42 12.5 9.75 12.5C10.08 12.5 10.4 12.37 10.63 12.13C10.87 11.9 11 11.58 11 11.25C11 10.92 10.87 10.6 10.63 10.37M15.13 14.87C14.9 14.63 14.58 14.5 14.25 14.5C13.92 14.5 13.6 14.63 13.37 14.87C13.13 15.1 13 15.42 13 15.75C13 16.08 13.13 16.4 13.37 16.63C13.6 16.87 13.92 17 14.25 17C14.58 17 14.9 16.87 15.13 16.63C15.37 16.4 15.5 16.08 15.5 15.75C15.5 15.42 15.37 15.1 15.13 14.87M19 12V20H5V12H2L12 3L22 12H19M17 10.2L12 5.7L7 10.2V18H17V10.2Z",
        })
    ]))
}
