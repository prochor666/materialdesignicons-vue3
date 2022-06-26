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
            d: "M21.7 11.29H21.71L12.71 2.29C12.5 2.1 12.26 2 12 2C11.74 2 11.5 2.1 11.29 2.29L2.29 11.29H2.3C1.91 11.68 1.91 12.32 2.3 12.71H2.29L11.29 21.71C11.5 21.9 11.74 22 12 22C12.26 22 12.5 21.9 12.71 21.71L21.71 12.71H21.7C22.09 12.32 22.09 11.68 21.7 11.29M13 8.28V5.41L17.3 9.71L13 8.28M11 8.28L6.7 9.71L11 5.41V8.28M12 10.05L17.84 12L12 13.95L6.16 12L12 10.05M11 15.72V18.59L6.7 14.29L11 15.72M13 15.72L17.3 14.29L13 18.59V15.72Z",
        })
    ]))
}
