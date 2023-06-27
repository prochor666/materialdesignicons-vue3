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
            d: "M7 7H17V9H7V7M12.69 15.81H13.2V15H7V17H10.38L10.71 16.65C11.18 16.13 11.92 15.81 12.69 15.81M9 19H5V5H19V13.56L21 14.45V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11.33L9 19M7 13H13.2V11.73C13.2 11.5 13.25 11.24 13.31 11H7V13M15.2 19.07L12.85 17.81H12.69C12.5 17.81 12.29 17.89 12.15 18.04L11.61 18.61L15.2 21.69C15.39 21.89 15.66 22 15.93 22H20.7C21.3 22 21.78 21.5 21.8 20.9V17.7C21.8 17.28 21.57 16.89 21.18 16.71L17.55 15.11L16.67 15V11.73C16.67 11.33 16.34 11 15.93 11C15.53 11 15.2 11.33 15.2 11.73V19.07Z",
        })
    ]))
}
