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
            d: "M12 .69L8.69 4H4V8.69L.69 12L4 15.31V20H8.69L12 23.31L13 22.31V17.83L16.24 21.07L17.66 19.66L13 15V13H15L19.66 17.66L21.07 16.24L17.83 13H22V11H17.83L21.07 7.76L19.66 6.34L15 11H13V9L17.66 4.34L16.24 2.93L13 6.17V1.69M11 6.09V8.13C9.24 8.59 8 10.18 8 12C8 13.82 9.24 15.41 11 15.87V17.91C8.12 17.42 6 14.93 6 12C6 9.07 8.11 6.57 11 6.09Z",
        })
    ]))
}
