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
            d: "M23 18.3V21.8C23 22.4 22.4 23 21.7 23H16.2C15.6 23 15 22.4 15 21.7V18.2C15 17.6 15.6 17 16.2 17V15.5C16.2 14.1 17.6 13 19 13C20.4 13 21.8 14.1 21.8 15.5V17C22.4 17 23 17.6 23 18.3M20.5 15.5C20.5 14.7 19.8 14.2 19 14.2C18.2 14.2 17.5 14.7 17.5 15.5V17H20.5V15.5M20 4C21.1 4 22 4.9 22 6V12C21.42 11.56 20.74 11.25 20 11.1V6H15.95L14.12 4H9.88L8.05 6H4V18H13V20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H7.17L9 2H15L16.83 4H20M12 7C14.57 7 16.68 8.94 16.97 11.43C15.29 12.18 14.1 13.83 14 15.76C13.67 16.06 13.4 16.43 13.23 16.85C12.84 16.95 12.42 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7M12 15C13.65 15 15 13.65 15 12C15 10.35 13.65 9 12 9C10.35 9 9 10.35 9 12C9 13.65 10.35 15 12 15Z",
        })
    ]))
}
