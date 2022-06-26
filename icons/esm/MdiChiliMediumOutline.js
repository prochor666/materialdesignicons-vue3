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
            d: "M8.43 7.32L6.86 6.42C7.38 5.6 8.11 5 8.94 4.7C8.81 4.3 8.45 4 8 4V2C8.77 2 9.47 2.29 10 2.77V4C10.45 4 10.81 4.3 10.94 4.7C9.83 5.08 8.93 6.05 8.43 7.32M8 11C8 10.23 8.23 9.5 8.6 8.91L7.26 8.15C6.5 8.44 6 9.16 6 10V11C6 18.05 10.9 20.8 13.03 21.66C10.41 19.62 8 16.2 8 11M18 10V22C18 22 10 20 10 11V10C10 9.27 10.4 8.63 11 8.28L12.25 9L14 8L15.75 9L17 8.28C17.6 8.63 18 9.27 18 10M16 18.87V11.45L14 10.3L12 11.43C12.17 15.44 14.23 17.69 16 18.87M10.73 6.63L12.25 7.5L14 6.5L15.75 7.5L17.27 6.63C16.72 5.66 15.91 4.94 14.97 4.65C14.79 3.16 13.54 2 12 2V4C12.44 4 12.8 4.29 12.94 4.69C12.03 5 11.26 5.7 10.73 6.63Z",
        })
    ]))
}
