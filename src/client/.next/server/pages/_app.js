(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: ./assets/theme/theme.ts
"use client";

const lightColors = {
    dominant: "#FFFDFA",
    dominant50: "#F1EFEC",
    accent: "#110F0C",
    accent50: "#31302E",
    compliment: "#BCA987"
};
const typography = {
    fontFamily: [
        "Roboto",
        "sans-serif"
    ].join(",")
};
const lightTheme = (0,styles_namespaceObject.createTheme)({
    typography,
    colors: lightColors,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: lightColors.accent50,
                    backgroundColor: lightColors.dominant,
                    position: "relative"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./assets/theme/index.tsx
"use client";






function ThemeWrapper({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: lightTheme,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("meta", {
                    name: "theme-color",
                    content: lightTheme.colors.dominant
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((CssBaseline_default()), {}),
            children
        ]
    });
}
/* harmony default export */ const theme = (ThemeWrapper);

// EXTERNAL MODULE: ./assets/css/app.css
var app = __webpack_require__(8766);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: external "@mui/material/ToggleButton"
const ToggleButton_namespaceObject = require("@mui/material/ToggleButton");
var ToggleButton_default = /*#__PURE__*/__webpack_require__.n(ToggleButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ToggleButtonGroup"
const ToggleButtonGroup_namespaceObject = require("@mui/material/ToggleButtonGroup");
var ToggleButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ToggleButtonGroup_namespaceObject);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./shared/headers/styled.tsx



const HeaderStyled = styled_default()(material_.Box)`
  height: 100px;
  padding: 0 min(5%, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = (styled_default()).a`
  font-size: 2.5rem;
  font-weight: bolder;
  cursor: pointer;
  display: block;

  ${({ theme  })=> true && react_namespaceObject.css`
      color: ${theme.colors.dominant50};
      text-shadow: 0 0 5px ${theme.colors.accent50},
        0 0 10px ${theme.colors.accent50}, 0 0 15px ${theme.colors.accent50},
        0 0 20px ${theme.colors.accent50}, 0 0 30px ${theme.colors.accent50},
        0 0 40px ${theme.colors.accent50}, 0 0 55px ${theme.colors.accent50},
        0 0 75px ${theme.colors.accent50};
    `}
`;
const NavBar = (styled_default()).ul`
  display: flex;
  align-items: center;
  position: relative;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    transition: all 2s ease-in-out;
    &.active-link {
      a {
        color: ${({ theme  })=>theme.colors.compliment};
      }
      .underline {
        width: 100%;
        height: 1px;
        background: ${({ theme  })=>theme.colors.compliment};
      }
    }
  }

  ${({ theme  })=>theme.breakpoints.down("sm")} {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: ${({ theme  })=>theme.colors.dominant};
    left: 0;
    top: 0;
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    flex-direction: column;
    padding-inline-start: 0px;
    height: 100vh;
    padding-top: 50px;
    transform: translatex(-100%);
    transition: all 0.3s ease-in-out;

    ${({ open  })=>open && react_namespaceObject.css`
        transform: translatex(0%);
      `}
    .link {
      margin-left: 0px;
      width: 100%;
      padding: 15px;
      margin-top: 20px;
      &:first-of-type {
        margin-top: 30px;
      }
      .underline {
        display: none;
      }
      a {
        font-size: 20px;
        font-style: bolder;
        text-decoration: none;
      }
      &.active-link {
        a {
          color: ${({ theme  })=>theme.colors.compliment};
        }
      }
    }
  }
`;

;// CONCATENATED MODULE: ./shared/headers/index.tsx
"use client";










function CustomLink({ children , href , ...props }) {
    const router = useRouter();
    return /*#__PURE__*/ _jsxs("div", {
        className: router.pathname === href ? "active-link link" : "link",
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: href,
                ...props,
                children: children
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "underline"
            })
        ]
    });
}
function Switcher() {
    const locales = {
        en: {
            title: "English"
        },
        es: {
            title: "Espa\xf1ol"
        }
    };
    const { i18n  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx(HeaderStyled, {
        children: /*#__PURE__*/ jsx_runtime.jsx((ToggleButtonGroup_default()), {
            exclusive: true,
            onChange: async (event)=>{
                await i18n.changeLanguage(event.target.value);
            },
            "aria-label": "Platform",
            children: Object.keys(locales).map((locale)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((ToggleButton_default()), {
                    value: locale,
                    children: [
                        " ",
                        locales[locale]?.title
                    ]
                }, locale))
        })
    });
}
const Header = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx(material_.AppBar, {
        position: "relative",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    variant: "h6",
                    color: "inherit",
                    noWrap: true,
                    children: t("header")
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Switcher, {})
            ]
        })
    });
};
/* harmony default export */ const headers = (Header);

;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: ./shared/footer.tsx
"use client";




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
        sx: {
            bgcolor: "background.paper",
            p: 6
        },
        component: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                variant: "h6",
                align: "center",
                gutterBottom: true,
                children: "Footer"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                variant: "subtitle1",
                align: "center",
                color: "text.secondary",
                component: "p",
                children: "Something here to give the footer a purpose!"
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: ./shared/panel.jsx
"use client";








const Panel = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        sx: {
            bgcolor: "background.paper",
            pt: 8,
            pb: 6
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Container_default()), {
            maxWidth: "sm",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    component: "h1",
                    variant: "h2",
                    align: "center",
                    color: "text.primary",
                    gutterBottom: true,
                    children: t("heading")
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                    variant: "h5",
                    align: "center",
                    color: "text.secondary",
                    paragraph: true,
                    children: t("panelHeading")
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                    sx: {
                        pt: 4
                    },
                    direction: "row",
                    spacing: 2,
                    justifyContent: "center"
                })
            ]
        })
    });
};
/* harmony default export */ const panel = (Panel);

;// CONCATENATED MODULE: ./shared/meta-tags.tsx



const defaultProps = {
    title: "Test App",
    description: "Test app for testing purpose here list of all sample test products",
    url: "http://localhost:3000",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const MetaTags = (props)=>{
    const { children , metaData =defaultProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: metaData?.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: metaData?.description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: metaData?.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: metaData?.description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: metaData?.image
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: metaData?.url
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const meta_tags = (MetaTags);

;// CONCATENATED MODULE: ./shared/layout.tsx
"use client";







const Layout = (props)=>{
    const { metaData  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(meta_tags, {
        metaData: metaData,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(headers, {}),
            /*#__PURE__*/ jsx_runtime.jsx(panel, {}),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
                sx: {
                    marginTop: {
                        xs: 4,
                        md: 10
                    },
                    marginBottom: 4
                },
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp(props) {
    const { Component , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime.jsx(theme, {
        children: /*#__PURE__*/ jsx_runtime.jsx(layout, {
            metaData: pageProps.metaData,
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 8766:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [322,97], () => (__webpack_exec__(9790)));
module.exports = __webpack_exports__;

})();