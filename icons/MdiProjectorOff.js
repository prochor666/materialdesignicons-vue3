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
            d: "M16 9C14.97 9 14.1 9.79 14 10.82L16.18 13C18.72 12.76 18.55 9 16 9M15 14.35H15L18.95 18.31V18.3M7.64 7L12.65 12V12L7.65 7M20 7H19.15C17.26 5.67 14.73 5.67 12.84 7H10.19L12.8 9.61C13.78 7.34 16.73 6.78 18.5 8.53C20.22 10.27 19.66 13.22 17.39 14.2L20.18 17C21.21 16.9 22 16.04 22 15V9C22 7.9 21.1 7 20 7M16 9C14.97 9 14.1 9.79 14 10.82L16.18 13C18.72 12.76 18.55 9 16 9M16 9C14.97 9 14.1 9.79 14 10.82L16.18 13C18.72 12.76 18.55 9 16 9M22.25 21.61L2.53 1.89L1.26 3.16L5.1 7H4C2.9 7 2 7.9 2 9V15C2 16.11 2.9 17 4 17H5V18C5 18.55 5.45 19 6 19H8C8.55 19 9 18.55 9 18V17H15V18C15 18.55 15.45 19 16 19H17.1L21 22.89L22.26 21.61M8 14H4V13H8M8 12H4V11H8M8 10H4V9H7.1L8 9.9M2.54 1.89L7.64 7L2.53 1.89M7.65 7L12.65 12V12L7.64 7M18.95 18.3V18.31L15 14.35H15M7.64 7L2.53 1.89H2.54M12.65 12V12L7.64 7H7.65M18.95 18.3V18.31L15 14.35H15",
        })
    ]))
}
