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
            d: "M12 6.5C10.62 6.5 9.5 7.62 9.5 9S10.62 11.5 12 11.5 14.5 10.38 14.5 9 13.38 6.5 12 6.5M16 17V19H18V23H20V19H22V17H16M11.69 13.47L3.67 22L2.4 20.73L9.75 12.87C10.33 13.21 11 13.42 11.69 13.47M19 9C19 10.26 18.62 11.65 17.93 12.9C17 14.55 15.95 15.38 15.08 16.05C14.27 16.67 13.69 17.12 13.37 18.1C12.77 19.92 12 20.94 10.64 21.65C10.13 21.88 9.57 22 9 22C7.81 22 6.75 21.47 6 20.65L7.43 19.22C7.79 19.69 8.36 20 9 20C9.29 20 9.56 19.94 9.76 19.85C10.47 19.5 10.97 18.97 11.47 17.47C12 15.91 12.94 15.18 13.86 14.47C14.65 13.86 15.47 13.23 16.18 11.94C16.71 11 17 9.93 17 9C17 6.2 14.8 4 12 4S7 6.2 7 9H5C5 5.07 8.07 2 12 2S19 5.07 19 9M18.37 4.12L20.72 1.73L22 3L19.32 5.72C19.06 5.15 18.74 4.61 18.37 4.12Z",
        })
    ]))
}
