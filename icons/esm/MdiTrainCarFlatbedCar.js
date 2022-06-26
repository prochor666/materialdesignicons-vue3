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
            d: "M23 13V10C23 8.89 22.11 8 21 8H19L16 4H6L3 8C1.89 8 1 8.89 1 10V13H3C3 13.77 3.3 14.47 3.78 15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H20.22C20.7 14.47 21 13.77 21 13H23M19.5 13C19.5 13.83 18.83 14.5 18 14.5S16.5 13.83 16.5 13 17.17 11.5 18 11.5 19.5 12.17 19.5 13M12 5.5H15.25L17.14 8H12V5.5M15.78 15H8.22C8.7 14.47 9 13.77 9 13H15C15 13.77 15.3 14.47 15.78 15M6.75 5.5H10.5V8H4.86L6.75 5.5M6 11.5C6.83 11.5 7.5 12.17 7.5 13S6.83 14.5 6 14.5 4.5 13.83 4.5 13 5.17 11.5 6 11.5Z",
        })
    ]))
}
