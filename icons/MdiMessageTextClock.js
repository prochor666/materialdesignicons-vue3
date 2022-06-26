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
            d: "M22 12.41V4C22 2.9 21.11 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H9.29C10.15 20.89 12.83 23 16 23C19.86 23 23 19.87 23 16C23 14.69 22.63 13.46 22 12.41M6 6H18V8H6V6M16 9C14.1 9 12.37 9.77 11.11 11H6V9H16M6 12H10.26C9.84 12.6 9.5 13.28 9.3 14H6V12M16 20.85C13.32 20.85 11.15 18.68 11.15 16S13.32 11.15 16 11.15C18.67 11.15 20.85 13.32 20.85 16S18.67 20.85 16 20.85M16.5 15.82L18.94 17.23L18.19 18.53L15 16.69V13H16.5V15.82Z",
        })
    ]))
}
