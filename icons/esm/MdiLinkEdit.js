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
            d: "M13 22V19.96L19.13 13.83L21.17 15.88L15.04 22H13M21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15M20.54 8.46C20.73 8.65 20.9 8.86 21.06 9.08L19.68 10.45C19.15 9.5 18.15 8.9 17 8.9H13V7H17C18.33 7 19.6 7.53 20.54 8.46M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C5.67 7 4.4 7.53 3.46 8.46C2.53 9.4 2 10.67 2 12C2 13.33 2.53 14.6 3.46 15.54C4.4 16.47 5.67 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12M8 13H16V11H8V13Z",
        })
    ]))
}
