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
            d: "M13 14H11V8H13V14M15 1H9V3H15V1M5 13C5 9.13 8.13 6 12 6C15.29 6 18.05 8.28 18.79 11.34L19.39 10.74C19.71 10.42 20.1 10.21 20.5 10.1C20.18 9.11 19.67 8.19 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13C3 17.63 6.5 21.44 11 21.94V19.92C7.61 19.43 5 16.53 5 13M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47Z",
        })
    ]))
}
