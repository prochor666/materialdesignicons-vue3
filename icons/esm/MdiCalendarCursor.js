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
            d: "M22.86 17.74C22.77 17.85 22.65 17.91 22.53 17.94L20.66 18.3L21.95 21.14C22.11 21.43 21.97 21.79 21.67 21.93L19.53 22.94C19.44 23 19.36 23 19.27 23C19.05 23 18.84 22.88 18.74 22.66L17.45 19.83L15.96 21.04C15.86 21.12 15.74 21.17 15.59 21.17C15.26 21.17 15 20.9 15 20.57V11.6C15 11.27 15.26 11 15.59 11C15.74 11 15.88 11.05 16 11.13L22.77 16.89C23.04 17.12 23.07 17.5 22.86 17.74M12 15V10H7V15H12M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H13V19H5V8H19V11.06L21 12.76V5C21 3.9 20.1 3 19 3Z",
        })
    ]))
}
