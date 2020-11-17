'use strict';Object.defineProperty(exports,'__esModule',{value:true});var tiptap=require('tiptap'),tiptapExtensions=require('tiptap-extensions'),prosemirrorToHtmlJs=require('prosemirror-to-html-js');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var prosemirrorToHtmlJs__default=/*#__PURE__*/_interopDefaultLegacy(prosemirrorToHtmlJs);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
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
}var IFrame = /*#__PURE__*/function (_Node) {
  _inherits(IFrame, _Node);

  var _super = _createSuper(IFrame);

  function IFrame() {
    _classCallCheck(this, IFrame);

    return _super.apply(this, arguments);
  }

  _createClass(IFrame, [{
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type;
      return function (attrs) {
        return function (state, dispatch) {
          var selection = state.selection;
          var position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
          var node = type.create(attrs);
          var transaction = state.tr.insert(position, node);
          dispatch(transaction);
        };
      };
    }
  }, {
    key: "name",
    get: function get() {
      return "iframe";
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        attrs: {
          src: {
            default: null
          }
        },
        group: "block",
        selectable: false,
        parseDOM: [{
          tag: "iframe",
          getAttrs: function getAttrs(dom) {
            return {
              src: dom.getAttribute("src")
            };
          }
        }],
        toDOM: function toDOM(node) {
          return ["iframe", {
            src: node.attrs.src,
            frameborder: 0,
            allowfullscreen: "true",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          }];
        }
      };
    }
  }]);

  return IFrame;
}(tiptap.Node);//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      url: "",
      command: null,
      show: false
    };
  },
  methods: {
    showModal: function showModal(command) {
      this.command = command;
      this.show = true;
    },
    insert: function insert() {
      if (this.url && this.pattern.test(this.url)) {
        var data = {
          command: this.command,
          data: {
            src: this.url
          }
        };
        this.$emit("onConfirm", data);
        this.url = '';
        this.show = false;
      }
    }
  },
  props: {
    pattern: {
      type: RegExp,
      default: function _default() {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
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

  return _vm.show ? _c('div', {
    key: _vm.show,
    staticClass: "modal"
  }, [_vm._ssrNode("<input" + _vm._ssrAttr("value", _vm.url) + " class=\"input\"> "), _vm._ssrNode("<button" + _vm._ssrAttr("pattern", _vm.pattern) + " class=\"button\">", "</button>", [_vm._t("default", [_vm._v("Create element")])], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-efc5199a";
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
  components: {
    EditorMenuBar: tiptap.EditorMenuBar,
    EditorContent: tiptap.EditorContent,
    EditorMenuBubble: tiptap.EditorMenuBubble,
    URLModal: __vue_component__
  },
  props: {
    value: Object
  },
  data: function data() {
    var _this = this;

    return {
      editor: new tiptap.Editor({
        extensions: [new tiptapExtensions.Bold(), new tiptapExtensions.Italic(), new tiptapExtensions.Blockquote(), new tiptapExtensions.Heading({
          levels: [2, 3, 4]
        }), new tiptapExtensions.Link(), new tiptapExtensions.Image(), new IFrame()],
        onUpdate: function onUpdate(_ref) {
          var getJSON = _ref.getJSON;

          _this.$emit("input", getJSON());
        }
      }),
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    showLinkMenu: function showLinkMenu(attrs) {
      var _this2 = this;

      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(function () {
        _this2.$refs.linkInput.focus();
      });
    },
    hideLinkMenu: function hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl: function setLinkUrl(command, url) {
      command({
        href: url
      });
      this.hideLinkMenu();
    },
    imagePrompt: function imagePrompt(command) {
      var src = prompt("Enter the url of your image here");

      if (src !== null) {
        command({
          src: src
        });
      }
    },
    showVideoModal: function showVideoModal(command) {
      this.$refs.urlModal.showModal(command);
    },
    addCommand: function addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function handler(value) {
        var _this$editor$state$se = this.editor.state.selection,
            from = _this$editor$state$se.from,
            to = _this$editor$state$se.to;
        this.editor.setContent(value);
        this.editor.setSelection(from, to);
      }
    }
  }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "editor"
  }, [_c('editor-menu-bubble', {
    staticClass: "menububble",
    attrs: {
      "editor": _vm.editor
    },
    on: {
      "hide": _vm.hideLinkMenu
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var commands = ref.commands;
        var isActive = ref.isActive;
        var getMarkAttrs = ref.getMarkAttrs;
        var menu = ref.menu;
        return [_c('div', {
          staticClass: "menububble",
          class: {
            'is-active': menu.isActive
          },
          style: "left: " + menu.left + "px; bottom: " + menu.bottom + "px;"
        }, [_vm.linkMenuIsActive ? _c('form', {
          on: {
            "submit": function submit($event) {
              $event.preventDefault();
              return _vm.setLinkUrl(commands.link, _vm.linkUrl);
            }
          }
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.linkUrl,
            expression: "linkUrl"
          }],
          ref: "linkInput",
          staticClass: "input",
          attrs: {
            "type": "search",
            "placeholder": "https://"
          },
          domProps: {
            "value": _vm.linkUrl
          },
          on: {
            "keydown": function keydown($event) {
              if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
                return null;
              }

              return _vm.hideLinkMenu($event);
            },
            "input": function input($event) {
              if ($event.target.composing) {
                return;
              }

              _vm.linkUrl = $event.target.value;
            }
          }
        })]) : [_c('button', {
          staticClass: "button",
          class: {
            'is-active': isActive.link()
          },
          on: {
            "click": function click($event) {
              _vm.showLinkMenu(getMarkAttrs('link'));
            }
          }
        }, [_c('span', [_vm._t("link", [_vm._v("Add link")])], 2)])]], 2)];
      }
    }])
  }), _vm._ssrNode(" "), _c('editor-menu-bar', {
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
        }, [_c('span', {
          staticClass: "titles"
        }, [_c('button', {
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
        }, [_vm._t("title", [_c('span', [_vm._v("Title")])])], 2), _vm._v(" "), _c('button', {
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
        }, [_vm._t("subtitle", [_c('span', [_vm._v("Subtitle")])])], 2), _vm._v(" "), _c('button', {
          class: {
            'is-active': isActive.heading({
              level: 4
            })
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return commands.heading({
                level: 4
              });
            }
          }
        }, [_vm._t("sectionTitle", [_c('span', [_vm._v("Section Title")])])], 2)]), _vm._v(" "), _c('button', {
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
        }, [_vm._t("blockquote", [_c('span', [_vm._v("Q")])])], 2), _vm._v(" "), _c('button', {
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.imagePrompt(commands.image);
            }
          }
        }, [_vm._t("image", [_c('span', [_vm._v("IMG")])])], 2), _vm._v(" "), _c('span', [_c('button', {
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.showVideoModal(commands.iframe);
            }
          }
        }, [_vm._t("embed", [_c('span', [_vm._v("</>")])])], 2), _vm._v(" "), _c('URLModal', {
          ref: "urlModal",
          on: {
            "onConfirm": _vm.addCommand
          }
        }, [_vm._t("createEmbed")], 2)], 1)])];
      }
    }], null, true)
  }), _vm._ssrNode(" "), _c('editor-content', {
    staticClass: "content",
    attrs: {
      "editor": _vm.editor
    }
  })], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0cbd4c67_0", {
    source: ".editor[data-v-0cbd4c67]{position:relative}.menububble[data-v-0cbd4c67]{position:absolute;z-index:20;transform:translateX(-50%);visibility:hidden;opacity:0}.menububble.is-active[data-v-0cbd4c67]{opacity:1;visibility:visible}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-0cbd4c67";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-0cbd4c67";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var Node = prosemirrorToHtmlJs__default['default'].Node;

var IFrame$1 = /*#__PURE__*/function (_Node) {
  _inherits(IFrame, _Node);

  var _super = _createSuper(IFrame);

  function IFrame() {
    _classCallCheck(this, IFrame);

    return _super.apply(this, arguments);
  }

  _createClass(IFrame, [{
    key: "matching",
    value: function matching() {
      return this.node.type === "iframe";
    }
  }, {
    key: "tag",
    value: function tag() {
      return {
        tag: "iframe",
        attrs: {
          "src": this.node.attrs.src,
          "frameborder": this.node.attrs.frameborder,
          "allowfullscreen": this.node.attrs.allowfullscreen,
          "allow": this.node.attrs.allow
        }
      };
    }
  }]);

  return IFrame;
}(Node);//
var script$2 = {
  props: {
    value: Object
  },
  data: function data() {
    return {
      renderer: new prosemirrorToHtmlJs.Renderer(),
      result: String
    };
  },
  mounted: function mounted() {
    this.renderer.addNode(IFrame$1);
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
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
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

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-64f237ea";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  props: {
    value: Array,
    default: {
      type: Object,
      default: function _default() {
        return {
          type: "",
          content: ""
        };
      }
    },
    select: {
      type: Boolean,
      default: false
    },
    choices: {
      type: Object,
      default: function _default() {
        return {
          type: [{
            name: "Type",
            value: "type"
          }],
          content: [{
            name: "Content",
            value: "content"
          }]
        };
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        this.$emit("input", value);
      }
    }
  },
  data: function data() {
    return {
      newItem: {}
    };
  },
  methods: {
    insert: function insert(e) {
      var newItem = _objectSpread2({}, this.newItem);

      this.value.push(newItem);
      this.afterInsert(newItem, this.value);
    },
    remove: function remove(i) {
      var list = this.value;
      list.splice(i, 1);
      this.$emit("input", list);
    },
    afterInsert: function afterInsert(value, list) {
      this.newItem = _objectSpread2({}, this.default);
    },
    afterRemove: function afterRemove(index, list) {}
  },
  mounted: function mounted() {
    this.newItem = _objectSpread2({}, this.default);
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<ul class=\"editor\">", "</ul>", _vm._l(_vm.value, function (item, i) {
    return _vm._ssrNode("<li class=\"content\">", "</li>", [_vm._t("item", _vm._l(Object.keys(item), function (key) {
      return _c('span', {
        key: key,
        staticClass: "item"
      }, [_vm._v(_vm._s(item[key]))]);
    }), {
      "item": item
    }), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"commands\">", "</span>", [_vm._t("commands", [_c('button', {
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.remove(i);
        }
      }
    }, [_vm._t("remove", [_vm._v("Remove")])], 2)])], 2)], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<form class=\"commands\">", "</form>", [_vm._t("new", [_vm.select ? _c('span', _vm._l(Object.keys(_vm.newItem), function (key) {
    return _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newItem[key],
        expression: "newItem[key]"
      }],
      key: key,
      staticClass: "input",
      attrs: {
        "placeholder": key
      },
      on: {
        "change": function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.newItem, key, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "disabled": "",
        "selected": ""
      }
    }, [_vm._t("defaultSelection", [_vm._v("\n\t\t\t\t\t\t\tSelect " + _vm._s(key) + "\n\t\t\t\t\t\t")], {
      "selected": key
    })], 2), _vm._v(" "), _vm._l(_vm.choices[key], function (choice, i) {
      return _c('option', {
        key: key + "-choice-" + i,
        domProps: {
          "value": choice.value
        }
      }, [_vm._t("option", [_vm._v(_vm._s(choice.name))], {
        "option": choice
      })], 2);
    })], 2);
  }), 0) : _c('span', _vm._l(Object.keys(_vm.newItem), function (key) {
    return _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newItem[key],
        expression: "newItem[key]"
      }],
      key: key,
      staticClass: "input",
      attrs: {
        "type": "text",
        "placeholder": key
      },
      domProps: {
        "value": _vm.newItem[key]
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.$set(_vm.newItem, key, $event.target.value);
        }
      }
    });
  }), 0)]), _vm._ssrNode(" "), _vm._t("submit", [_c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Add")])])], 2)], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-6486613f";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,Publisher: __vue_component__$1,Reader: __vue_component__$2,ListEditor: __vue_component__$3});// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
exports.ListEditor=__vue_component__$3;exports.Publisher=__vue_component__$1;exports.Reader=__vue_component__$2;exports.default=plugin;