exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 644:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__mqdak",
	"footerText": "footer_footerText__A2Shi",
	"redHeart": "footer_redHeart__tDT33",
	"footerContainer": "footer_footerContainer__R7ZO8",
	"footerImageLeft": "footer_footerImageLeft__pM1c2",
	"footerImageRight": "footer_footerImageRight__5mosH"
};


/***/ }),

/***/ 9544:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "layout_header__SFlEE",
	"headerBox": "layout_headerBox__e2QEL",
	"titleBox": "layout_titleBox__OypFT",
	"headerText": "layout_headerText__oMTLN",
	"andText": "layout_andText__yAUvn",
	"navWrapper": "layout_navWrapper__gPtv5",
	"footerContainer": "layout_footerContainer__GD5Tn",
	"footerImage": "layout_footerImage__wSaUB",
	"stick": "layout_stick__fPWtH"
};


/***/ }),

/***/ 2705:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navigation_navbar__B_ICo",
	"menu": "navigation_menu__OytgT",
	"link": "navigation_link__IVJqm",
	"sticky": "navigation_sticky__iEHy1",
	"active": "navigation_active__R6mNT",
	"dropdown": "navigation_dropdown__MfINC"
};


/***/ }),

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout),
  y: () => (/* binding */ siteTitle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9544);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/navigation.module.css
var navigation_module = __webpack_require__(2705);
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);
;// CONCATENATED MODULE: ./components/navigation.js
// import Link from 'next/link';
// import styles from './navigation.module.css';
// import { useRouter } from 'next/router';
// const Navigation = () => { 
//   const router = useRouter();
//   const currentRoute = router.pathname;
//   return (
//     <div className={styles.sticky}>
//         <div className={styles.navbar}>
//           <ul className={styles.menu}>
//             <li>
//               <Link className={currentRoute === '/' ? styles.active : styles.link} href="/">Home</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/rsvp' ? styles.active : styles.link} href="/rsvp">RSVP</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/events' ? styles.active : styles.link} href="/events">Events</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/weddingparty' ? styles.active : styles.link} href="/weddingparty">Wedding Party</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/travel' ? styles.active : styles.link} href="/travel">Travel</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/guide' ? styles.active : styles.link} href="/guide">Guide</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/registry' ? styles.active : styles.link} href="/registry">Registry</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/FAQ' ? styles.active : styles.link} href="/FAQ">FAQ</Link>
//             </li>
//           </ul>
//         </div>
//     </div>
//   )
// }
// export default Navigation;





const Navigation = ()=>{
    const router = (0,router_.useRouter)();
    const currentRoute = router.pathname;
    const [dropdownOpen, setDropdownOpen] = (0,external_react_.useState)(false);
    const toggleDropdown = ()=>{
        setDropdownOpen(!dropdownOpen);
    };
    const isActive = (route)=>{
        return currentRoute === route ? (navigation_module_default()).active : "";
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (navigation_module_default()).sticky,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: (navigation_module_default()).navbar,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: (navigation_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (navigation_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            className: isActive("/"),
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        onMouseEnter: toggleDropdown,
                        onMouseLeave: toggleDropdown,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: `${(navigation_module_default()).link} ${dropdownOpen ? (navigation_module_default()).active : ""}`,
                                children: "Dropdown"
                            }),
                            dropdownOpen && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: `${(navigation_module_default()).menu} ${(navigation_module_default()).dropdown}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: (navigation_module_default()).link,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: isActive("/rsvp"),
                                            href: "/rsvp",
                                            children: "RSVP"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: (navigation_module_default()).link,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: isActive("/rsvp"),
                                            href: "/rsvp",
                                            children: "RSVP"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: (navigation_module_default()).link,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: isActive("/rsvp"),
                                            href: "/rsvp",
                                            children: "RSVP"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: (navigation_module_default()).link,
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: isActive("/rsvp"),
                                            href: "/rsvp",
                                            children: "RSVP"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation = (Navigation);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(644);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer.js
// components/footer.js



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (footer_module_default()).footerContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "/images/leavesleft.png",
                        alt: "Image Left",
                        className: (footer_module_default()).footerImageLeft
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "/images/leavesright.png",
                        alt: "Image Right",
                        className: (footer_module_default()).footerImageRight
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: (footer_module_default()).footerText,
                class: "py-5",
                children: [
                    "Crafted by Scott with lots of \xa0",
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: `fa fa-heart fa-beat ${(footer_module_default()).redHeart}`
                    }),
                    "\xa0 for Maddy"
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.js





const siteTitle = "Wedding";
function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (layout_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "og:title",
                        content: siteTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:card",
                        x: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(navigation, {
                className: (layout_module_default()).stick
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer, {})
        ]
    });
}
function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: (layout_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: (layout_module_default()).headerBox,
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (layout_module_default()).titleBox,
                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    className: (layout_module_default()).headerText,
                    children: "Madelyn & Scott"
                })
            })
        })
    });
}


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_mapStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9135);
/* harmony import */ var _styles_mapStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mapStyles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4595);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__);




function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9135:
/***/ (() => {



/***/ })

};
;