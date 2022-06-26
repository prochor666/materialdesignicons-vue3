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
            d: "M17 20C17 21.11 16.11 22 15 22S13 21.11 13 20 13.9 18 15 18 17 18.9 17 20M5 18C3.9 18 3 18.9 3 20S3.9 22 5 22 7 21.11 7 20 6.11 18 5 18M22.11 21.46L2.39 1.73L1.11 3L9.28 11.17L5.71 15.35C5.16 16 5.62 17 6.47 17H14C14.32 17 14.62 16.92 14.89 16.78L20.84 22.73L22.11 21.46M16 12.8V6.38C16.58 5.7 16.93 5 17.61 5C18.38 5 19 5.66 19 6.5V7H21V6.5C21 4.56 19.5 3 17.61 3C16.95 3 16.44 3.2 16 3.5C15.32 3.91 14.88 4.59 14.47 5.07L11.62 8.42L16 12.8M12.32 5.1C12.59 4.78 12.91 4.38 13.3 4C12.14 3.45 10.9 3.15 9.65 3.09C9.39 3.08 9.12 3.08 8.86 3.09C8.12 3.12 7.38 3.26 6.66 3.46L10.47 7.27L12.32 5.1Z",
        })
    ]))
}
