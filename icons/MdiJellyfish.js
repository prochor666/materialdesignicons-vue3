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
            d: "M19.5,14.5C18.92,14.43 18.43,14.92 18.5,15.5C18.5,16.17 17.5,16.17 17.5,15.5V13.2L19.2,12.7C19.92,12.36 20.41,11.68 20.5,10.9C20.5,5.5 16.7,2 12,2C7.3,2 3.5,5.5 3.5,10.9C3.56,11.7 4.06,12.4 4.8,12.7L6.5,13.2V15.5A0.5,0.5 0 0,1 6,16A0.5,0.5 0 0,1 5.5,15.5C5.57,14.92 5.08,14.43 4.5,14.5C3.92,14.43 3.43,14.92 3.5,15.5C3.44,16.91 4.59,18.06 6,18C7.41,18.06 8.56,16.91 8.5,15.5V13.7H9.5V19.4C9.5,20.07 8.5,20.07 8.5,19.4C8.57,18.82 8.08,18.33 7.5,18.4C6.92,18.33 6.43,18.82 6.5,19.4C6.38,20.84 7.55,22.07 9,22C10.41,22.06 11.56,20.91 11.5,19.5V14H12.5V19.5C12.44,20.91 13.59,22.06 15,22C16.41,22.06 17.56,20.91 17.5,19.5C17.5,18.17 15.5,18.17 15.5,19.5C15.5,20.17 14.5,20.17 14.5,19.5V13.8H15.5V15.6C15.5,16.96 16.63,18.06 18,18C19.41,18.06 20.56,16.91 20.5,15.5C20.57,14.92 20.08,14.43 19.5,14.5M10.6,4.7C9.09,5.03 7.79,5.97 7,7.3C6.83,7.5 6.5,7.57 6.3,7.4C6.08,7.23 6.04,6.92 6.2,6.7C7.16,5.19 8.67,4.12 10.4,3.7C10.67,3.68 10.91,3.85 11,4.1C11.06,4.37 10.88,4.65 10.6,4.7Z",
        })
    ]))
}
