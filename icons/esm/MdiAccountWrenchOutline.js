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
            d: "M22.9 21.2L18.8 17.1C19.2 16.1 19 14.8 18.1 14C17.2 13.1 15.9 12.9 14.8 13.4L16.7 15.3L15.3 16.7L13.3 14.7C12.8 15.8 13 17.1 13.9 18.1C14.8 19 16 19.2 17 18.8L21.1 22.9C21.3 23.1 21.6 23.1 21.7 22.9L22.7 21.9C23 21.6 23 21.3 22.9 21.2M10 12C12.2 12 14 10.2 14 8S12.2 4 10 4 6 5.8 6 8 7.8 12 10 12M10 6C11.1 6 12 6.9 12 8S11.1 10 10 10 8 9.1 8 8 8.9 6 10 6M13 20H2V17C2 14.3 7.3 13 10 13C10.5 13 11.2 13.1 11.9 13.2C11.5 13.7 11.3 14.3 11.1 15C10.7 15 10.4 14.9 10 14.9C7 14.9 3.9 16.4 3.9 17V18.1H11.5C11.8 18.9 12.4 19.5 13 20Z",
        })
    ]))
}
