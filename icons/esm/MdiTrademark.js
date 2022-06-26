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
            d: "M9.8,8.44H6.87V16H4.89V8.44H2V7H9.8V8.44M13.5,7L15.96,13.5L18.41,7H21V16H19V13.5L19.22,9.24L16.63,16H15.28L12.7,9.25L12.9,13.5V16H10.93V7H13.5Z",
        })
    ]))
}
