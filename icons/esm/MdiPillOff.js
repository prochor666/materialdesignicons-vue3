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
            d: "M22.11 21.46L2.39 1.73L1.11 3L6.81 8.7L4.22 11.29C1.88 13.64 1.88 17.43 4.22 19.78C6.56 22.12 10.36 22.12 12.71 19.78L15.3 17.19L20.84 22.73L22.11 21.46M4.6 16.57C4.24 15.24 4.59 13.75 5.64 12.71L8.23 10.12L9.64 11.53L4.6 16.57M10.78 7.58L9.36 6.16L11.29 4.22C13.64 1.88 17.43 1.88 19.78 4.22C22.12 6.56 22.12 10.36 19.78 12.71L17.85 14.65L16.43 13.23L18.36 11.29C19.93 9.73 19.93 7.2 18.36 5.64C16.8 4.07 14.27 4.07 12.71 5.64L10.78 7.58Z",
        })
    ]))
}
