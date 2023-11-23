"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 1207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cards)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./shared/progressive-image.tsx


const ProgressiveImage = (props)=>{
    const { src , alt , width , height  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "relative w-[500px] h-[300px]",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: src,
            layout: "responsive",
            width: width || 200,
            height: height || 300,
            sizes: "100vw",
            style: {
                objectFit: "cover"
            },
            alt: alt,
            loading: "eager"
        })
    });
};
/* harmony default export */ const progressive_image = (ProgressiveImage);

;// CONCATENATED MODULE: ./shared/cards/index.jsx
"use client";








const CardView = ({ title , image , description , children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((Grid_default()), {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
            sx: {
                height: "100%",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(progressive_image, {
                    alt: title,
                    width: 200,
                    height: 300,
                    placeholder: title,
                    src: image
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((CardContent_default()), {
                    sx: {
                        flexGrow: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            gutterBottom: true,
                            variant: "h5",
                            component: "h2",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx((CardActions_default()), {
                    children: children
                })
            ]
        })
    }, title);
};
/* harmony default export */ const cards = (CardView);


/***/ }),

/***/ 8626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dg": () => (/* binding */ getAllProducts),
  "jn": () => (/* binding */ getProductDetail)
});

// UNUSED EXPORTS: getProduct

;// CONCATENATED MODULE: ./utilities/api-routes.ts
const api_routes_ROUTES = {
    getAllProducts: ()=>"/posts",
    getProduct: (slug)=>`/posts/${slug}`
};
/* harmony default export */ const api_routes = (api_routes_ROUTES);

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(8684);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./shared/error-messages.jsx
"use client";



const ErrorMessages = ({ message  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: t(`${message}`)
    });
};
/* harmony default export */ const error_messages = (ErrorMessages);

;// CONCATENATED MODULE: ./enums/index.js
const ResponseStatus = {
    400: 400,
    500: 500,
    404: 404
};

;// CONCATENATED MODULE: ./services/api.js






const fetcher = async (url, showError = true, method = "GET", body)=>{
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(body)
    };
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    let response = null;
    try {
        response = await fetch(baseUrl + url, options);
        const json = await response.json();
        if (response.status === ResponseStatus[404]) {
            throw new Error((0,server_.renderToString)(/*#__PURE__*/ jsx_runtime.jsx(error_messages, {
                message: "notfound"
            })));
        }
        if (response.status === ResponseStatus[400]) {
            throw new Error((0,server_.renderToString)(/*#__PURE__*/ jsx_runtime.jsx(error_messages, {
                message: "badRequest"
            })));
        }
        if (response.status === ResponseStatus[500]) {
            throw new Error((0,server_.renderToString)(/*#__PURE__*/ jsx_runtime.jsx(error_messages, {
                message: "serverError"
            })));
        }
        if (response.ok) {
            return {
                data: json
            };
        }
        showError && external_react_toastify_.toast.error(json.messages);
        throw new Error(json.messages);
    } catch (e) {
        showError && external_react_toastify_.toast.error(e.message || e.stack);
        throw new Error(e.message || e.stack);
    }
};
const api_api = {
    get (url, showError = true) {
        return fetcher(url, showError);
    },
    post (url, data, showError = true) {
        return fetcher(url, showError, "POST", data);
    }
};
/* harmony default export */ const services_api = (api_api);

// EXTERNAL MODULE: ./stores/home-store.ts
var home_store = __webpack_require__(8409);
;// CONCATENATED MODULE: ./stores/home-actions.ts



const { setState  } = home_store/* useHomeStore */.ok;
const getAllProducts = async ()=>{
    setState({
        loading: true
    });
    try {
        const { data: result  } = await services_api.get(api_routes.getAllProducts());
        if (result.length) {
            return setState({
                products: result,
                loading: false
            });
        }
    } catch (e) {
        return setState({
            products: [],
            loading: false,
            error: e.messages
        });
    }
};
const getProductDetail = async (slug)=>{
    try {
        const { data: result  } = await services_api.get(api_routes.getProduct(slug));
        return {
            result: result,
            error: null
        };
    } catch (e) {
        return {
            result: null,
            error: e.message
        };
    }
};
const getProduct = async (slug)=>{
    setState({
        loading: true
    });
    try {
        const { data: result  } = await api.get(ROUTES.getProduct(slug));
        if (result) {
            return setState({
                product: result,
                loading: false
            });
        }
    } catch (e) {
        return setState({
            product: {},
            loading: false,
            error: e.messages
        });
    }
};


/***/ }),

/***/ 8409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BX": () => (/* binding */ useAllProducts),
/* harmony export */   "ok": () => (/* binding */ useHomeStore)
/* harmony export */ });
/* unused harmony exports INTIAL_STATE, useProduct */
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5671);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const INTIAL_STATE = {
    products: [],
    product: {},
    loading: false,
    error: null
};
const useHomeStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(()=>({
        ...INTIAL_STATE
    }));
const useAllProducts = ()=>{
    return useHomeStore((s)=>({
            loading: s.loading,
            products: s.products,
            error: s.error
        }));
};
const useProduct = ()=>{
    return useHomeStore((s)=>({
            loading: s.loading,
            product: s.product,
            error: s.error
        }));
};


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "He": () => (/* binding */ convertIstToUtc),
/* harmony export */   "rE": () => (/* binding */ priceWithCurrency)
/* harmony export */ });
/* unused harmony export convertUtcToIst */
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1934);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_1__);


// export const currentTime = (currentTiming) => {
//     //const zone = "America/Mexico_city"  // set Mexico timezone
//     const zone = "Asia/Calcutta"          // set India timezone
//     let currentTime = moment().tz(zone).format('HH:mm')
//     currentTime = moment(currentTime,'HH:mm')
// }
const convertUtcToIst = (utcDateTime, format = "YYYY-MM-DD HH:mm:ss")=>{
    return moment.utc(utcDateTime).utcOffset("+05:30").format(format);
};
// Function to convert IST to UTC
const convertIstToUtc = (istDateTime, format = "YYYY-MM-DD HH:mm:ss")=>{
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(istDateTime).utc().format(format);
};
const priceWithCurrency = (price, symbol = "USD", prefix = true)=>{
    // For check symbol use console.log(currencyToSymbolMap)
    return prefix ? `${currency_symbol_map__WEBPACK_IMPORTED_MODULE_1___default()(symbol)}${price}` : `${price}${currency_symbol_map__WEBPACK_IMPORTED_MODULE_1___default()(symbol)}`;
};


/***/ })

};
;