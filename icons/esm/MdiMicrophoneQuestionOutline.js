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
            d: "M14.3 11C14.3 14 11.76 16.1 9 16.1S3.7 14 3.7 11H2C2 14.41 4.72 17.23 8 17.72V21H10V17.72C13.28 17.23 16 14.41 16 11M7.8 4.9C7.8 4.24 8.34 3.7 9 3.7S10.2 4.24 10.2 4.9L10.19 11.1C10.19 11.76 9.66 12.3 9 12.3S7.8 11.76 7.8 11.1M9 14C10.66 14 12 12.66 12 11V5C12 3.34 10.66 2 9 2S6 3.34 6 5V11C6 12.66 7.34 14 9 14M20.5 14.5V16H19V14.5H20.5M18.5 9.5H17V9C17 7.34 18.34 6 20 6S23 7.34 23 9C23 9.97 22.5 10.88 21.71 11.41L21.41 11.6C20.84 12 20.5 12.61 20.5 13.3V13.5H19V13.3C19 12.11 19.6 11 20.59 10.35L20.88 10.16C21.27 9.9 21.5 9.47 21.5 9C21.5 8.17 20.83 7.5 20 7.5S18.5 8.17 18.5 9V9.5Z",
        })
    ]))
}
