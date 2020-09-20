'use strict';Object.defineProperty(exports,'__esModule',{value:true});var tiptap=require('tiptap'),tiptapExtensions=require('tiptap-extensions'),prosemirrorToHtmlJs=require('prosemirror-to-html-js');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
var script = {
  components: {
    EditorMenuBar: tiptap.EditorMenuBar,
    EditorContent: tiptap.EditorContent
  },
  props: {
    value: Object
  },
  data: function data() {
    var _this = this;

    return {
      editor: new tiptap.Editor({
        extensions: [new tiptapExtensions.Bold(), new tiptapExtensions.Italic(), new tiptapExtensions.Blockquote(), new tiptapExtensions.Heading({
          levels: [1, 2, 3]
        })],
        onUpdate: function onUpdate(_ref) {
          var getJSON = _ref.getJSON;

          _this.$emit("input", getJSON());
        }
      })
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function handler(value) {
        this.editor.setContent(value);
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "editor"
  }, [_c('editor-menu-bar', {
    attrs: {
      "editor": _vm.editor
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var commands = ref.commands;
        var isActive = ref.isActive;
        return [_c('div', {
          staticClass: "commands"
        }, [_c('button', {
          class: {
            'is-active': isActive.heading({
              level: 1
            })
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return commands.heading({
                level: 1
              });
            }
          }
        }, [_vm._t("h1", [_c('span', [_vm._v("H1")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.heading({
              level: 2
            })
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return commands.heading({
                level: 2
              });
            }
          }
        }, [_vm._t("h2", [_c('span', [_vm._v("H2")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.heading({
              level: 3
            })
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return commands.heading({
                level: 3
              });
            }
          }
        }, [_vm._t("h3", [_c('span', [_vm._v("H3")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.bold()
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": commands.bold
          }
        }, [_vm._t("bold", [_c('b', [_vm._v("B")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.italic()
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": commands.italic
          }
        }, [_vm._t("italic", [_c('i', [_vm._v("I")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.blockquote()
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": commands.blockquote
          }
        }, [_vm._t("blockquote", [_c('span', [_vm._v("Q")])])], 2)])];
      }
    }], null, true)
  }), _vm._ssrNode(" "), _c('editor-content', {
    staticClass: "content",
    attrs: {
      "editor": _vm.editor
    }
  })], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-185e30e0";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);//
var script$1 = {
  props: {
    value: Object
  },
  data: function data() {
    return {
      renderer: new prosemirrorToHtmlJs.Renderer(),
      result: String
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        this.result = this.renderer.render(value);
      }
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }, []);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-cf706a42";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Publisher: __vue_component__,Reader: __vue_component__$1});// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installPublisher(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.Publisher=__vue_component__;exports.Reader=__vue_component__$1;exports.default=plugin;