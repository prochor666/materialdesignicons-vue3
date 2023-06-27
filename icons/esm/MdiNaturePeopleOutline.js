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
            d: "M16 20V16.12C19.47 15.71 22.17 12.76 22.17 9.17C22.17 5.3 19.04 2.17 15.17 2.17C13.31 2.17 11.53 2.91 10.22 4.22C8.91 5.53 8.17 7.31 8.17 9.17C8.17 9.95 8.3 10.69 8.53 11.38C8.64 11.71 8.77 12.03 8.93 12.33C9.91 14.27 11.78 15.68 14 16.06V20H6V17H7V12.95C7 12.72 6.89 12.5 6.74 12.33L6.71 12.29L6.66 12.25C6.5 12.09 6.25 12 6 12H3C2.76 12 2.5 12.09 2.34 12.25L2.29 12.29C2.11 12.5 2 12.74 2 13V17H3V22H19V20H16M15.08 14.22L14.33 14.09C11.96 13.69 10.17 11.64 10.17 9.17C10.17 7.84 10.7 6.57 11.63 5.63C12.57 4.7 13.85 4.17 15.17 4.17C17.93 4.17 20.17 6.41 20.17 9.17C20.17 11.73 18.24 13.84 15.77 14.13L15.08 14.21M4.5 11C5.33 11 6 10.33 6 9.5C6 8.67 5.33 8 4.5 8C3.67 8 3 8.67 3 9.5C3 10.33 3.67 11 4.5 11Z",
        })
    ]))
}
