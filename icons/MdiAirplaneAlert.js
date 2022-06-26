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
            d: "M17.56 3.91C18.15 4.5 18.15 5.45 17.56 6.03L13.67 9.92L15.79 19.11L14.38 20.53L10.5 13.1L6.6 17L6.96 19.47L5.89 20.53L4.13 17.35L.944 15.58L2 14.5L4.5 14.87L8.37 11L.944 7.09L2.36 5.68L11.55 7.8L15.44 3.91C16 3.33 17 3.33 17.56 3.91M20 7V13H22V7H20M20 17H22V15H20V17Z",
        })
    ]))
}
