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
            d: "M9.41 20H6.5C5 20 3.68 19.5 2.61 18.43C1.54 17.38 1 16.09 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.96 10.08 4 9.43 5.25 9.15C5.67 7.62 6.5 6.38 7.75 5.43C9 4.5 10.42 4 12 4C13.95 4 15.61 4.68 16.96 6.04C18.32 7.39 19 9.05 19 11C20.15 11.13 21.11 11.63 21.86 12.5C22.5 13.23 22.86 14.06 22.96 15H18C17.07 13.77 15.61 13 14 13C11.2 13 9 15.2 9 18C9 18.72 9.15 19.39 9.41 20M23 17V19H21V21H19V19H16.8C16.4 20.2 15.3 21 14 21C12.3 21 11 19.7 11 18S12.3 15 14 15C15.3 15 16.4 15.8 16.8 17H23M15 18C15 17.5 14.6 17 14 17S13 17.5 13 18 13.4 19 14 19 15 18.5 15 18Z",
        })
    ]))
}
