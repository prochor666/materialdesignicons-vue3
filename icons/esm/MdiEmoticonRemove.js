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
            d: "M16.88 15.46L19 17.59L21.12 15.47L22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.46 21.12L17.59 19L15.47 16.88L16.88 15.46M12 2C17.5 2 22 6.5 22 12C22 12.59 21.95 13.16 21.85 13.72C21 13.26 20.03 13 19 13C17.77 13 16.63 13.37 15.68 14H6.89C7.69 16.04 9.67 17.5 12 17.5C12.42 17.5 12.83 17.45 13.23 17.36C13.08 17.88 13 18.43 13 19C13 20.03 13.26 21 13.72 21.85C13.16 21.95 12.59 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.47 2 12 2M15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8M8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8Z",
        })
    ]))
}
