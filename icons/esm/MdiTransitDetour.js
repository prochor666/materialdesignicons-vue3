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
            d: "M19 3A3 3 0 0 0 16.61 4.21A11.5 11.5 0 0 0 13.75 4L13.88 6A9.47 9.47 0 0 1 16 6.13A3 3 0 1 0 19 3M19 7A1 1 0 1 1 20 6A1 1 0 0 1 19 7M8.86 7.86L7.67 6.25A11.5 11.5 0 0 1 11.6 4.37L12.1 6.31A9.5 9.5 0 0 0 8.86 7.86M21 18A3 3 0 1 1 15.69 16.11A9.47 9.47 0 0 0 8.59 13.46C8.37 13.47 8.16 13.5 7.94 13.54A3 3 0 1 1 4.39 10.06A11.54 11.54 0 0 1 6.04 7.7L7.5 9.06A9.34 9.34 0 0 0 6.5 10.41A3.04 3.04 0 0 1 7.62 11.56C7.91 11.5 8.19 11.5 8.5 11.46A11.47 11.47 0 0 1 17.46 15.05A2.96 2.96 0 0 1 18 15A3 3 0 0 1 21 18Z",
        })
    ]))
}
