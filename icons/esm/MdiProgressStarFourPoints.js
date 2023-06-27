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
            d: "M13 4V2C17.66 2.5 21.33 6.19 21.85 10.85C22.45 16.34 18.5 21.28 13 21.88V19.88C16.64 19.43 19.5 16.56 19.96 12.92C20.5 8.53 17.39 4.54 13 4M5.67 4.2C7.19 2.95 9.04 2.18 11 2V4.06C9.57 4.26 8.22 4.84 7.1 5.74L5.67 4.2M2.05 11C2.24 9.04 3 7.19 4.26 5.67L5.69 7.1C4.8 8.23 4.24 9.58 4.05 11H2.05M4.27 18.33C3.03 16.81 2.26 14.96 2.06 13H4.06C4.24 14.42 4.81 15.77 5.69 16.9L4.27 18.33M5.67 19.74L7.06 18.37H7.1C8.23 19.25 9.58 19.82 11 20V22C9.04 21.79 7.18 21 5.67 19.74M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z",
        })
    ]))
}
