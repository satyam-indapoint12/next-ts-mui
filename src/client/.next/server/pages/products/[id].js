"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 2546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./stores/home-actions.ts + 4 modules
var home_actions = __webpack_require__(8626);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./shared/cards/index.jsx + 1 modules
var cards = __webpack_require__(1207);
// EXTERNAL MODULE: ./utilities/helper.ts
var helper = __webpack_require__(6076);
;// CONCATENATED MODULE: ./components/home/product.tsx
"use client";





const Home = (props)=>{
    const { title , body , price =200  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
        sx: {
            py: 8
        },
        maxWidth: "md",
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
            container: true,
            spacing: 4,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(cards/* default */.Z, {
                title: title,
                description: body,
                image: "",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: (0,helper/* convertIstToUtc */.He)(new Date(), "DD MMM YYYY hh:mm")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: (0,helper/* priceWithCurrency */.rE)(price, "PKR")
                    })
                ]
            }, title)
        })
    });
};
/* harmony default export */ const product = (Home);

;// CONCATENATED MODULE: ./pages/products/[id].tsx




const ProductContainer = (props)=>{
    const { result , error  } = props;
    if (error) {
        return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: "404"
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(product, {
        ...result
    });
};
async function getServerSideProps({ params  }) {
    const { result  } = await (0,home_actions/* getProductDetail */.jn)(params.id);
    const metaData = {
        title: result?.title || "",
        description: result?.body || "",
        image: result?.image || "",
        url: result?.Url || ""
    };
    return {
        props: {
            id: params.id,
            result,
            metaData
        }
    };
}
/* harmony default export */ const _id_ = (ProductContainer);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 8362:
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 5671:
/***/ ((module) => {

module.exports = require("zustand");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [322,501,577,442], () => (__webpack_exec__(2546)));
module.exports = __webpack_exports__;

})();