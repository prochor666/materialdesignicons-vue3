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
            d: "M12 4.21C13.24 4.72 14.65 5 16 5C17.05 5 18.1 4.84 19.08 4.54C18.5 5.5 18 6.71 18 8C18 9.32 18.54 10.93 19.1 12.63C19.5 13.83 20 15.33 20 16C20 17.03 16.47 19 12 19.96C7.54 19 4 17.03 4 16C4 15.33 4.5 13.83 4.9 12.63C5.46 10.93 6 9.32 6 8C6 6.71 5.5 5.5 4.92 4.54C5.9 4.84 6.96 5 8 5C9.35 5 10.76 4.72 12 4.21M20 2C18.85 2.64 17.4 3 16 3C14.6 3 13.14 2.63 12 2C10.86 2.63 9.4 3 8 3C6.6 3 5.15 2.64 4 2L2 4C2 4 4 6 4 8S2 14 2 16C2 20 12 22 12 22S22 20 22 16C22 14 20 10 20 8S22 4 22 4L20 2M15.05 16.45L11.97 14.59L8.9 16.45L9.72 12.95L7 10.61L10.58 10.3L11.97 7L13.37 10.29L16.95 10.6L14.23 12.94L15.05 16.45",
        })
    ]))
}
