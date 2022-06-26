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
            d: "M12 2C14.65 2 17.2 3.05 19.07 4.93C20.95 6.8 22 9.35 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C9.35 22 6.8 20.95 4.93 19.07C3.05 17.2 2 14.65 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 9.88 19.16 7.84 17.66 6.34C16.16 4.84 14.12 4 12 4M13.5 14L15.55 16.84C14.55 17.57 13.33 18 12 18C10.67 18 9.45 17.57 8.45 16.84L10.5 14C10.94 14.32 11.45 14.5 12 14.5C12.55 14.5 13.06 14.32 13.5 14M12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11M9.32 6.63L10.88 9.76C10.06 10.17 9.5 11 9.5 12H6C6 9.65 7.35 7.62 9.32 6.63M14.68 6.63C16.65 7.62 18 9.65 18 12H14.5C14.5 11 13.94 10.17 13.12 9.76L14.68 6.63Z",
        })
    ]))
}
