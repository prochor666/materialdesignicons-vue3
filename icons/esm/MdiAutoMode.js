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
            d: "M19.8 5.67C21.05 7.19 21.82 9.04 22 11H19.94C19.74 9.57 19.16 8.22 18.26 7.1L19.8 5.67M13 2.05C14.96 2.24 16.81 3 18.33 4.26L16.9 5.69C15.77 4.8 14.42 4.24 13 4.05V2.05M11 2.06C9.04 2.26 7.19 3.03 5.67 4.27L7.1 5.69C8.23 4.81 9.58 4.24 11 4.06V2.06M4.26 5.67L5.63 7.06V7.1C4.75 8.23 4.18 9.58 4 11H2C2.21 9.04 3 7.18 4.26 5.67M2 14V19L3.6 17.4C5.38 20.17 8.47 22 12 22C16.82 22 20.87 18.55 21.8 14H19.75C18.86 17.45 15.72 20 12 20C9.05 20 6.39 18.39 5 16L7 14H2M12 17L13.56 13.58L17 12L13.56 10.44L12 7L10.43 10.44L7 12L10.43 13.58L12 17Z",
        })
    ]))
}
