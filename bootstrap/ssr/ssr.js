import { Fragment, computed, createBlock, createCommentVNode, createSSRApp, createTextVNode, createVNode, h, mergeProps, nextTick, onMounted, onUnmounted, openBlock, ref, renderList, renderSlot, resolveDynamicComponent, toDisplayString, unref, useModel, useSSRContext, watch, withCtx, withKeys, withModifiers } from "vue";
import { ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport, ssrRenderVNode } from "vue/server-renderer";
import { Head, Link, createInertiaApp, router, useForm, usePage } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft, faArrowRight, faArrowUp, faArrowUpRightFromSquare, faAward, faBars, faBolt, faBook, faBriefcase, faCalendar, faChevronLeft, faChevronRight, faClock, faCloud, faCode, faCodeBranch, faComment, faDatabase, faEnvelope, faEye, faFileArrowDown, faFilter, faFolderOpen, faGears, faGlobe, faGraduationCap, faHouse, faIdCard, faImage, faInbox, faLayerGroup, faLocationDot, faMagnifyingGlass, faMessage, faMicrochip, faMobileScreen, faMoon, faPaperPlane, faPhone, faServer, faShareNodes, faSpinner, faSun, faTag, faUser, faWandMagicSparkles, faXmark } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";
import { faBootstrap, faCss3Alt, faFacebookF, faGitAlt, faGithub, faHtml5, faInstagram, faJs, faLaravel, faLinkedinIn, faMarkdown, faMedium, faNode, faPhp, faStackOverflow, faVuejs, faWordpress, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region resources/js/Components/ApplicationLogo.vue
var _sfc_main$47 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		viewBox: "0 0 316 316",
		xmlns: "http://www.w3.org/2000/svg"
	}, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
var _sfc_setup$47 = _sfc_main$47.setup;
_sfc_main$47.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
	return _sfc_setup$47 ? _sfc_setup$47(props, ctx) : void 0;
};
var ApplicationLogo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$47, [["ssrRender", _sfc_ssrRender$2]]);
//#endregion
//#region resources/js/Layouts/GuestLayout.vue
var _sfc_main$46 = {
	__name: "GuestLayout",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0" }, _attrs))}><div>`);
			_push(ssrRenderComponent(unref(Link), { href: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "h-20 w-20 fill-current text-gray-500" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "h-20 w-20 fill-current text-gray-500" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup$46 = _sfc_main$46.setup;
_sfc_main$46.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
	return _sfc_setup$46 ? _sfc_setup$46(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/InputError.vue
var _sfc_main$45 = {
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
		};
	}
};
var _sfc_setup$45 = _sfc_main$45.setup;
_sfc_main$45.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
	return _sfc_setup$45 ? _sfc_setup$45(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/InputLabel.vue
var _sfc_main$44 = {
	__name: "InputLabel",
	__ssrInlineRender: true,
	props: { value: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-gray-700" }, _attrs))}>`);
			if (__props.value) _push(`<span>${ssrInterpolate(__props.value)}</span>`);
			else {
				_push(`<span>`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</span>`);
			}
			_push(`</label>`);
		};
	}
};
var _sfc_setup$44 = _sfc_main$44.setup;
_sfc_main$44.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
	return _sfc_setup$44 ? _sfc_setup$44(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/PrimaryButton.vue
var _sfc_main$43 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$43 = _sfc_main$43.setup;
_sfc_main$43.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
	return _sfc_setup$43 ? _sfc_setup$43(props, ctx) : void 0;
};
var PrimaryButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$43, [["ssrRender", _sfc_ssrRender$1]]);
//#endregion
//#region resources/js/Components/TextInput.vue
var _sfc_main$42 = {
	__name: "TextInput",
	__ssrInlineRender: true,
	props: {
		"modelValue": {
			type: String,
			required: true
		},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const model = useModel(__props, "modelValue");
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		__expose({ focus: () => input.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
				class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
				ref_key: "input",
				ref: input
			}, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
		};
	}
};
var _sfc_setup$42 = _sfc_main$42.setup;
_sfc_main$42.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
	return _sfc_setup$42 ? _sfc_setup$42(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/ConfirmPassword.vue
var ConfirmPassword_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$41 });
var _sfc_main$41 = {
	__name: "ConfirmPassword",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({ password: "" });
		const submit = () => {
			form.post(route("password.confirm"), { onFinish: () => form.reset() });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent, _scopeId));
						_push(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "current-password",
							autofocus: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 flex justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Confirm `);
								else return [createTextVNode(" Confirm ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						createVNode(unref(Head), { title: "Confirm Password" }),
						createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", null, [
							createVNode(_sfc_main$44, {
								for: "password",
								value: "Password"
							}),
							createVNode(_sfc_main$42, {
								id: "password",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								required: "",
								autocomplete: "current-password",
								autofocus: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.password
							}, null, 8, ["message"])
						]), createVNode("div", { class: "mt-4 flex justify-end" }, [createVNode(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Confirm ")]),
							_: 1
						}, 8, ["class", "disabled"])])], 32)
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$41 = _sfc_main$41.setup;
_sfc_main$41.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
	return _sfc_setup$41 ? _sfc_setup$41(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/ForgotPassword.vue
var ForgotPassword_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$40 });
var _sfc_main$40 = {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const form = useForm({ email: "" });
		const submit = () => {
			form.post(route("password.email"));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent, _scopeId));
						_push(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
						if (__props.status) _push(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "email",
							value: "Email"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Email Password Reset Link `);
								else return [createTextVNode(" Email Password Reset Link ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						createVNode(unref(Head), { title: "Forgot Password" }),
						createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
						__props.status ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-4 text-sm font-medium text-green-600"
						}, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", null, [
							createVNode(_sfc_main$44, {
								for: "email",
								value: "Email"
							}),
							createVNode(_sfc_main$42, {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								modelValue: unref(form).email,
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								required: "",
								autofocus: "",
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.email
							}, null, 8, ["message"])
						]), createVNode("div", { class: "mt-4 flex items-center justify-end" }, [createVNode(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Email Password Reset Link ")]),
							_: 1
						}, 8, ["class", "disabled"])])], 32)
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$40 = _sfc_main$40.setup;
_sfc_main$40.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
	return _sfc_setup$40 ? _sfc_setup$40(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Checkbox.vue
var _sfc_main$39 = {
	__name: "Checkbox",
	__ssrInlineRender: true,
	props: {
		checked: {
			type: [Array, Boolean],
			required: true
		},
		value: { default: null }
	},
	emits: ["update:checked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const proxyChecked = computed({
			get() {
				return props.checked;
			},
			set(val) {
				emit("update:checked", val);
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
				type: "checkbox",
				value: __props.value,
				checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
				class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
			}, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
		};
	}
};
var _sfc_setup$39 = _sfc_main$39.setup;
_sfc_main$39.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
	return _sfc_setup$39 ? _sfc_setup$39(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/Login.vue
var Login_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$38 });
var _sfc_main$38 = {
	__name: "Login",
	__ssrInlineRender: true,
	props: {
		canResetPassword: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		const submit = () => {
			form.post(route("login"), { onFinish: () => form.reset("password") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent, _scopeId));
						if (__props.status) _push(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "email",
							value: "Email"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "current-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$39, {
							name: "remember",
							checked: unref(form).remember,
							"onUpdate:checked": ($event) => unref(form).remember = $event
						}, null, _parent, _scopeId));
						_push(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
						if (__props.canResetPassword) _push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("password.request"),
							class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Forgot your password? `);
								else return [createTextVNode(" Forgot your password? ")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log in `);
								else return [createTextVNode(" Log in ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						createVNode(unref(Head), { title: "Log in" }),
						__props.status ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-4 text-sm font-medium text-green-600"
						}, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [
							createVNode("div", null, [
								createVNode(_sfc_main$44, {
									for: "email",
									value: "Email"
								}),
								createVNode(_sfc_main$42, {
									id: "email",
									type: "email",
									class: "mt-1 block w-full",
									modelValue: unref(form).email,
									"onUpdate:modelValue": ($event) => unref(form).email = $event,
									required: "",
									autofocus: "",
									autocomplete: "username"
								}, null, 8, ["modelValue", "onUpdate:modelValue"]),
								createVNode(_sfc_main$45, {
									class: "mt-2",
									message: unref(form).errors.email
								}, null, 8, ["message"])
							]),
							createVNode("div", { class: "mt-4" }, [
								createVNode(_sfc_main$44, {
									for: "password",
									value: "Password"
								}),
								createVNode(_sfc_main$42, {
									id: "password",
									type: "password",
									class: "mt-1 block w-full",
									modelValue: unref(form).password,
									"onUpdate:modelValue": ($event) => unref(form).password = $event,
									required: "",
									autocomplete: "current-password"
								}, null, 8, ["modelValue", "onUpdate:modelValue"]),
								createVNode(_sfc_main$45, {
									class: "mt-2",
									message: unref(form).errors.password
								}, null, 8, ["message"])
							]),
							createVNode("div", { class: "mt-4 block" }, [createVNode("label", { class: "flex items-center" }, [createVNode(_sfc_main$39, {
								name: "remember",
								checked: unref(form).remember,
								"onUpdate:checked": ($event) => unref(form).remember = $event
							}, null, 8, ["checked", "onUpdate:checked"]), createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")])]),
							createVNode("div", { class: "mt-4 flex items-center justify-end" }, [__props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
								key: 0,
								href: _ctx.route("password.request"),
								class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							}, {
								default: withCtx(() => [createTextVNode(" Forgot your password? ")]),
								_: 1
							}, 8, ["href"])) : createCommentVNode("", true), createVNode(PrimaryButton_default, {
								class: ["ms-4", { "opacity-25": unref(form).processing }],
								disabled: unref(form).processing
							}, {
								default: withCtx(() => [createTextVNode(" Log in ")]),
								_: 1
							}, 8, ["class", "disabled"])])
						], 32)
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$38 = _sfc_main$38.setup;
_sfc_main$38.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
	return _sfc_setup$38 ? _sfc_setup$38(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/Register.vue
var Register_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$37 });
var _sfc_main$37 = {
	__name: "Register",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			name: "",
			email: "",
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("register"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent, _scopeId));
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "name",
							value: "Name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "name",
							type: "text",
							class: "mt-1 block w-full",
							modelValue: unref(form).name,
							"onUpdate:modelValue": ($event) => unref(form).name = $event,
							required: "",
							autofocus: "",
							autocomplete: "name"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.name
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "email",
							value: "Email"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password_confirmation",
							value: "Confirm Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password_confirmation",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("login"),
							class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Already registered? `);
								else return [createTextVNode(" Already registered? ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Register `);
								else return [createTextVNode(" Register ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [createVNode(unref(Head), { title: "Register" }), createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [
						createVNode("div", null, [
							createVNode(_sfc_main$44, {
								for: "name",
								value: "Name"
							}),
							createVNode(_sfc_main$42, {
								id: "name",
								type: "text",
								class: "mt-1 block w-full",
								modelValue: unref(form).name,
								"onUpdate:modelValue": ($event) => unref(form).name = $event,
								required: "",
								autofocus: "",
								autocomplete: "name"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.name
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$44, {
								for: "email",
								value: "Email"
							}),
							createVNode(_sfc_main$42, {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								modelValue: unref(form).email,
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								required: "",
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.email
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$44, {
								for: "password",
								value: "Password"
							}),
							createVNode(_sfc_main$42, {
								id: "password",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.password
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$44, {
								for: "password_confirmation",
								value: "Confirm Password"
							}),
							createVNode(_sfc_main$42, {
								id: "password_confirmation",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: unref(form).password_confirmation,
								"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.password_confirmation
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4 flex items-center justify-end" }, [createVNode(unref(Link), {
							href: _ctx.route("login"),
							class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						}, {
							default: withCtx(() => [createTextVNode(" Already registered? ")]),
							_: 1
						}, 8, ["href"]), createVNode(PrimaryButton_default, {
							class: ["ms-4", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Register ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					], 32)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$37 = _sfc_main$37.setup;
_sfc_main$37.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
	return _sfc_setup$37 ? _sfc_setup$37(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/ResetPassword.vue
var ResetPassword_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$36 });
var _sfc_main$36 = {
	__name: "ResetPassword",
	__ssrInlineRender: true,
	props: {
		email: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			token: props.token,
			email: props.email,
			password: "",
			password_confirmation: ""
		});
		const submit = () => {
			form.post(route("password.store"), { onFinish: () => form.reset("password", "password_confirmation") });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent, _scopeId));
						_push(`<form${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "email",
							value: "Email"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "email",
							type: "email",
							class: "mt-1 block w-full",
							modelValue: unref(form).email,
							"onUpdate:modelValue": ($event) => unref(form).email = $event,
							required: "",
							autofocus: "",
							autocomplete: "username"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password",
							value: "Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password_confirmation",
							value: "Confirm Password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password_confirmation",
							type: "password",
							class: "mt-1 block w-full",
							modelValue: unref(form).password_confirmation,
							"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
							required: "",
							autocomplete: "new-password"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							class: "mt-2",
							message: unref(form).errors.password_confirmation
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Reset Password `);
								else return [createTextVNode(" Reset Password ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [createVNode(unref(Head), { title: "Reset Password" }), createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [
						createVNode("div", null, [
							createVNode(_sfc_main$44, {
								for: "email",
								value: "Email"
							}),
							createVNode(_sfc_main$42, {
								id: "email",
								type: "email",
								class: "mt-1 block w-full",
								modelValue: unref(form).email,
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								required: "",
								autofocus: "",
								autocomplete: "username"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.email
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$44, {
								for: "password",
								value: "Password"
							}),
							createVNode(_sfc_main$42, {
								id: "password",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.password
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4" }, [
							createVNode(_sfc_main$44, {
								for: "password_confirmation",
								value: "Confirm Password"
							}),
							createVNode(_sfc_main$42, {
								id: "password_confirmation",
								type: "password",
								class: "mt-1 block w-full",
								modelValue: unref(form).password_confirmation,
								"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
								required: "",
								autocomplete: "new-password"
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								class: "mt-2",
								message: unref(form).errors.password_confirmation
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-4 flex items-center justify-end" }, [createVNode(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Reset Password ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					], 32)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$36 = _sfc_main$36.setup;
_sfc_main$36.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
	return _sfc_setup$36 ? _sfc_setup$36(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Auth/VerifyEmail.vue
var VerifyEmail_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$35 });
var _sfc_main$35 = {
	__name: "VerifyEmail",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const props = __props;
		const form = useForm({});
		const submit = () => {
			form.post(route("verification.send"));
		};
		const verificationLinkSent = computed(() => props.status === "verification-link-sent");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$46, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent, _scopeId));
						_push(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
						if (verificationLinkSent.value) _push(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
						_push(ssrRenderComponent(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Resend Verification Email `);
								else return [createTextVNode(" Resend Verification Email ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Log Out`);
								else return [createTextVNode("Log Out")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [
						createVNode(unref(Head), { title: "Email Verification" }),
						createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
						verificationLinkSent.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-4 text-sm font-medium text-green-600"
						}, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("div", { class: "mt-4 flex items-center justify-between" }, [createVNode(PrimaryButton_default, {
							class: { "opacity-25": unref(form).processing },
							disabled: unref(form).processing
						}, {
							default: withCtx(() => [createTextVNode(" Resend Verification Email ")]),
							_: 1
						}, 8, ["class", "disabled"]), createVNode(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						}, {
							default: withCtx(() => [createTextVNode("Log Out")]),
							_: 1
						}, 8, ["href"])])], 32)
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$35 = _sfc_main$35.setup;
_sfc_main$35.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
	return _sfc_setup$35 ? _sfc_setup$35(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Seo.vue
var _sfc_main$34 = {
	__name: "Seo",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			default: ""
		},
		canonical: {
			type: String,
			required: true
		},
		image: {
			type: String,
			default: null
		},
		type: {
			type: String,
			default: "website"
		},
		noindex: {
			type: Boolean,
			default: false
		},
		jsonLd: {
			type: [Object, Array],
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		const page = usePage();
		function toAbsoluteUrl(path) {
			if (!path) return null;
			if (/^https?:\/\//.test(path)) return path;
			return `${page.props.siteUrl || ""}${path.startsWith("/") ? path : `/${path}`}`;
		}
		const absoluteCanonical = computed(() => toAbsoluteUrl(props.canonical));
		const absoluteImage = computed(() => toAbsoluteUrl(props.image || "/og-image.webp"));
		const jsonLdEntries = computed(() => props.jsonLd ? Array.isArray(props.jsonLd) ? props.jsonLd : [props.jsonLd] : []);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Head), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<title${_scopeId}>${ssrInterpolate(__props.title)}</title><meta name="description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta name="robots"${ssrRenderAttr("content", __props.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large")}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", absoluteCanonical.value)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", __props.title)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta property="og:url"${ssrRenderAttr("content", absoluteCanonical.value)}${_scopeId}><meta property="og:type"${ssrRenderAttr("content", __props.type)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", absoluteImage.value)}${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", __props.title)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", absoluteImage.value)}${_scopeId}><!--[-->`);
						ssrRenderList(jsonLdEntries.value, (entry, index) => {
							ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
								key: index,
								type: "application/ld+json"
							}, null), _parent, _scopeId);
						});
						_push(`<!--]-->`);
					} else return [
						createVNode("title", null, toDisplayString(__props.title), 1),
						createVNode("meta", {
							name: "description",
							content: __props.description
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "robots",
							content: __props.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
						}, null, 8, ["content"]),
						createVNode("link", {
							rel: "canonical",
							href: absoluteCanonical.value
						}, null, 8, ["href"]),
						createVNode("meta", {
							property: "og:title",
							content: __props.title
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:description",
							content: __props.description
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:url",
							content: absoluteCanonical.value
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:type",
							content: __props.type
						}, null, 8, ["content"]),
						createVNode("meta", {
							property: "og:image",
							content: absoluteImage.value
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "twitter:card",
							content: "summary_large_image"
						}),
						createVNode("meta", {
							name: "twitter:title",
							content: __props.title
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "twitter:description",
							content: __props.description
						}, null, 8, ["content"]),
						createVNode("meta", {
							name: "twitter:image",
							content: absoluteImage.value
						}, null, 8, ["content"]),
						(openBlock(true), createBlock(Fragment, null, renderList(jsonLdEntries.value, (entry, index) => {
							return openBlock(), createBlock(resolveDynamicComponent("script"), {
								key: index,
								type: "application/ld+json",
								innerHTML: JSON.stringify(entry)
							}, null, 8, ["innerHTML"]);
						}), 128))
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$34 = _sfc_main$34.setup;
_sfc_main$34.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Seo.vue");
	return _sfc_setup$34 ? _sfc_setup$34(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Composables/useTheme.js
var STORAGE_KEY = "portfolio-theme";
var isBrowser = typeof document !== "undefined";
var theme = ref(isBrowser && document.documentElement.classList.contains("light") ? "light" : "dark");
function applyTheme(value) {
	if (!isBrowser) {
		theme.value = value;
		return;
	}
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(value);
	localStorage.setItem(STORAGE_KEY, value);
	theme.value = value;
}
function useTheme() {
	function setTheme(value) {
		applyTheme(value);
	}
	function toggleTheme() {
		applyTheme(theme.value === "dark" ? "light" : "dark");
	}
	return {
		theme,
		setTheme,
		toggleTheme
	};
}
//#endregion
//#region resources/js/Components/Portfolio/Navigation.vue
var _sfc_main$33 = {
	__name: "Navigation",
	__ssrInlineRender: true,
	props: {
		resumeUrl: {
			type: String,
			default: "/cv.pdf"
		},
		logoUrl: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const navItems = [
			{
				id: "about",
				label: "01. About",
				href: "#about"
			},
			{
				id: "experience",
				label: "02. Experience",
				href: "#experience"
			},
			{
				id: "projects",
				label: "03. Projects",
				href: "#projects"
			},
			{
				id: "education",
				label: "04. Education",
				href: "#education"
			},
			{
				id: "blog",
				label: "05. Blog",
				href: "#blog"
			},
			{
				id: "contact",
				label: "06. Contact",
				href: "#contact"
			}
		];
		const { theme, toggleTheme } = useTheme();
		const activeSection = ref("about");
		const isMobileMenuOpen = ref(false);
		const page = usePage();
		const isHome = computed(() => page.url === "/" || page.url.startsWith("/#"));
		function splitLabel(label) {
			const [num, ...rest] = label.split(". ");
			return {
				num: `${num}.`,
				text: rest.join(". ")
			};
		}
		let handleScroll = null;
		onMounted(() => {
			if (page.url.startsWith("/blog")) {
				activeSection.value = "blog";
				return;
			}
			if (page.url.startsWith("/project")) {
				activeSection.value = "projects";
				return;
			}
			if (!isHome.value) return;
			handleScroll = () => {
				const scrollPosition = window.scrollY + window.innerHeight / 3;
				let current = "about";
				for (const item of navItems) {
					const el = document.getElementById(item.id);
					if (el) {
						const rect = el.getBoundingClientRect();
						const top = window.scrollY + rect.top;
						const bottom = top + rect.height;
						if (scrollPosition >= top && scrollPosition < bottom) {
							current = item.id;
							break;
						}
					}
				}
				if (activeSection.value !== current) activeSection.value = current;
			};
			handleScroll();
			window.addEventListener("scroll", handleScroll);
		});
		onUnmounted(() => {
			if (handleScroll) window.removeEventListener("scroll", handleScroll);
		});
		function scrollToTop() {
			isMobileMenuOpen.value = false;
			if (!isHome.value) {
				router.visit("/");
				return;
			}
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-20"><div class="flex items-center">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				onClick: scrollToTop,
				"aria-label": "Home",
				class: "relative cursor-pointer inline-block"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (__props.logoUrl) _push(`<img${ssrRenderAttr("src", __props.logoUrl)} alt="Logo" width="96" height="112" class="h-28 w-24 sm:h-24 sm:w-20 animate-logo-orbit z-10 relative cursor-pointer"${_scopeId}>`);
						else _push(`<!---->`);
					} else return [__props.logoUrl ? (openBlock(), createBlock("img", {
						key: 0,
						src: __props.logoUrl,
						alt: "Logo",
						width: "96",
						height: "112",
						class: "h-28 w-24 sm:h-24 sm:w-20 animate-logo-orbit z-10 relative cursor-pointer"
					}, null, 8, ["src"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="hidden lg:flex items-center space-x-6 xl:space-x-8"><!--[-->`);
			ssrRenderList(navItems, (item) => {
				_push(`<button class="${ssrRenderClass([{ active: activeSection.value === item.id }, "nav-link text-sm xl:text-base"])}"><span class="section-number">${ssrInterpolate(splitLabel(item.label).num)}</span><span class="ml-1">${ssrInterpolate(splitLabel(item.label).text)}</span></button>`);
			});
			_push(`<!--]--></div><div class="flex items-center space-x-2 sm:space-x-3"><button${ssrRenderAttr("aria-label", isMobileMenuOpen.value ? "Close menu" : "Open menu")}${ssrRenderAttr("aria-expanded", isMobileMenuOpen.value)} class="lg:hidden p-2 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors">`);
			if (isMobileMenuOpen.value) _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faXmark),
				class: "w-5 h-5 text-accent"
			}, null, _parent));
			else _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faBars),
				class: "w-5 h-5 text-accent"
			}, null, _parent));
			_push(`</button><button${ssrRenderAttr("aria-label", unref(theme) === "dark" ? "Switch to light theme" : "Switch to dark theme")} class="p-2 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300">`);
			if (unref(theme) === "dark") _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faSun),
				class: "w-4 h-4 sm:w-5 sm:h-5 text-accent"
			}, null, _parent));
			else _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faMoon),
				class: "w-4 h-4 sm:w-5 sm:h-5 text-accent"
			}, null, _parent));
			_push(`</button><button class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faComment),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`<span>Get in Touch</span></button><a${ssrRenderAttr("href", __props.resumeUrl)} download="My-CV.pdf" class="hidden sm:flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/50 rounded-lg text-sm font-medium text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faFileArrowDown),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`<span>Resume</span></a></div></div>`);
			if (isMobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-t border-border mt-4 pt-4 pb-6 animate-fade-in"><div class="space-y-3"><!--[-->`);
				ssrRenderList(navItems, (item) => {
					_push(`<button class="${ssrRenderClass([activeSection.value === item.id ? "active bg-accent/10 text-accent" : "hover:bg-accent/5 text-muted-foreground hover:text-accent", "nav-link w-full text-left py-3 px-4 rounded-lg transition-colors"])}"><span class="section-number text-sm mr-2">${ssrInterpolate(splitLabel(item.label).num)}</span><span class="text-sm">${ssrInterpolate(splitLabel(item.label).text)}</span></button>`);
				});
				_push(`<!--]--><div class="pt-4 border-t border-border space-y-3"><button class="flex items-center justify-center space-x-2 w-full py-3 bg-muted/50 border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent/50 transition-all">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faComment),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>Get in Touch</span></button><a${ssrRenderAttr("href", __props.resumeUrl)} download="My-CV.pdf" class="flex items-center justify-center space-x-2 w-full py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-all">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faFileArrowDown),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>Download Resume</span></a></div></div></div>`);
			} else _push(`<!---->`);
			_push(`</div></nav>`);
		};
	}
};
var _sfc_setup$33 = _sfc_main$33.setup;
_sfc_main$33.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Navigation.vue");
	return _sfc_setup$33 ? _sfc_setup$33(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Blog/Index.vue
var Index_exports$1 = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$32 });
var _sfc_main$32 = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		posts: {
			type: Array,
			default: () => []
		},
		categories: {
			type: Array,
			default: () => []
		},
		search: {
			type: String,
			default: ""
		},
		category: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const props = __props;
		const searchQuery = ref(props.search);
		const selectedCategory = ref(props.category || null);
		const isSearching = ref(false);
		let debounceTimer = null;
		function applyFilters() {
			router.get("/blog", {
				...searchQuery.value ? { search: searchQuery.value } : {},
				...selectedCategory.value ? { category: selectedCategory.value } : {}
			}, {
				preserveState: true,
				preserveScroll: true,
				replace: true,
				onStart: () => isSearching.value = true,
				onFinish: () => isSearching.value = false
			});
		}
		watch(searchQuery, () => {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(applyFilters, 300);
		});
		const categoryColors = {
			Laravel: "bg-red-500/20 text-red-400 border-red-500/30",
			React: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			Frontend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			DevOps: "bg-green-500/20 text-green-400 border-green-500/30",
			CSS: "bg-purple-500/20 text-purple-400 border-purple-500/30",
			AI: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
			Database: "bg-orange-500/20 text-orange-400 border-orange-500/30",
			Security: "bg-rose-500/20 text-rose-400 border-rose-500/30",
			PHP: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
		};
		function getCategoryColor(category) {
			return categoryColors[category] || "bg-accent/20 text-accent border-accent/30";
		}
		function formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: "Blog & Articles | Portfolio",
				description: "Technical articles and tutorials on Laravel, Vue.js, REST APIs, databases, AI integration, and modern web development.",
				canonical: "/blog",
				"json-ld": {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "/"
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Blog",
						item: "/blog"
					}]
				}
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background">`);
			_push(ssrRenderComponent(_sfc_main$33, null, null, _parent));
			_push(`<div class="pt-32 pb-20 px-6"><div class="max-w-7xl mx-auto"><div class="text-center mb-12" data-aos="fade-down"><span class="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6"> Blog &amp; Articles </span><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">All Articles</h1><p class="text-lg text-muted-foreground max-w-2xl mx-auto"> Explore tutorials, insights, and best practices in web development, DevOps, AI, and modern technologies. </p></div><div class="mb-10 space-y-6" data-aos="fade-up"><div class="relative max-w-xl mx-auto">`);
			if (isSearching.value) _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faSpinner),
				class: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-spin"
			}, null, _parent));
			else _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faMagnifyingGlass),
				class: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search articles by title or keyword..." class="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"></div><div class="flex flex-wrap items-center justify-center gap-3"><div class="flex items-center gap-2 text-muted-foreground mr-2">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faFilter),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`<span class="text-sm font-medium">Filter:</span></div><button class="${ssrRenderClass([selectedCategory.value === null ? "bg-accent text-accent-foreground" : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent", "px-4 py-2 rounded-full text-sm font-medium transition-all"])}"> All </button><!--[-->`);
			ssrRenderList(__props.categories, (cat) => {
				_push(`<button class="${ssrRenderClass([selectedCategory.value === cat ? "bg-accent text-accent-foreground" : "bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent", "px-4 py-2 rounded-full text-sm font-medium transition-all"])}">${ssrInterpolate(cat)}</button>`);
			});
			_push(`<!--]--></div><div class="text-center text-sm text-muted-foreground"> Showing ${ssrInterpolate(__props.posts.length)} article(s) </div></div>`);
			if (__props.posts.length) {
				_push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
				ssrRenderList(__props.posts, (post) => {
					_push(ssrRenderComponent(unref(Link), {
						key: post.id,
						href: `/blog/${post.slug}`,
						class: "group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10",
						"data-aos": "fade-up"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="relative overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" decoding="async" width="600" height="400" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}></div>`);
								if (post.category) _push(`<span class="${ssrRenderClass([getCategoryColor(post.category), "absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border"])}"${_scopeId}>${ssrInterpolate(post.category)}</span>`);
								else _push(`<!---->`);
								_push(`</div><div class="p-6"${_scopeId}><div class="flex items-center gap-4 text-sm text-muted-foreground mb-3"${_scopeId}>`);
								if (post.published_at) {
									_push(`<span class="flex items-center gap-1"${_scopeId}>`);
									_push(ssrRenderComponent(unref(FontAwesomeIcon), {
										icon: unref(faCalendar),
										class: "w-4 h-4"
									}, null, _parent, _scopeId));
									_push(` ${ssrInterpolate(formatDate(post.published_at))}</span>`);
								} else _push(`<!---->`);
								if (post.read_time) {
									_push(`<span class="flex items-center gap-1"${_scopeId}>`);
									_push(ssrRenderComponent(unref(FontAwesomeIcon), {
										icon: unref(faClock),
										class: "w-4 h-4"
									}, null, _parent, _scopeId));
									_push(` ${ssrInterpolate(post.read_time)} min read </span>`);
								} else _push(`<!---->`);
								_push(`</div><h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="text-muted-foreground text-sm mb-4 line-clamp-2"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"${_scopeId}> Read Article `);
								_push(ssrRenderComponent(unref(FontAwesomeIcon), {
									icon: unref(faArrowRight),
									class: "w-4 h-4"
								}, null, _parent, _scopeId));
								_push(`</div></div>`);
							} else return [createVNode("div", { class: "relative overflow-hidden" }, [
								createVNode("img", {
									src: post.image,
									alt: post.title,
									loading: "lazy",
									decoding: "async",
									width: "600",
									height: "400",
									class: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
								}, null, 8, ["src", "alt"]),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
								post.category ? (openBlock(), createBlock("span", {
									key: 0,
									class: ["absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border", getCategoryColor(post.category)]
								}, toDisplayString(post.category), 3)) : createCommentVNode("", true)
							]), createVNode("div", { class: "p-6" }, [
								createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground mb-3" }, [post.published_at ? (openBlock(), createBlock("span", {
									key: 0,
									class: "flex items-center gap-1"
								}, [createVNode(unref(FontAwesomeIcon), {
									icon: unref(faCalendar),
									class: "w-4 h-4"
								}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(formatDate(post.published_at)), 1)])) : createCommentVNode("", true), post.read_time ? (openBlock(), createBlock("span", {
									key: 1,
									class: "flex items-center gap-1"
								}, [createVNode(unref(FontAwesomeIcon), {
									icon: unref(faClock),
									class: "w-4 h-4"
								}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(post.read_time) + " min read ", 1)])) : createCommentVNode("", true)]),
								createVNode("h3", { class: "text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2" }, toDisplayString(post.title), 1),
								createVNode("p", { class: "text-muted-foreground text-sm mb-4 line-clamp-2" }, toDisplayString(post.excerpt), 1),
								createVNode("div", { class: "flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all" }, [createTextVNode(" Read Article "), createVNode(unref(FontAwesomeIcon), {
									icon: unref(faArrowRight),
									class: "w-4 h-4"
								}, null, 8, ["icon"])])
							])];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			} else {
				_push(`<div class="text-center py-16">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faInbox),
					class: "w-16 h-16 mb-4 text-muted-foreground mx-auto"
				}, null, _parent));
				_push(`<h3 class="text-xl font-semibold text-foreground mb-2">No articles found</h3><p class="text-muted-foreground">Try adjusting your search or filter criteria</p></div>`);
			}
			_push(`<div class="text-center mt-16">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to Home `);
					else return [createTextVNode(" Back to Home ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$32 = _sfc_main$32.setup;
_sfc_main$32.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
	return _sfc_setup$32 ? _sfc_setup$32(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Composables/useSeo.js
/** Trims to a target length at a word boundary, for meta descriptions (~150-160 chars). */
function truncateForMeta(text, max = 148) {
	if (!text) return "";
	if (text.length <= max) return text;
	const cut = text.slice(0, max);
	const lastSpace = cut.lastIndexOf(" ");
	return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}...`;
}
//#endregion
//#region resources/js/Pages/Blog/Show.vue
var Show_exports$1 = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$31 });
var _sfc_main$31 = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { post: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const page = usePage();
		const renderedContent = computed(() => marked.parse(props.post.content || ""));
		const seoDescription = computed(() => truncateForMeta(props.post.excerpt || ""));
		function formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: `${__props.post.title} | Blog`,
				description: seoDescription.value,
				canonical: `/blog/${__props.post.slug}`,
				image: __props.post.image,
				type: "article",
				"json-ld": [{
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: __props.post.title,
					description: seoDescription.value,
					image: __props.post.image,
					author: {
						"@type": "Person",
						name: __props.post.author
					},
					datePublished: __props.post.published_at,
					keywords: __props.post.tags?.map((t) => t.name).join(", "),
					url: `${unref(page).props.siteUrl}/blog/${__props.post.slug}`
				}, {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Blog",
							item: "/blog"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: __props.post.title,
							item: `/blog/${__props.post.slug}`
						}
					]
				}]
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background">`);
			_push(ssrRenderComponent(_sfc_main$33, null, null, _parent));
			_push(`<div class="pt-24 section-padding"><div class="max-w-4xl mx-auto">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/blog",
				class: "inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faArrowLeft),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span${_scopeId}>Back to Blog</span>`);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faArrowLeft),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createVNode("span", null, "Back to Blog")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mb-8">`);
			if (__props.post.category) _push(`<span class="inline-block px-3 py-1 text-xs font-medium rounded-full border bg-accent/20 text-accent border-accent/30 mb-4">${ssrInterpolate(__props.post.category)}</span>`);
			else _push(`<!---->`);
			_push(`<h1 class="text-3xl md:text-5xl font-bold text-foreground mb-6">${ssrInterpolate(__props.post.title)}</h1><div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">`);
			if (__props.post.author) {
				_push(`<span class="flex items-center gap-1">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faUser),
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(__props.post.author)}</span>`);
			} else _push(`<!---->`);
			if (__props.post.published_at) {
				_push(`<span class="flex items-center gap-1">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faCalendar),
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(formatDate(__props.post.published_at))}</span>`);
			} else _push(`<!---->`);
			if (__props.post.read_time) {
				_push(`<span class="flex items-center gap-1">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faClock),
					class: "w-4 h-4"
				}, null, _parent));
				_push(` ${ssrInterpolate(__props.post.read_time)} min read </span>`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
			if (__props.post.image) _push(`<div class="mb-10 rounded-lg overflow-hidden border border-border"><img${ssrRenderAttr("src", __props.post.image)}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-auto object-cover"></div>`);
			else _push(`<!---->`);
			_push(`<article class="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-border prose-blockquote:border-accent prose-blockquote:text-muted-foreground">${renderedContent.value ?? ""}</article>`);
			if (__props.post.tags?.length) {
				_push(`<div class="mt-10 pt-8 border-t border-border"><div class="flex flex-wrap items-center gap-2">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faTag),
					class: "w-4 h-4 text-muted-foreground"
				}, null, _parent));
				_push(`<!--[-->`);
				ssrRenderList(__props.post.tags, (tag) => {
					_push(`<span class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium">${ssrInterpolate(tag.name)}</span>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$31 = _sfc_main$31.setup;
_sfc_main$31.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Show.vue");
	return _sfc_setup$31 ? _sfc_setup$31(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Dropdown.vue
var _sfc_main$30 = {
	__name: "Dropdown",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "right"
		},
		width: {
			type: String,
			default: "48"
		},
		contentClasses: {
			type: String,
			default: "py-1 bg-white"
		}
	},
	setup(__props) {
		const props = __props;
		const closeOnEscape = (e) => {
			if (open.value && e.key === "Escape") open.value = false;
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
		const widthClass = computed(() => {
			return { 48: "w-48" }[props.width.toString()];
		});
		const alignmentClasses = computed(() => {
			if (props.align === "left") return "ltr:origin-top-left rtl:origin-top-right start-0";
			else if (props.align === "right") return "ltr:origin-top-right rtl:origin-top-left end-0";
			else return "origin-top";
		});
		const open = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
			ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
			_push(`</div><div class="fixed inset-0 z-40" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"></div><div class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}" style="${ssrRenderStyle([{ "display": "none" }, open.value ? null : { display: "none" }])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
			ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$30 = _sfc_main$30.setup;
_sfc_main$30.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
	return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DropdownLink.vue
var _sfc_main$29 = {
	__name: "DropdownLink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
	return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/NavLink.vue
var _sfc_main$28 = {
	__name: "NavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
	return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/ResponsiveNavLink.vue
var _sfc_main$27 = {
	__name: "ResponsiveNavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
	return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout.vue
var _sfc_main$26 = {
	__name: "AuthenticatedLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const showingNavigationDropdown = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="border-b border-gray-100 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
			_push(ssrRenderComponent(unref(Link), { href: _ctx.route("dashboard") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent, _scopeId));
					else return [createVNode(ApplicationLogo_default, { class: "block h-9 w-auto fill-current text-gray-800" })];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
			_push(ssrRenderComponent(_sfc_main$28, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
			_push(ssrRenderComponent(_sfc_main$30, {
				align: "right",
				width: "48"
			}, {
				trigger: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
					else return [createVNode("span", { class: "inline-flex rounded-md" }, [createVNode("button", {
						type: "button",
						class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
					}, [createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1), (openBlock(), createBlock("svg", {
						class: "-me-0.5 ms-2 h-4 w-4",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 20 20",
						fill: "currentColor"
					}, [createVNode("path", {
						"fill-rule": "evenodd",
						d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
						"clip-rule": "evenodd"
					})]))])])];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$29, { href: _ctx.route("profile.edit") }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Profile `);
								else return [createTextVNode(" Profile ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$29, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Log Out `);
								else return [createTextVNode(" Log Out ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$29, { href: _ctx.route("profile.edit") }, {
						default: withCtx(() => [createTextVNode(" Profile ")]),
						_: 1
					}, 8, ["href"]), createVNode(_sfc_main$29, {
						href: _ctx.route("logout"),
						method: "post",
						as: "button"
					}, {
						default: withCtx(() => [createTextVNode(" Log Out ")]),
						_: 1
					}, 8, ["href"])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden"])}"><div class="space-y-1 pb-3 pt-2">`);
			_push(ssrRenderComponent(_sfc_main$27, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="border-t border-gray-200 pb-1 pt-4"><div class="px-4"><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$27, { href: _ctx.route("profile.edit") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Profile `);
					else return [createTextVNode(" Profile ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$27, {
				href: _ctx.route("logout"),
				method: "post",
				as: "button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Log Out `);
					else return [createTextVNode(" Log Out ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></nav>`);
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
				ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
			_push(`<main>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
};
var _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Dashboard.vue
var Dashboard_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$25 });
var _sfc_main$25 = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$26, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Dashboard </h2>`);
					else return [createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Dashboard ")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}> You&#39;re logged in! </div></div></div></div>`);
					else return [createVNode("div", { class: "py-12" }, [createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [createVNode("div", { class: "p-6 text-gray-900" }, " You're logged in! ")])])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Error.vue
var Error_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$24 });
var _sfc_main$24 = {
	__name: "Error",
	__ssrInlineRender: true,
	props: { status: {
		type: Number,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const page = usePage();
		const messages = {
			404: {
				title: "Page not found",
				description: "The page you're looking for doesn't exist or may have been moved."
			},
			403: {
				title: "Forbidden",
				description: "You don't have permission to access this page."
			},
			500: {
				title: "Server error",
				description: "Something went wrong on our end. Please try again shortly."
			},
			503: {
				title: "Service unavailable",
				description: "We're down for maintenance. Please check back soon."
			}
		};
		const message = computed(() => messages[props.status] || messages[500]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: `${message.value.title} | Portfolio`,
				description: message.value.description,
				canonical: unref(page).url,
				noindex: ""
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background">`);
			_push(ssrRenderComponent(_sfc_main$33, null, null, _parent));
			_push(`<div class="min-h-screen flex items-center justify-center px-4 pt-24"><div class="text-center"><p class="section-number text-6xl sm:text-7xl mb-4">${ssrInterpolate(__props.status)}</p><h1 class="text-2xl sm:text-3xl font-bold text-foreground mb-3">${ssrInterpolate(message.value.title)}</h1><p class="text-muted-foreground max-w-md mx-auto mb-8">${ssrInterpolate(message.value.description)}</p><div class="flex flex-wrap items-center justify-center gap-3">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faHouse),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(` Back to Home `);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faHouse),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createTextVNode(" Back to Home ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/projects",
				class: "inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faFolderOpen),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(` View Projects `);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faFolderOpen),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createTextVNode(" View Projects ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				href: "/blog",
				class: "inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 transition-all duration-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faBook),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(` Read the Blog `);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faBook),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createTextVNode(" Read the Blog ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Hero.vue
var _sfc_main$23 = {
	__name: "Hero",
	__ssrInlineRender: true,
	props: {
		name: {
			type: String,
			required: true
		},
		bio: {
			type: String,
			default: ""
		},
		resumeUrl: {
			type: String,
			default: "/cv.pdf"
		},
		services: {
			type: Array,
			default: () => []
		}
	},
	setup(__props) {
		const props = __props;
		const serviceList = props.services.length ? props.services : [
			"Building high-performance web apps.",
			"Crafting scalable Laravel systems.",
			"Designing reliable backend architectures.",
			"Creating clean, intuitive interfaces.",
			"Managing cloud deployments.",
			"Engineering systems to scale.",
			"Delivering full-stack solutions."
		];
		const currentTime = ref(/* @__PURE__ */ new Date());
		const serviceText = ref("");
		const serviceIndex = ref(0);
		const isTyping = ref(true);
		const stars = Array.from({ length: 20 }, () => ({
			left: `${Math.random() * 100}%`,
			top: `${Math.random() * 100}%`,
			animationDelay: `${Math.random() * 8}s`,
			animationDuration: `${8 + Math.random() * 6}s`
		}));
		let clockTimer = null;
		let typingTimer = null;
		function formatTime(date) {
			return date.toLocaleTimeString("en-US", {
				timeZone: "Asia/Dhaka",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: true
			});
		}
		function tickTyping() {
			const current = serviceList[serviceIndex.value];
			if (isTyping.value) {
				if (serviceText.value.length < current.length) typingTimer = setTimeout(() => {
					serviceText.value = current.slice(0, serviceText.value.length + 1);
					tickTyping();
				}, 80);
				else typingTimer = setTimeout(() => {
					isTyping.value = false;
					tickTyping();
				}, 5e3);
			} else if (serviceText.value.length > 0) typingTimer = setTimeout(() => {
				serviceText.value = serviceText.value.slice(0, -1);
				tickTyping();
			}, 50);
			else {
				serviceIndex.value = (serviceIndex.value + 1) % serviceList.length;
				isTyping.value = true;
				tickTyping();
			}
		}
		onMounted(() => {
			clockTimer = setInterval(() => {
				currentTime.value = /* @__PURE__ */ new Date();
			}, 1e3);
			tickTyping();
		});
		onUnmounted(() => {
			if (clockTimer) clearInterval(clockTimer);
			if (typingTimer) clearTimeout(typingTimer);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24" }, _attrs))}><div class="absolute inset-0 opacity-10"><div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div></div><!--[-->`);
			ssrRenderList(unref(stars), (star, i) => {
				_push(`<div class="absolute w-1 h-1 bg-accent rounded-full animate-star-slow opacity-60" style="${ssrRenderStyle(star)}"></div>`);
			});
			_push(`<!--]--><div class="w-full min-w-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"><div class="mb-10 sm:mb-14 pt-4 text-accent font-mono text-base sm:text-lg animate-fade-in flex items-center justify-center gap-3"><span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span><span>${ssrInterpolate(formatTime(currentTime.value))}</span><span class="text-muted-foreground">|</span><span class="text-muted-foreground">UTC+6 Dhaka</span></div><div class="mb-6 sm:mb-8 animate-slide-up"><p class="text-accent mb-3 sm:mb-4 text-base sm:text-lg font-mono">Hey, I&#39;m</p><h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 font-serif"><span class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">${ssrInterpolate(__props.name)}</span></h1><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-muted-foreground mb-4 sm:mb-6 font-serif min-h-[2.4em] sm:min-h-[1.2em]"><span class="inline-block max-w-full break-words border-r-2 border-accent">${ssrInterpolate(serviceText.value)}</span></h2></div><div class="mb-8 sm:mb-12 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"><p class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">${ssrInterpolate(__props.bio)}</p></div><div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up mb-12 sm:mb-16" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}"><button class="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-muted/50 border border-border rounded-lg text-foreground font-medium hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faComment),
				class: "w-5 h-5"
			}, null, _parent));
			_push(`<span>Get In Touch</span></button><a${ssrRenderAttr("href", __props.resumeUrl)} download="My-CV.pdf" class="group inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faFileArrowDown),
				class: "w-5 h-5"
			}, null, _parent));
			_push(`<span>Download Resume</span></a></div></div><div class="absolute top-24 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div><div class="absolute bottom-20 right-10 w-6 h-6 bg-highlight rounded-full animate-float opacity-40" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="absolute top-1/2 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style="${ssrRenderStyle({ "animation-delay": "2s" })}"></div><div class="absolute top-36 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}"></div><div class="absolute top-44 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-70" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute bottom-32 left-1/4 w-3 h-3 bg-highlight rounded-full animate-float opacity-50" style="${ssrRenderStyle({ "animation-delay": "2.5s" })}"></div><div class="absolute top-1/3 right-16 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style="${ssrRenderStyle({ "animation-delay": "0.8s" })}"></div><div class="absolute bottom-40 right-1/3 w-4 h-4 bg-accent rounded-full animate-float opacity-40" style="${ssrRenderStyle({ "animation-delay": "1.2s" })}"></div><div class="absolute top-28 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-80" style="${ssrRenderStyle({ "animation-delay": "1.8s" })}"></div></section>`);
		};
	}
};
var _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Hero.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Composables/useFaIcon.js
/**
* Maps a Skill.icon DB value (a Font Awesome solid icon name, e.g. "code")
* to its Font Awesome icon definition. Falls back to a generic icon when
* the stored name doesn't match a known icon.
*/
var skillIcons = {
	code: faCode,
	server: faServer,
	database: faDatabase,
	globe: faGlobe,
	"mobile-screen": faMobileScreen,
	"code-branch": faCodeBranch
};
function resolveSkillIcon(name) {
	return skillIcons[name] || faLayerGroup;
}
//#endregion
//#region resources/js/Composables/useTechIcon.js
/**
* Maps a Technology.name DB value to a Font Awesome icon definition.
* Falls back to a generic "code" icon for anything not in the list.
*/
var techIcons = {
	PHP: faPhp,
	Laravel: faLaravel,
	"Vue.js": faVuejs,
	"Vue js": faVuejs,
	JavaScript: faJs,
	HTML5: faHtml5,
	CSS3: faCss3Alt,
	Git: faGitAlt,
	"Node.js": faNode,
	WordPress: faWordpress,
	Bootstrap: faBootstrap,
	Markdown: faMarkdown,
	MySQL: faDatabase,
	MongoDB: faDatabase,
	"REST APIs": faCloud
};
function resolveTechIcon(name) {
	return techIcons[name] || faCode;
}
//#endregion
//#region resources/js/Components/Portfolio/TechIcon.vue
var _sfc_main$22 = {
	__name: "TechIcon",
	__ssrInlineRender: true,
	props: {
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			default: ""
		},
		category: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const isHovered = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "relative group",
				"data-aos": "zoom-in"
			}, _attrs))}><div class="bg-secondary p-4 rounded-lg text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 hover:bg-accent/10 border border-transparent hover:border-accent/30"><div class="text-3xl mb-2 transition-all duration-300 cursor-pointer flex items-center justify-center h-12">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(resolveTechIcon)(__props.name),
				class: ["w-10 h-10 object-contain transition-all duration-300", { "scale-125 drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]": isHovered.value }]
			}, null, _parent));
			_push(`</div><div class="text-sm font-medium text-foreground">${ssrInterpolate(__props.name)}</div><div class="text-xs text-accent mt-1">${ssrInterpolate(__props.category)}</div></div><div class="${ssrRenderClass([isHovered.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none", "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-accent/30 rounded-lg text-xs text-foreground whitespace-nowrap z-20 transition-all duration-200"])}"> Expert in ${ssrInterpolate(__props.name)} <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent/30"></div></div></div>`);
		};
	}
};
var _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/TechIcon.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/ImageGallerySlider.vue
var _sfc_main$21 = {
	__name: "ImageGallerySlider",
	__ssrInlineRender: true,
	props: {
		images: {
			type: Array,
			required: true
		},
		autoPlayInterval: {
			type: Number,
			default: 4e3
		}
	},
	setup(__props) {
		const props = __props;
		const currentIndex = ref(0);
		const isHovered = ref(false);
		let intervalId = null;
		function startAutoPlay() {
			stopAutoPlay();
			intervalId = setInterval(() => {
				currentIndex.value = (currentIndex.value + 1) % props.images.length;
			}, props.autoPlayInterval);
		}
		function stopAutoPlay() {
			if (intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}
		}
		onMounted(() => {
			if (!isHovered.value) startAutoPlay();
		});
		onUnmounted(() => {
			stopAutoPlay();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 p-1" }, _attrs))} data-v-c17f6511><div class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-card" data-v-c17f6511><div class="absolute inset-0" data-v-c17f6511><img${ssrRenderAttr("src", __props.images[currentIndex.value].src)}${ssrRenderAttr("alt", __props.images[currentIndex.value].alt)} decoding="async" class="h-full w-full object-cover" data-v-c17f6511><div class="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" data-v-c17f6511></div></div>`);
			if (__props.images.length > 1) {
				_push(`<button class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 hover:border-accent transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10" aria-label="Previous image" data-v-c17f6511>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faChevronLeft),
					class: "w-5 h-5 text-foreground"
				}, null, _parent));
				_push(`</button>`);
			} else _push(`<!---->`);
			if (__props.images.length > 1) {
				_push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/20 hover:border-accent transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 z-10" aria-label="Next image" data-v-c17f6511>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faChevronRight),
					class: "w-5 h-5 text-foreground"
				}, null, _parent));
				_push(`</button>`);
			} else _push(`<!---->`);
			_push(`<div class="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs text-foreground font-medium" data-v-c17f6511>${ssrInterpolate(currentIndex.value + 1)} / ${ssrInterpolate(__props.images.length)}</div></div><div class="flex justify-center gap-2 mt-4 pb-2" data-v-c17f6511><!--[-->`);
			ssrRenderList(__props.images, (_, index) => {
				_push(`<button class="${ssrRenderClass([index === currentIndex.value ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground/60", "transition-all duration-300 rounded-full"])}"${ssrRenderAttr("aria-label", `Go to slide ${index + 1}`)} data-v-c17f6511></button>`);
			});
			_push(`<!--]--></div><div class="flex gap-2 mt-2 overflow-x-auto pb-2 px-1 scrollbar-hide" data-v-c17f6511><!--[-->`);
			ssrRenderList(__props.images, (image, index) => {
				_push(`<button class="${ssrRenderClass([index === currentIndex.value ? "border-accent ring-2 ring-accent/30" : "border-transparent hover:border-accent/50", "relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105"])}" data-v-c17f6511><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} loading="lazy" decoding="async" width="64" height="48" class="w-full h-full object-cover" data-v-c17f6511>`);
				if (index === currentIndex.value) _push(`<div class="absolute inset-0 bg-accent/20" data-v-c17f6511></div>`);
				else _push(`<!---->`);
				_push(`</button>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
};
var _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/ImageGallerySlider.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var ImageGallerySlider_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$21, [["__scopeId", "data-v-c17f6511"]]);
//#endregion
//#region resources/js/Components/Portfolio/About.vue
var _sfc_main$20 = {
	__name: "About",
	__ssrInlineRender: true,
	props: {
		bio: {
			type: String,
			default: ""
		},
		skills: {
			type: Array,
			default: () => []
		},
		techStack: {
			type: Array,
			default: () => []
		},
		galleryImages: {
			type: Array,
			default: () => []
		},
		profilePhoto: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const props = __props;
		const bioParagraphs = (props.bio || "").split("\n").filter((p) => p.trim().length > 0);
		const sliderImages = [...props.profilePhoto ? [{
			src: props.profilePhoto,
			alt: "Profile photo"
		}] : [], ...props.galleryImages.map((g) => ({
			src: g.image,
			alt: g.alt_text || "Gallery photo"
		}))];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "section-padding bg-background"
			}, _attrs))}><div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto"><div class="mb-12 sm:mb-16" data-aos="fade-right"><h2 class="section-header"><span class="section-number">01.</span> About Me </h2></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"><div class="space-y-8"><div class="space-y-6 text-muted-foreground leading-relaxed" data-aos="fade-up"><!--[-->`);
			ssrRenderList(unref(bioParagraphs), (paragraph, i) => {
				_push(`<p>${ssrInterpolate(paragraph)}</p>`);
			});
			_push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
			ssrRenderList(__props.skills, (skill, index) => {
				_push(`<div class="bg-card p-4 rounded-lg border border-border card-hover group" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="flex items-start space-x-3">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(resolveSkillIcon)(skill.icon),
					class: "w-6 h-6 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
				}, null, _parent));
				_push(`<div><h3 class="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">${ssrInterpolate(skill.title)}</h3><p class="text-sm text-muted-foreground">${ssrInterpolate(skill.description)}</p></div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="space-y-6 sm:space-y-8">`);
			if (sliderImages.length) {
				_push(`<div class="bg-card border border-border rounded-xl p-4 sm:p-5" data-aos="fade-left"><p class="text-sm text-muted-foreground mb-4 text-center"> Software Engineer </p>`);
				_push(ssrRenderComponent(ImageGallerySlider_default, {
					images: sliderImages,
					"auto-play-interval": 5e3
				}, null, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`<div class="bg-card border border-border rounded-lg p-4 sm:p-6" data-aos="fade-left"><h3 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">Technologies I Work With</h3><div class="tech-grid"><!--[-->`);
			ssrRenderList(__props.techStack, (tech) => {
				_push(ssrRenderComponent(_sfc_main$22, {
					key: tech.id ?? tech.name,
					name: tech.name,
					icon: tech.icon,
					category: tech.category
				}, null, _parent));
			});
			_push(`<!--]--></div></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/About.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Experience.vue
var _sfc_main$19 = {
	__name: "Experience",
	__ssrInlineRender: true,
	props: {
		experiences: {
			type: Array,
			default: () => []
		},
		resumeUrl: {
			type: String,
			default: "/cv.pdf"
		}
	},
	setup(__props) {
		function formatDuration(exp) {
			return `${new Date(exp.start_date).toLocaleDateString("en-US", {
				day: "numeric",
				month: "long",
				year: "numeric"
			})} - ${exp.end_date ? new Date(exp.end_date).toLocaleDateString("en-US", {
				day: "numeric",
				month: "long",
				year: "numeric"
			}) : "Present"}`;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "experience",
				class: "section-padding bg-card/30"
			}, _attrs))}><div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto"><div class="mb-16"><h2 class="section-header"><span class="section-number">02.</span> Where I&#39;ve Worked </h2></div><div class="space-y-8"><!--[-->`);
			ssrRenderList(__props.experiences, (exp, index) => {
				_push(`<div class="bg-card border border-border rounded-lg p-5 sm:p-6 lg:p-8 card-hover animate-slide-up" style="${ssrRenderStyle({ animationDelay: `${index * .1}s` })}"><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-1"><div class="bg-accent/10 border border-accent/20 rounded-lg p-4 sm:p-5 lg:p-6 space-y-3"><h3 class="text-xl font-bold text-foreground">${ssrInterpolate(exp.title)}</h3><h4 class="text-lg text-accent font-semibold">${ssrInterpolate(exp.company)}</h4><div class="space-y-2 text-sm text-muted-foreground"><div class="flex items-center space-x-2">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faCalendar),
					class: "w-4 h-4 text-accent"
				}, null, _parent));
				_push(`<span>${ssrInterpolate(formatDuration(exp))}</span></div>`);
				if (exp.location) {
					_push(`<div class="flex items-center space-x-2">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faLocationDot),
						class: "w-4 h-4 text-accent"
					}, null, _parent));
					_push(`<span>${ssrInterpolate(exp.location)}</span></div>`);
				} else _push(`<!---->`);
				_push(`<div class="flex gap-2 mt-2"><!--[-->`);
				ssrRenderList(exp.employment_types, (t, i) => {
					_push(`<span class="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">${ssrInterpolate(t)}</span>`);
				});
				_push(`<!--]--></div></div></div></div><div class="lg:col-span-2 space-y-6"><div><h5 class="font-semibold text-foreground mb-3">Key Responsibilities:</h5><ul class="space-y-2"><!--[-->`);
				ssrRenderList(exp.description, (item, i) => {
					_push(`<li class="flex items-start space-x-3 text-muted-foreground"><div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div><span>${ssrInterpolate(item)}</span></li>`);
				});
				_push(`<!--]--></ul></div><div><h5 class="font-semibold text-foreground mb-3">Technologies Used:</h5><div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(exp.technologies, (tech) => {
					_push(`<span class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium">${ssrInterpolate(tech.name)}</span>`);
				});
				_push(`<!--]--></div></div></div></div></div>`);
			});
			_push(`<!--]--></div><div class="text-center mt-12"><a${ssrRenderAttr("href", __props.resumeUrl)} download="My-CV.pdf" class="btn-outline-cyan inline-flex items-center space-x-2">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faArrowUpRightFromSquare),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`<span>Download Full CV</span></a></div></div></section>`);
		};
	}
};
var _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Experience.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Projects.vue
var _sfc_main$18 = {
	__name: "Projects",
	__ssrInlineRender: true,
	props: {
		featuredProjects: {
			type: Array,
			default: () => []
		},
		otherProjects: {
			type: Array,
			default: () => []
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "projects",
				class: "section-padding bg-background"
			}, _attrs))}><div class="max-w-7xl mx-auto"><div class="mb-16" data-aos="fade-right"><h2 class="section-header"><span class="section-number">03.</span> Work I&#39;ve Built </h2></div><div class="mb-16 sm:mb-20"><h3 class="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Featured Projects</h3><div class="space-y-16 sm:space-y-24"><!--[-->`);
			ssrRenderList(__props.featuredProjects, (project, index) => {
				_push(`<div class="${ssrRenderClass([{ "lg:grid-flow-dense": index % 2 === 1 }, "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"])}"><div class="${ssrRenderClass([{ "lg:col-start-6": index % 2 === 1 }, "relative group lg:col-span-7"])}"${ssrRenderAttr("data-aos", index % 2 === 0 ? "fade-right" : "fade-left")}>`);
				_push(ssrRenderComponent(unref(Link), { href: `/project/${project.slug}` }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="relative overflow-hidden rounded-xl bg-accent/10 border-2 border-accent/30 cursor-pointer shadow-xl hover:shadow-accent/20 transition-all duration-500"${_scopeId}><img${ssrRenderAttr("src", project.images?.[0]?.image_path)}${ssrRenderAttr("alt", `Screenshot of ${project.title}`)} loading="lazy" decoding="async" width="1200" height="800" class="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"${_scopeId}></div><div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"${_scopeId}>`);
							_push(ssrRenderComponent(unref(FontAwesomeIcon), {
								icon: unref(faEye),
								class: "w-12 h-12 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"
							}, null, _parent, _scopeId));
							_push(`</div></div>`);
						} else return [createVNode("div", { class: "relative overflow-hidden rounded-xl bg-accent/10 border-2 border-accent/30 cursor-pointer shadow-xl hover:shadow-accent/20 transition-all duration-500" }, [
							createVNode("img", {
								src: project.images?.[0]?.image_path,
								alt: `Screenshot of ${project.title}`,
								loading: "lazy",
								decoding: "async",
								width: "1200",
								height: "800",
								class: "w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
							}, null, 8, ["src", "alt"]),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
							createVNode("div", { class: "absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" }, [createVNode(unref(FontAwesomeIcon), {
								icon: unref(faEye),
								class: "w-12 h-12 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"
							}, null, 8, ["icon"])])
						])];
					}),
					_: 2
				}, _parent));
				_push(`</div><div class="${ssrRenderClass([{ "lg:col-start-1 lg:row-start-1": index % 2 === 1 }, "space-y-4 sm:space-y-6 lg:col-span-5"])}"${ssrRenderAttr("data-aos", index % 2 === 0 ? "fade-left" : "fade-right")}><div><p class="text-accent font-mono text-xs sm:text-sm mb-2 flex items-center"><span class="w-8 h-[2px] bg-accent mr-2"></span> Featured Project </p>`);
				_push(ssrRenderComponent(unref(Link), { href: `/project/${project.slug}` }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<h3 class="text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors"${_scopeId}>${ssrInterpolate(project.title)}</h3>`);
						else return [createVNode("h3", { class: "text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-accent transition-colors" }, toDisplayString(project.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`<div class="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-card"><p class="text-muted-foreground leading-relaxed text-sm sm:text-base">${ssrInterpolate(project.description)}</p></div></div><div class="flex flex-wrap gap-3"><!--[-->`);
				ssrRenderList(project.technologies, (tech) => {
					_push(`<span class="text-xs sm:text-sm font-mono text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/30">${ssrInterpolate(tech.name)}</span>`);
				});
				_push(`<!--]--></div><div class="flex items-center space-x-4">`);
				if (project.github_url) {
					_push(`<a${ssrRenderAttr("href", project.github_url)} target="_blank" rel="noopener noreferrer" class="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110" aria-label="View GitHub repository">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faGithub),
						class: "w-6 h-6"
					}, null, _parent));
					_push(`</a>`);
				} else _push(`<!---->`);
				if (project.live_url) {
					_push(`<a${ssrRenderAttr("href", project.live_url)} target="_blank" rel="noopener noreferrer" class="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110" aria-label="View live project">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faArrowUpRightFromSquare),
						class: "w-6 h-6"
					}, null, _parent));
					_push(`</a>`);
				} else _push(`<!---->`);
				_push(`</div></div></div>`);
			});
			_push(`<!--]--></div></div><div><h3 class="text-xl sm:text-2xl font-bold text-accent mb-6 sm:mb-8" data-aos="fade-up">Other Projects</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"><!--[-->`);
			ssrRenderList(__props.otherProjects, (project, index) => {
				_push(`<div role="link" tabindex="0" class="bg-card border border-border rounded-lg p-4 sm:p-6 card-hover group hover:scale-105 transition-all duration-300 block cursor-pointer hover:border-accent/50" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faEye),
					class: "w-6 h-6 text-accent group-hover:scale-110 transition-transform"
				}, null, _parent));
				_push(`</div><div class="flex items-center space-x-3">`);
				if (project.github_url) {
					_push(`<a${ssrRenderAttr("href", project.github_url)} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faGithub),
						class: "w-5 h-5"
					}, null, _parent));
					_push(`</a>`);
				} else _push(`<!---->`);
				if (project.live_url) {
					_push(`<a${ssrRenderAttr("href", project.live_url)} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faArrowUpRightFromSquare),
						class: "w-5 h-5"
					}, null, _parent));
					_push(`</a>`);
				} else _push(`<!---->`);
				_push(`</div></div><h3 class="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">${ssrInterpolate(project.title)}</h3><p class="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(project.technologies.slice(0, 3), (tech) => {
					_push(`<span class="text-xs font-mono text-accent">${ssrInterpolate(tech.name)}</span>`);
				});
				_push(`<!--]-->`);
				if (project.technologies.length > 3) _push(`<span class="text-xs font-mono text-muted-foreground"> +${ssrInterpolate(project.technologies.length - 3)}</span>`);
				else _push(`<!---->`);
				_push(`</div></div>`);
			});
			_push(`<!--]--></div></div><div class="text-center mt-12" data-aos="fade-up">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/projects",
				class: "btn-outline-cyan inline-block"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`View Archive`);
					else return [createTextVNode("View Archive")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section>`);
		};
	}
};
var _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Projects.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Availability.vue
var _sfc_main$17 = {
	__name: "Availability",
	__ssrInlineRender: true,
	props: {
		email: {
			type: String,
			default: ""
		},
		availabilityStatus: {
			type: Boolean,
			default: true
		},
		yearsExperience: {
			type: Number,
			default: null
		},
		projectsDelivered: {
			type: Number,
			default: null
		},
		satisfactionRate: {
			type: Number,
			default: null
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "availability",
				class: "section-padding bg-card/50 relative overflow-hidden"
			}, _attrs))}><div class="absolute inset-0 opacity-20"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[120px]"></div></div><div class="max-w-4xl mx-auto text-center relative z-10"><div class="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8" data-aos="fade-down">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faWandMagicSparkles),
				class: "w-4 h-4 text-accent animate-pulse"
			}, null, _parent));
			_push(`<span class="text-sm font-medium text-accent">${ssrInterpolate(__props.availabilityStatus ? "Open for Opportunities" : "Currently Unavailable")}</span></div><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100"><span class="text-foreground">Available for </span><span class="text-accent text-glow">Work</span></h2><p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="200"> I&#39;m available for freelance projects and full-time roles, Laravel backends, Vue.js frontends, REST APIs, and AI integrations. Let&#39;s build something that ships. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300"><button class="group inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faEnvelope),
				class: "w-5 h-5"
			}, null, _parent));
			_push(`<span>Hire Me for Your Next Project</span>`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faArrowRight),
				class: "w-5 h-5 group-hover:translate-x-1 transition-transform"
			}, null, _parent));
			_push(`</button>`);
			if (__props.email) _push(`<a${ssrRenderAttr("href", `mailto:${__props.email}`)} class="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300"><span>${ssrInterpolate(__props.email)}</span></a>`);
			else _push(`<!---->`);
			_push(`</div>`);
			if (__props.yearsExperience || __props.projectsDelivered || __props.satisfactionRate) {
				_push(`<div class="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50" data-aos="fade-up" data-aos-delay="400">`);
				if (__props.yearsExperience) _push(`<div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-accent">${ssrInterpolate(__props.yearsExperience)}+</div><div class="text-sm text-muted-foreground mt-1">Years Experience</div></div>`);
				else _push(`<!---->`);
				if (__props.projectsDelivered) _push(`<div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-accent">${ssrInterpolate(__props.projectsDelivered)}+</div><div class="text-sm text-muted-foreground mt-1">Projects Delivered</div></div>`);
				else _push(`<!---->`);
				if (__props.satisfactionRate) _push(`<div class="text-center"><div class="text-2xl sm:text-3xl font-bold text-accent">${ssrInterpolate(__props.satisfactionRate)}%</div><div class="text-sm text-muted-foreground mt-1">Client Satisfaction</div></div>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div></section>`);
		};
	}
};
var _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Availability.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/Education.vue
var _sfc_main$16 = {
	__name: "Education",
	__ssrInlineRender: true,
	props: {
		education: {
			type: Array,
			default: () => []
		},
		certifications: {
			type: Array,
			default: () => []
		},
		skillGroups: {
			type: Array,
			default: () => []
		}
	},
	setup(__props) {
		const selectedImage = ref(null);
		function formatIssueDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				month: "long",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "education",
				class: "section-padding bg-card/30"
			}, _attrs))} data-v-8678c464><div class="w-full sm:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto" data-v-8678c464><div class="mb-20" data-aos="fade-right" data-v-8678c464><h2 class="section-header" data-v-8678c464><span class="section-number" data-v-8678c464>04.</span> My Qualifications </h2></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20" data-v-8678c464><div class="lg:col-span-2 space-y-12" data-v-8678c464><div data-v-8678c464><h3 class="text-2xl font-bold text-accent mb-6 flex items-center" data-aos="fade-up" data-v-8678c464>`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faGraduationCap),
				class: "w-6 h-6 mr-2"
			}, null, _parent));
			_push(` Formal Education </h3><!--[-->`);
			ssrRenderList(__props.education, (edu, index) => {
				_push(`<div class="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 mb-8 shadow-card hover:shadow-elegant transition-all duration-300" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)} data-v-8678c464><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-8678c464><div class="md:col-span-1" data-v-8678c464><div class="bg-accent/10 border border-accent/20 rounded-lg p-4" data-v-8678c464><h4 class="font-bold text-foreground text-lg mb-2" data-v-8678c464>${ssrInterpolate(edu.degree)}</h4><p class="text-accent font-semibold mb-3" data-v-8678c464>${ssrInterpolate(edu.institution)}</p><div class="space-y-2 text-sm text-muted-foreground" data-v-8678c464><div class="flex items-center space-x-2" data-v-8678c464>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faCalendar),
					class: "w-4 h-4 text-accent"
				}, null, _parent));
				_push(`<span data-v-8678c464>${ssrInterpolate(edu.start_year)}${ssrInterpolate(edu.end_year ? ` - ${edu.end_year}` : "")}</span></div>`);
				if (edu.location) {
					_push(`<div class="flex items-center space-x-2" data-v-8678c464>`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faLocationDot),
						class: "w-4 h-4 text-accent"
					}, null, _parent));
					_push(`<span data-v-8678c464>${ssrInterpolate(edu.location)}</span></div>`);
				} else _push(`<!---->`);
				if (edu.grade) {
					_push(`<div class="flex items-center space-x-2" data-v-8678c464>`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faAward),
						class: "w-4 h-4 text-accent"
					}, null, _parent));
					_push(`<span data-v-8678c464>${ssrInterpolate(edu.grade)}</span></div>`);
				} else _push(`<!---->`);
				_push(`</div></div></div><div class="md:col-span-2 space-y-6" data-v-8678c464>`);
				if (edu.description) _push(`<p class="text-muted-foreground leading-relaxed" data-v-8678c464>${ssrInterpolate(edu.description)}</p>`);
				else _push(`<!---->`);
				if (edu.highlights?.length) {
					_push(`<div data-v-8678c464><h5 class="font-semibold text-foreground mb-3" data-v-8678c464>Key Subjects:</h5><div class="grid grid-cols-1 sm:grid-cols-2 gap-2" data-v-8678c464><!--[-->`);
					ssrRenderList(edu.highlights, (highlight, i) => {
						_push(`<div class="flex items-center space-x-2 text-sm text-muted-foreground" data-v-8678c464><div class="w-2 h-2 bg-accent rounded-full" data-v-8678c464></div><span data-v-8678c464>${ssrInterpolate(highlight)}</span></div>`);
					});
					_push(`<!--]--></div></div>`);
				} else _push(`<!---->`);
				if (edu.projects_note?.length) {
					_push(`<div data-v-8678c464><h5 class="font-semibold text-foreground mb-3" data-v-8678c464>Projects:</h5><ul class="space-y-1" data-v-8678c464><!--[-->`);
					ssrRenderList(edu.projects_note, (project, i) => {
						_push(`<li class="flex items-start space-x-2 text-sm text-muted-foreground" data-v-8678c464><div class="w-2 h-2 bg-highlight rounded-full mt-2" data-v-8678c464></div><span data-v-8678c464>${ssrInterpolate(project)}</span></li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				_push(`</div></div></div>`);
			});
			_push(`<!--]--></div></div><div class="space-y-8" data-v-8678c464><h3 class="text-2xl font-bold text-accent mb-6" data-aos="fade-left" data-v-8678c464>Skills Overview</h3><!--[-->`);
			ssrRenderList(__props.skillGroups, (group, index) => {
				_push(`<div class="bg-card border border-border rounded-lg p-6 sm:p-7 lg:p-8 xl:p-10 shadow-card hover:shadow-elegant transition-all duration-300 group" data-aos="fade-left"${ssrRenderAttr("data-aos-delay", index * 100)} data-v-8678c464><h4 class="font-semibold text-foreground mb-3 text-sm group-hover:text-accent transition-colors" data-v-8678c464>${ssrInterpolate(group.category)}</h4><div class="flex flex-wrap gap-1" data-v-8678c464><!--[-->`);
				ssrRenderList(group.items, (item) => {
					_push(`<span class="px-2 py-1 bg-secondary text-accent text-xs rounded border border-border hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 cursor-default" data-v-8678c464>${ssrInterpolate(item.item_text)}</span>`);
				});
				_push(`<!--]--></div></div>`);
			});
			_push(`<!--]--></div></div><div class="mt-16 xl:mt-20" data-v-8678c464><h3 class="text-2xl font-bold text-accent mb-6 flex items-center" data-aos="fade-up" data-v-8678c464>`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faBook),
				class: "w-6 h-6 mr-2"
			}, null, _parent));
			_push(` Certifications </h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-v-8678c464><!--[-->`);
			ssrRenderList(__props.certifications, (cert, index) => {
				_push(`<div class="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card hover:shadow-elegant hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)} data-v-8678c464>`);
				if (cert.image) {
					_push(`<div class="w-full h-36 sm:h-40 bg-white/[0.08] rounded-lg mb-4 overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-colors cursor-pointer relative flex-shrink-0" data-v-8678c464><img${ssrRenderAttr("src", cert.image)}${ssrRenderAttr("alt", `${cert.title} certificate`)} loading="lazy" decoding="async" width="400" height="280" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" data-v-8678c464><div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center" data-v-8678c464>`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faEye),
						class: "w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
					}, null, _parent));
					_push(`</div></div>`);
				} else {
					_push(`<div class="w-full h-36 sm:h-40 bg-accent/10 rounded-lg mb-4 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors flex-shrink-0" data-v-8678c464>`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faBook),
						class: "w-10 h-10 text-accent/50"
					}, null, _parent));
					_push(`</div>`);
				}
				_push(`<h4 class="font-semibold text-foreground mb-1.5 line-clamp-2 min-h-[2.75rem] group-hover:text-accent transition-colors" data-v-8678c464>${ssrInterpolate(cert.title)}</h4><p class="text-accent text-sm font-medium mb-1" data-v-8678c464>${ssrInterpolate(cert.provider)}</p><p class="text-muted-foreground text-xs mb-3 flex items-center gap-1.5" data-v-8678c464>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faCalendar),
					class: "w-3.5 h-3.5 flex-shrink-0"
				}, null, _parent));
				_push(` ${ssrInterpolate(formatIssueDate(cert.issue_date))}</p>`);
				if (cert.description) _push(`<p class="text-muted-foreground text-xs mb-3 line-clamp-2" data-v-8678c464>${ssrInterpolate(cert.description)}</p>`);
				else _push(`<!---->`);
				_push(`<div class="flex flex-wrap gap-1.5 mt-auto pt-1" data-v-8678c464><!--[-->`);
				ssrRenderList(cert.skills, (skill, i) => {
					_push(`<span class="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/10" data-v-8678c464>${ssrInterpolate(skill)}</span>`);
				});
				_push(`<!--]--></div></div>`);
			});
			_push(`<!--]--></div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (selectedImage.value) {
					_push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4" data-v-8678c464><div class="relative bg-background/95 backdrop-blur-sm border border-accent/20 rounded-lg p-4 sm:p-6 max-w-2xl sm:max-w-3xl lg:max-w-4xl w-full max-h-[95vh] overflow-hidden" data-v-8678c464><button class="absolute top-3 right-3 p-2 rounded-full bg-card border border-border hover:bg-accent/10 transition-colors z-10" aria-label="Close" data-v-8678c464>`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faXmark),
						class: "w-5 h-5 text-foreground"
					}, null, _parent));
					_push(`</button><div class="flex items-center justify-center h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]" data-v-8678c464><img${ssrRenderAttr("src", selectedImage.value)} alt="Certificate preview, enlarged" decoding="async" class="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl" draggable="false" data-v-8678c464></div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div></div></section>`);
		};
	}
};
var _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Education.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var Education_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$16, [["__scopeId", "data-v-8678c464"]]);
//#endregion
//#region resources/js/Components/Portfolio/Blog.vue
var _sfc_main$15 = {
	__name: "Blog",
	__ssrInlineRender: true,
	props: { posts: {
		type: Array,
		default: () => []
	} },
	setup(__props) {
		const categoryColors = {
			Laravel: "bg-red-500/20 text-red-400 border-red-500/30",
			React: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			Frontend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			DevOps: "bg-green-500/20 text-green-400 border-green-500/30",
			CSS: "bg-purple-500/20 text-purple-400 border-purple-500/30",
			AI: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
			Database: "bg-orange-500/20 text-orange-400 border-orange-500/30",
			Security: "bg-rose-500/20 text-rose-400 border-rose-500/30",
			PHP: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
		};
		function getCategoryColor(category) {
			return categoryColors[category] || "bg-accent/20 text-accent border-accent/30";
		}
		function formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "blog",
				class: "section-padding bg-card/30 relative overflow-hidden"
			}, _attrs))}><div class="absolute inset-0 opacity-5"><div class="absolute top-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div><div class="absolute bottom-20 left-10 w-32 h-32 bg-highlight rounded-full blur-3xl"></div></div><div class="max-w-7xl mx-auto relative z-10"><div class="mb-16 sm:mb-20 text-center" data-aos="fade-down"><h2 class="section-header"><span class="section-number">05.</span> Blog &amp; Articles </h2><p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"> Technical articles and tutorials on web development, software architecture, and modern technologies. </p></div><div class="${ssrRenderClass([{ "lg:grid-cols-3": __props.posts.length >= 3 }, "grid grid-cols-1 md:grid-cols-2 gap-8"])}"><!--[-->`);
			ssrRenderList(__props.posts, (post, index) => {
				_push(ssrRenderComponent(unref(Link), {
					key: post.id,
					href: `/blog/${post.slug}`,
					class: "group block bg-card border border-border rounded-xl overflow-hidden card-hover",
					"data-aos": "fade-up",
					"data-aos-delay": index * 100
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="relative h-48 sm:h-56 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} loading="lazy" decoding="async" width="500" height="224" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"${_scopeId}></div>`);
							if (post.category) _push(`<span class="${ssrRenderClass([getCategoryColor(post.category), "absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border"])}"${_scopeId}>${ssrInterpolate(post.category)}</span>`);
							else _push(`<!---->`);
							_push(`</div><div class="p-6"${_scopeId}><div class="flex items-center gap-4 text-sm text-muted-foreground mb-3"${_scopeId}>`);
							if (post.published_at) {
								_push(`<span class="flex items-center gap-1"${_scopeId}>`);
								_push(ssrRenderComponent(unref(FontAwesomeIcon), {
									icon: unref(faCalendar),
									class: "w-4 h-4"
								}, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(formatDate(post.published_at))}</span>`);
							} else _push(`<!---->`);
							if (post.read_time) {
								_push(`<span class="flex items-center gap-1"${_scopeId}>`);
								_push(ssrRenderComponent(unref(FontAwesomeIcon), {
									icon: unref(faClock),
									class: "w-4 h-4"
								}, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(post.read_time)} min read </span>`);
							} else _push(`<!---->`);
							_push(`</div><h3 class="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="text-muted-foreground line-clamp-3 mb-4"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><span class="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all"${_scopeId}> Read More `);
							_push(ssrRenderComponent(unref(FontAwesomeIcon), {
								icon: unref(faArrowRight),
								class: "w-4 h-4"
							}, null, _parent, _scopeId));
							_push(`</span></div>`);
						} else return [createVNode("div", { class: "relative h-48 sm:h-56 overflow-hidden" }, [
							createVNode("img", {
								src: post.image,
								alt: post.title,
								loading: "lazy",
								decoding: "async",
								width: "500",
								height: "224",
								class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							}, null, 8, ["src", "alt"]),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" }),
							post.category ? (openBlock(), createBlock("span", {
								key: 0,
								class: ["absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border", getCategoryColor(post.category)]
							}, toDisplayString(post.category), 3)) : createCommentVNode("", true)
						]), createVNode("div", { class: "p-6" }, [
							createVNode("div", { class: "flex items-center gap-4 text-sm text-muted-foreground mb-3" }, [post.published_at ? (openBlock(), createBlock("span", {
								key: 0,
								class: "flex items-center gap-1"
							}, [createVNode(unref(FontAwesomeIcon), {
								icon: unref(faCalendar),
								class: "w-4 h-4"
							}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(formatDate(post.published_at)), 1)])) : createCommentVNode("", true), post.read_time ? (openBlock(), createBlock("span", {
								key: 1,
								class: "flex items-center gap-1"
							}, [createVNode(unref(FontAwesomeIcon), {
								icon: unref(faClock),
								class: "w-4 h-4"
							}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(post.read_time) + " min read ", 1)])) : createCommentVNode("", true)]),
							createVNode("h3", { class: "text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors" }, toDisplayString(post.title), 1),
							createVNode("p", { class: "text-muted-foreground line-clamp-3 mb-4" }, toDisplayString(post.excerpt), 1),
							createVNode("span", { class: "inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all" }, [createTextVNode(" Read More "), createVNode(unref(FontAwesomeIcon), {
								icon: unref(faArrowRight),
								class: "w-4 h-4"
							}, null, 8, ["icon"])])
						])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div><div class="mt-12 text-center" data-aos="fade-up">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/blog",
				class: "inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faBook),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(` View All Articles `);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faBook),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createTextVNode(" View All Articles ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section>`);
		};
	}
};
var _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Blog.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/AIShowcase.vue
var _sfc_main$14 = {
	__name: "AIShowcase",
	__ssrInlineRender: true,
	setup(__props) {
		const aiModels = [
			{
				name: "OpenAI GPT",
				icon: faServer,
				description: "Advanced language models for natural conversation and code generation",
				color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
				features: [
					"GPT-4 Turbo",
					"DALL-E 3",
					"Whisper"
				]
			},
			{
				name: "Google Gemini",
				icon: faCloud,
				description: "Multimodal AI for text, image, and video understanding",
				color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
				features: [
					"Gemini Pro",
					"Gemini Ultra",
					"Vision AI"
				]
			},
			{
				name: "Anthropic Claude",
				icon: faLayerGroup,
				description: "Safe and helpful AI assistant for complex reasoning tasks",
				color: "from-purple-500/20 to-violet-500/20 border-purple-500/30",
				features: [
					"Claude 3",
					"Constitutional AI",
					"Long Context"
				]
			},
			{
				name: "xAI Grok",
				icon: faBolt,
				description: "Real-time knowledge AI with wit and direct answers",
				color: "from-gray-500/20 to-slate-500/20 border-gray-500/30",
				features: [
					"Grok-2",
					"Real-time Data",
					"X Integration"
				]
			},
			{
				name: "Meta LLaMA",
				icon: faMicrochip,
				description: "Open-source large language models for research and development",
				color: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
				features: [
					"LLaMA 3",
					"Code LLaMA",
					"Open Source"
				]
			}
		];
		const aiServices = [
			{
				icon: faMessage,
				title: "AI Chatbots",
				description: "Build intelligent conversational interfaces powered by LLMs"
			},
			{
				icon: faImage,
				title: "Image Generation",
				description: "Create stunning visuals with AI-powered image generation"
			},
			{
				icon: faCode,
				title: "Code Assistance",
				description: "AI-powered code completion, review, and generation"
			},
			{
				icon: faGears,
				title: "Automation",
				description: "Intelligent automation workflows with AI decision making"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "ai",
				class: "section-padding bg-background relative overflow-hidden"
			}, _attrs))}><div class="absolute inset-0"><div class="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div><div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div></div><div class="absolute inset-0 opacity-5" style="${ssrRenderStyle({
				"background-image": "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
				"background-size": "50px 50px"
			})}"></div><div class="max-w-7xl mx-auto relative z-10"><div class="mb-16 sm:mb-20 text-center" data-aos="fade-down"><div class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faLayerGroup),
				class: "w-5 h-5 text-accent"
			}, null, _parent));
			_push(`<span class="text-accent font-medium">AI Integration</span></div><h2 class="section-header"><span class="bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">Artificial Intelligence</span></h2><p class="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"> Exploring and integrating cutting-edge AI technologies to build intelligent, innovative solutions that transform user experiences. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"><!--[-->`);
			ssrRenderList(aiModels, (model, index) => {
				_push(`<div class="${ssrRenderClass([model.color, "group relative bg-gradient-to-br border rounded-2xl p-6 card-hover"])}" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div class="relative z-10"><div class="text-4xl mb-4">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: model.icon,
					class: "w-9 h-9"
				}, null, _parent));
				_push(`</div><h3 class="text-xl font-bold text-foreground mb-2">${ssrInterpolate(model.name)}</h3><p class="text-muted-foreground text-sm mb-4">${ssrInterpolate(model.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
				ssrRenderList(model.features, (feature) => {
					_push(`<span class="px-2 py-1 bg-background/50 border border-border rounded-md text-xs text-accent">${ssrInterpolate(feature)}</span>`);
				});
				_push(`<!--]--></div></div></div>`);
			});
			_push(`<!--]--></div><div class="mb-16"><h3 class="text-2xl font-bold text-foreground text-center mb-8" data-aos="fade-up">AI Integration Services</h3><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
			ssrRenderList(aiServices, (service, index) => {
				_push(`<div class="group bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 100)}><div class="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: service.icon,
					class: "w-7 h-7 text-accent"
				}, null, _parent));
				_push(`</div><h4 class="text-lg font-semibold text-foreground mb-2">${ssrInterpolate(service.title)}</h4><p class="text-sm text-muted-foreground">${ssrInterpolate(service.description)}</p></div>`);
			});
			_push(`<!--]--></div></div><div class="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 sm:p-12" data-aos="fade-up"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"><div><div class="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent mb-4">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faWandMagicSparkles),
				class: "w-4 h-4"
			}, null, _parent));
			_push(` Continuous Learning </div><h3 class="text-2xl sm:text-3xl font-bold text-foreground mb-4">AI Learning Journey</h3><p class="text-muted-foreground mb-6"> Constantly exploring new AI technologies, from large language models to computer vision, staying at the forefront of artificial intelligence advancements. </p><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faBolt),
				class: "w-5 h-5 text-green-400"
			}, null, _parent));
			_push(`</div><div><h4 class="font-semibold text-foreground">Prompt Engineering</h4><p class="text-sm text-muted-foreground">Crafting effective prompts for optimal AI responses</p></div></div><div class="flex items-center gap-3"><div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faMicrochip),
				class: "w-5 h-5 text-blue-400"
			}, null, _parent));
			_push(`</div><div><h4 class="font-semibold text-foreground">Model Fine-tuning</h4><p class="text-sm text-muted-foreground">Customizing AI models for specific use cases</p></div></div><div class="flex items-center gap-3"><div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faGears),
				class: "w-5 h-5 text-purple-400"
			}, null, _parent));
			_push(`</div><div><h4 class="font-semibold text-foreground">RAG Systems</h4><p class="text-sm text-muted-foreground">Building retrieval-augmented generation applications</p></div></div></div></div><div class="relative"><div class="relative aspect-square max-w-md mx-auto"><div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-accent/20 to-blue-500/20 rounded-full animate-pulse"></div><div class="absolute inset-8 bg-gradient-to-br from-accent/10 to-transparent rounded-full border border-accent/20 flex items-center justify-center"><div class="text-center">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faGears),
				class: "w-16 h-16 text-accent mx-auto mb-4 animate-float"
			}, null, _parent));
			_push(`<span class="text-2xl font-bold text-foreground">AI</span><p class="text-sm text-muted-foreground mt-1">Powered Solutions</p></div></div><div class="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center animate-float">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faServer),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</div><div class="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center animate-float" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faCloud),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</div><div class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center animate-float" style="${ssrRenderStyle({ "animation-delay": "1s" })}">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faLayerGroup),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</div><div class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/30 rounded-full flex items-center justify-center animate-float" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faMicrochip),
				class: "w-4 h-4"
			}, null, _parent));
			_push(`</div></div></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/AIShowcase.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Composables/useSocialIcon.js
var socialMeta = {
	GitHub: {
		icon: faGithub,
		color: "hover:text-accent hover:border-accent/50",
		bgHover: "hover:bg-accent/10"
	},
	LinkedIn: {
		icon: faLinkedinIn,
		color: "hover:text-blue-400 hover:border-blue-400/50",
		bgHover: "hover:bg-blue-400/10"
	},
	Twitter: {
		icon: faXTwitter,
		color: "hover:text-sky-400 hover:border-sky-400/50",
		bgHover: "hover:bg-sky-400/10"
	},
	Instagram: {
		icon: faInstagram,
		color: "hover:text-pink-500 hover:border-pink-500/50",
		bgHover: "hover:bg-pink-500/10"
	},
	Facebook: {
		icon: faFacebookF,
		color: "hover:text-blue-500 hover:border-blue-500/50",
		bgHover: "hover:bg-blue-500/10"
	},
	Fiverr: {
		icon: faBriefcase,
		color: "hover:text-green-500 hover:border-green-500/50",
		bgHover: "hover:bg-green-500/10"
	},
	Medium: {
		icon: faMedium,
		color: "hover:text-foreground hover:border-foreground/50",
		bgHover: "hover:bg-foreground/10"
	},
	StackOverflow: {
		icon: faStackOverflow,
		color: "hover:text-orange-500 hover:border-orange-500/50",
		bgHover: "hover:bg-orange-500/10"
	}
};
function resolveSocialMeta(platform) {
	return socialMeta[platform] || {
		icon: faShareNodes,
		color: "hover:text-accent",
		bgHover: "hover:bg-accent/10"
	};
}
//#endregion
//#region resources/js/Composables/useContactIcon.js
var contactIcons = {
	Mail: faEnvelope,
	Phone: faPhone,
	MapPin: faLocationDot
};
function resolveContactIcon(name) {
	return contactIcons[name] || faIdCard;
}
//#endregion
//#region resources/js/Components/Portfolio/Toast.vue
var _sfc_main$13 = {
	__name: "Toast",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderTeleport(_push, (_push) => {
				if (__props.show) {
					_push(`<div class="fixed bottom-6 right-6 z-[60] max-w-sm w-full bg-card border border-border rounded-lg shadow-elegant p-4" role="status" data-v-df032f63><p class="font-semibold text-foreground" data-v-df032f63>${ssrInterpolate(__props.title)}</p>`);
					if (__props.description) _push(`<p class="text-sm text-muted-foreground mt-1" data-v-df032f63>${ssrInterpolate(__props.description)}</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Toast.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var Toast_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$13, [["__scopeId", "data-v-df032f63"]]);
//#endregion
//#region resources/js/Components/Portfolio/Contact.vue
var _sfc_main$12 = {
	__name: "Contact",
	__ssrInlineRender: true,
	props: {
		contactInfo: {
			type: Array,
			default: () => []
		},
		socialLinks: {
			type: Array,
			default: () => []
		},
		ownerName: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		usePage();
		const form = useForm({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
		const toast = ref({
			show: false,
			title: "",
			description: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "contact",
				class: "section-padding bg-background relative overflow-hidden"
			}, _attrs))}><div class="absolute inset-0 opacity-5"><div class="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div><div class="absolute bottom-20 right-10 w-40 h-40 bg-highlight rounded-full blur-3xl"></div></div><div class="max-w-7xl mx-auto relative z-10"><div class="mb-16 sm:mb-20 text-center" data-aos="fade-down"><h2 class="section-header"><span class="section-number">06.</span> Get In Touch </h2><p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"> I&#39;m always interested in new opportunities and interesting projects. Whether you have a question or just want to say hello, feel free to reach out! </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16"><div class="space-y-6 sm:space-y-8"><div data-aos="fade-right"><h3 class="text-xl sm:text-2xl font-bold text-accent mb-4 sm:mb-6">Let&#39;s Connect</h3><p class="text-muted-foreground leading-relaxed mb-6 sm:mb-8"> I&#39;m currently open to new opportunities and always excited to work on innovative projects. If you&#39;re looking for a dedicated developer or just want to connect, I&#39;d love to hear from you. </p></div><div class="space-y-4"><!--[-->`);
			ssrRenderList(__props.contactInfo, (contact, index) => {
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(contact.href ? "a" : "div"), {
					key: contact.id,
					href: contact.href || void 0,
					class: "flex items-center space-x-4 p-4 bg-card border border-border rounded-lg card-hover group",
					"data-aos": "fade-right",
					"data-aos-delay": index * 100
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors"${_scopeId}>`);
							_push(ssrRenderComponent(unref(FontAwesomeIcon), {
								icon: unref(resolveContactIcon)(contact.icon),
								class: "w-6 h-6 text-accent"
							}, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><p class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(contact.label)}</p><p class="font-medium text-foreground group-hover:text-accent transition-colors"${_scopeId}>${ssrInterpolate(contact.value)}</p></div>`);
						} else return [createVNode("div", { class: "w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors" }, [createVNode(unref(FontAwesomeIcon), {
							icon: unref(resolveContactIcon)(contact.icon),
							class: "w-6 h-6 text-accent"
						}, null, 8, ["icon"])]), createVNode("div", null, [createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(contact.label), 1), createVNode("p", { class: "font-medium text-foreground group-hover:text-accent transition-colors" }, toDisplayString(contact.value), 1)])];
					}),
					_: 2
				}), _parent);
			});
			_push(`<!--]--></div><div data-aos="fade-right" data-aos-delay="300"><h4 class="font-semibold text-foreground mb-4">Find me on</h4><div class="flex flex-wrap gap-3"><!--[-->`);
			ssrRenderList(__props.socialLinks, (social) => {
				_push(`<a${ssrRenderAttr("href", social.href)} target="_blank" rel="noopener noreferrer" class="${ssrRenderClass([[unref(resolveSocialMeta)(social.platform_name).color, unref(resolveSocialMeta)(social.platform_name).bgHover], "w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-card"])}"${ssrRenderAttr("aria-label", social.platform_name)}${ssrRenderAttr("title", social.platform_name)}>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(resolveSocialMeta)(social.platform_name).icon,
					class: "w-6 h-6"
				}, null, _parent));
				_push(`</a>`);
			});
			_push(`<!--]--></div></div></div><div class="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-12 xl:p-16 shadow-card hover:shadow-elegant transition-all duration-300" data-aos="fade-left"><h3 class="text-2xl font-bold text-accent mb-6">Send a Message</h3><form class="space-y-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label for="name" class="block text-sm font-medium text-foreground mb-2">Name *</label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" class="${ssrRenderClass([unref(form).errors.name ? "border-destructive" : "border-border", "w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"])}" placeholder="Your name">`);
			if (unref(form).errors.name) _push(`<p class="mt-1.5 text-sm text-destructive">${ssrInterpolate(unref(form).errors.name)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div><label for="email" class="block text-sm font-medium text-foreground mb-2">Email *</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([unref(form).errors.email ? "border-destructive" : "border-border", "w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"])}" placeholder="your.email@example.com">`);
			if (unref(form).errors.email) _push(`<p class="mt-1.5 text-sm text-destructive">${ssrInterpolate(unref(form).errors.email)}</p>`);
			else _push(`<!---->`);
			_push(`</div></div><div><label for="subject" class="block text-sm font-medium text-foreground mb-2">Subject *</label><input id="subject"${ssrRenderAttr("value", unref(form).subject)} type="text" class="${ssrRenderClass([unref(form).errors.subject ? "border-destructive" : "border-border", "w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground"])}" placeholder="What&#39;s this about?">`);
			if (unref(form).errors.subject) _push(`<p class="mt-1.5 text-sm text-destructive">${ssrInterpolate(unref(form).errors.subject)}</p>`);
			else _push(`<!---->`);
			_push(`</div><div><label for="message" class="block text-sm font-medium text-foreground mb-2">Message *</label><textarea id="message" rows="5" class="${ssrRenderClass([unref(form).errors.message ? "border-destructive" : "border-border", "w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-foreground resize-none"])}" placeholder="Tell me about your project or just say hello...">${ssrInterpolate(unref(form).message)}</textarea>`);
			if (unref(form).errors.message) _push(`<p class="mt-1.5 text-sm text-destructive">${ssrInterpolate(unref(form).errors.message)}</p>`);
			else _push(`<!---->`);
			_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full flex items-center justify-center space-x-2 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">`);
			_push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faPaperPlane),
				class: "w-5 h-5"
			}, null, _parent));
			_push(`<span>${ssrInterpolate(unref(form).processing ? "Sending..." : "Send Message")}</span></button></form></div></div><div class="mt-8 pt-5 pb-1 border-t border-border text-center" data-aos="fade-up"><p class="text-muted-foreground">${ssrInterpolate(__props.ownerName)}</p><p class="text-sm text-muted-foreground mt-1">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(__props.ownerName)}. All rights reserved.</p></div></div>`);
			_push(ssrRenderComponent(Toast_default, {
				show: toast.value.show,
				title: toast.value.title,
				description: toast.value.description
			}, null, _parent));
			_push(`</section>`);
		};
	}
};
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/Contact.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Portfolio/ScrollToTopButton.vue
var _sfc_main$11 = {
	__name: "ScrollToTopButton",
	__ssrInlineRender: true,
	setup(__props) {
		const showScrollTop = ref(false);
		function handleScroll() {
			showScrollTop.value = window.scrollY > 400;
		}
		onMounted(() => window.addEventListener("scroll", handleScroll));
		onUnmounted(() => window.removeEventListener("scroll", handleScroll));
		return (_ctx, _push, _parent, _attrs) => {
			if (showScrollTop.value) {
				_push(`<button${ssrRenderAttrs(mergeProps({
					class: "fixed bottom-8 right-8 z-50 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300",
					"aria-label": "Scroll to top"
				}, _attrs))} data-v-3432b313>`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faArrowUp),
					class: "w-5 h-5"
				}, null, _parent));
				_push(`</button>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/ScrollToTopButton.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var ScrollToTopButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$11, [["__scopeId", "data-v-3432b313"]]);
//#endregion
//#region resources/js/Pages/Home.vue
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$10 });
var _sfc_main$10 = {
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		profile: {
			type: Object,
			default: () => ({})
		},
		skills: {
			type: Array,
			default: () => []
		},
		techStack: {
			type: Array,
			default: () => []
		},
		galleryImages: {
			type: Array,
			default: () => []
		},
		experiences: {
			type: Array,
			default: () => []
		},
		featuredProjects: {
			type: Array,
			default: () => []
		},
		otherProjects: {
			type: Array,
			default: () => []
		},
		education: {
			type: Array,
			default: () => []
		},
		certifications: {
			type: Array,
			default: () => []
		},
		skillGroups: {
			type: Array,
			default: () => []
		},
		latestBlogPosts: {
			type: Array,
			default: () => []
		},
		contactInfo: {
			type: Array,
			default: () => []
		},
		socialLinks: {
			type: Array,
			default: () => []
		}
	},
	setup(__props) {
		const props = __props;
		const seoTitle = computed(() => props.profile?.name ? `${props.profile.name} | Laravel & Vue.js Full Stack Developer` : "Portfolio");
		const seoDescription = computed(() => props.profile?.tagline || props.profile?.bio?.slice(0, 155) || "");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: seoTitle.value,
				description: seoDescription.value,
				canonical: "/",
				image: __props.profile?.profile_photo,
				"json-ld": {
					"@context": "https://schema.org",
					"@type": "Person",
					name: __props.profile?.name,
					jobTitle: __props.profile?.tagline,
					email: __props.profile?.email
				}
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background overflow-x-hidden">`);
			_push(ssrRenderComponent(_sfc_main$33, {
				"resume-url": __props.profile?.resume_file,
				"logo-url": __props.profile?.profile_photo
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$23, {
				name: __props.profile?.name,
				bio: __props.profile?.bio,
				"resume-url": __props.profile?.resume_file
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$20, {
				bio: __props.profile?.bio,
				skills: __props.skills,
				"tech-stack": __props.techStack,
				"gallery-images": __props.galleryImages,
				"profile-photo": __props.profile?.profile_photo
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$19, {
				experiences: __props.experiences,
				"resume-url": __props.profile?.resume_file
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$18, {
				"featured-projects": __props.featuredProjects,
				"other-projects": __props.otherProjects
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$17, {
				email: __props.profile?.email,
				"availability-status": __props.profile?.availability_status,
				"years-experience": __props.profile?.years_experience,
				"projects-delivered": __props.profile?.projects_delivered,
				"satisfaction-rate": __props.profile?.satisfaction_rate
			}, null, _parent));
			_push(ssrRenderComponent(Education_default, {
				education: __props.education,
				certifications: __props.certifications,
				"skill-groups": __props.skillGroups
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$15, { posts: __props.latestBlogPosts }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$14, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$12, {
				"contact-info": __props.contactInfo,
				"social-links": __props.socialLinks,
				"owner-name": __props.profile?.name
			}, null, _parent));
			_push(ssrRenderComponent(ScrollToTopButton_default, null, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DangerButton.vue
var _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var DangerButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/Components/Modal.vue
var _sfc_main$8 = {
	__name: "Modal",
	__ssrInlineRender: true,
	props: {
		show: {
			type: Boolean,
			default: false
		},
		maxWidth: {
			type: String,
			default: "2xl"
		},
		closeable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dialog = ref();
		const showSlot = ref(props.show);
		watch(() => props.show, () => {
			if (props.show) {
				document.body.style.overflow = "hidden";
				showSlot.value = true;
				dialog.value?.showModal();
			} else {
				document.body.style.overflow = "";
				setTimeout(() => {
					dialog.value?.close();
					showSlot.value = false;
				}, 200);
			}
		});
		const close = () => {
			if (props.closeable) emit("close");
		};
		const closeOnEscape = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				if (props.show) close();
			}
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = "";
		});
		const maxWidthClass = computed(() => {
			return {
				sm: "sm:max-w-sm",
				md: "sm:max-w-md",
				lg: "sm:max-w-lg",
				xl: "sm:max-w-xl",
				"2xl": "sm:max-w-2xl"
			}[props.maxWidth];
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<dialog${ssrRenderAttrs(mergeProps({
				class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
				ref_key: "dialog",
				ref: dialog
			}, _attrs))}><div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div class="fixed inset-0 transform transition-all" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div class="${ssrRenderClass([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"])}" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}">`);
			if (showSlot.value) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			else _push(`<!---->`);
			_push(`</div></div></dialog>`);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/SecondaryButton.vue
var _sfc_main$7 = {
	__name: "SecondaryButton",
	__ssrInlineRender: true,
	props: { type: {
		type: String,
		default: "button"
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${ssrRenderAttrs(mergeProps({
				type: __props.type,
				class: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
			}, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/DeleteUserForm.vue
var DeleteUserForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$6 });
var _sfc_main$6 = {
	__name: "DeleteUserForm",
	__ssrInlineRender: true,
	setup(__props) {
		const confirmingUserDeletion = ref(false);
		const passwordInput = ref(null);
		const form = useForm({ password: "" });
		const confirmUserDeletion = () => {
			confirmingUserDeletion.value = true;
			nextTick(() => passwordInput.value.focus());
		};
		const deleteUser = () => {
			form.delete(route("profile.destroy"), {
				preserveScroll: true,
				onSuccess: () => closeModal(),
				onError: () => passwordInput.value.focus(),
				onFinish: () => form.reset()
			});
		};
		const closeModal = () => {
			confirmingUserDeletion.value = false;
			form.clearErrors();
			form.reset();
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900"> Delete Account </h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
			_push(ssrRenderComponent(DangerButton_default, { onClick: confirmUserDeletion }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Delete Account`);
					else return [createTextVNode("Delete Account")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$8, {
				show: confirmingUserDeletion.value,
				onClose: closeModal
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$44, {
							for: "password",
							value: "Password",
							class: "sr-only"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$42, {
							id: "password",
							ref_key: "passwordInput",
							ref: passwordInput,
							modelValue: unref(form).password,
							"onUpdate:modelValue": ($event) => unref(form).password = $event,
							type: "password",
							class: "mt-1 block w-3/4",
							placeholder: "Password",
							onKeyup: deleteUser
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$45, {
							message: unref(form).errors.password,
							class: "mt-2"
						}, null, _parent, _scopeId));
						_push(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$7, { onClick: closeModal }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(DangerButton_default, {
							class: ["ms-3", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing,
							onClick: deleteUser
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Delete Account `);
								else return [createTextVNode(" Delete Account ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "p-6" }, [
						createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
						createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
						createVNode("div", { class: "mt-6" }, [
							createVNode(_sfc_main$44, {
								for: "password",
								value: "Password",
								class: "sr-only"
							}),
							createVNode(_sfc_main$42, {
								id: "password",
								ref_key: "passwordInput",
								ref: passwordInput,
								modelValue: unref(form).password,
								"onUpdate:modelValue": ($event) => unref(form).password = $event,
								type: "password",
								class: "mt-1 block w-3/4",
								placeholder: "Password",
								onKeyup: withKeys(deleteUser, ["enter"])
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							createVNode(_sfc_main$45, {
								message: unref(form).errors.password,
								class: "mt-2"
							}, null, 8, ["message"])
						]),
						createVNode("div", { class: "mt-6 flex justify-end" }, [createVNode(_sfc_main$7, { onClick: closeModal }, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}), createVNode(DangerButton_default, {
							class: ["ms-3", { "opacity-25": unref(form).processing }],
							disabled: unref(form).processing,
							onClick: deleteUser
						}, {
							default: withCtx(() => [createTextVNode(" Delete Account ")]),
							_: 1
						}, 8, ["class", "disabled"])])
					])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue
var UpdatePasswordForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$5 });
var _sfc_main$5 = {
	__name: "UpdatePasswordForm",
	__ssrInlineRender: true,
	setup(__props) {
		const passwordInput = ref(null);
		const currentPasswordInput = ref(null);
		const form = useForm({
			current_password: "",
			password: "",
			password_confirmation: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Update Password </h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
			_push(ssrRenderComponent(_sfc_main$44, {
				for: "current_password",
				value: "Current Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$42, {
				id: "current_password",
				ref_key: "currentPasswordInput",
				ref: currentPasswordInput,
				modelValue: unref(form).current_password,
				"onUpdate:modelValue": ($event) => unref(form).current_password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "current-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$45, {
				message: unref(form).errors.current_password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$44, {
				for: "password",
				value: "New Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$42, {
				id: "password",
				ref_key: "passwordInput",
				ref: passwordInput,
				modelValue: unref(form).password,
				"onUpdate:modelValue": ($event) => unref(form).password = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$45, {
				message: unref(form).errors.password,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$44, {
				for: "password_confirmation",
				value: "Confirm Password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$42, {
				id: "password_confirmation",
				modelValue: unref(form).password_confirmation,
				"onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
				type: "password",
				class: "mt-1 block w-full",
				autocomplete: "new-password"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$45, {
				message: unref(form).errors.password_confirmation,
				class: "mt-2"
			}, null, _parent));
			_push(`</div><div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(PrimaryButton_default, { disabled: unref(form).processing }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [createTextVNode("Save")];
				}),
				_: 1
			}, _parent));
			if (unref(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue
var UpdateProfileInformationForm_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$4 });
var _sfc_main$4 = {
	__name: "UpdateProfileInformationForm",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const user = usePage().props.auth.user;
		const form = useForm({
			name: user.name,
			email: user.email
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Profile Information </h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
			_push(ssrRenderComponent(_sfc_main$44, {
				for: "name",
				value: "Name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$42, {
				id: "name",
				type: "text",
				class: "mt-1 block w-full",
				modelValue: unref(form).name,
				"onUpdate:modelValue": ($event) => unref(form).name = $event,
				required: "",
				autofocus: "",
				autocomplete: "name"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$45, {
				class: "mt-2",
				message: unref(form).errors.name
			}, null, _parent));
			_push(`</div><div>`);
			_push(ssrRenderComponent(_sfc_main$44, {
				for: "email",
				value: "Email"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$42, {
				id: "email",
				type: "email",
				class: "mt-1 block w-full",
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				required: "",
				autocomplete: "username"
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$45, {
				class: "mt-2",
				message: unref(form).errors.email
			}, null, _parent));
			_push(`</div>`);
			if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
				_push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
				_push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("verification.send"),
					method: "post",
					as: "button",
					class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Click here to re-send the verification email. `);
						else return [createTextVNode(" Click here to re-send the verification email. ")];
					}),
					_: 1
				}, _parent));
				_push(`</p><div class="mt-2 text-sm font-medium text-green-600" style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}"> A new verification link has been sent to your email address. </div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(PrimaryButton_default, { disabled: unref(form).processing }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Save`);
					else return [createTextVNode("Save")];
				}),
				_: 1
			}, _parent));
			if (unref(form).recentlySuccessful) _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
			else _push(`<!---->`);
			_push(`</div></form></section>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Profile/Edit.vue
var Edit_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$3 });
var _sfc_main$3 = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		mustVerifyEmail: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$26, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Profile </h2>`);
					else return [createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Profile ")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$5, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$6, { class: "max-w-xl" }, null, _parent, _scopeId));
						_push(`</div></div></div>`);
					} else return [createVNode("div", { class: "py-12" }, [createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$4, {
							"must-verify-email": __props.mustVerifyEmail,
							status: __props.status,
							class: "max-w-xl"
						}, null, 8, ["must-verify-email", "status"])]),
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$5, { class: "max-w-xl" })]),
						createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [createVNode(_sfc_main$6, { class: "max-w-xl" })])
					])])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Projects/Index.vue
var Index_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$2 });
var _sfc_main$2 = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		projects: {
			type: Array,
			default: () => []
		},
		search: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const searchQuery = ref(__props.search);
		const isSearching = ref(false);
		let debounceTimer = null;
		watch(searchQuery, (value) => {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				router.get("/projects", value ? { search: value } : {}, {
					preserveState: true,
					preserveScroll: true,
					replace: true,
					onStart: () => isSearching.value = true,
					onFinish: () => isSearching.value = false
				});
			}, 300);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: "All Projects | Portfolio",
				description: "Browse the full archive of web platforms built with Laravel and Vue.js: e-commerce, fintech, AI tools, and mobile apps.",
				canonical: "/projects",
				"json-ld": {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "/"
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Projects",
						item: "/projects"
					}]
				}
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background">`);
			_push(ssrRenderComponent(_sfc_main$33, null, null, _parent));
			_push(`<div class="pt-32 pb-20 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="text-center mb-12" data-aos="fade-down"><span class="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6"> Project Archive </span><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">All Projects</h1><p class="text-lg text-muted-foreground max-w-2xl mx-auto"> A complete archive of platforms and applications I&#39;ve built, from e-commerce and fintech to AI-powered tools and mobile apps. </p></div><div class="mb-10" data-aos="fade-up"><div class="relative max-w-xl mx-auto">`);
			if (isSearching.value) _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faSpinner),
				class: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-spin"
			}, null, _parent));
			else _push(ssrRenderComponent(unref(FontAwesomeIcon), {
				icon: unref(faMagnifyingGlass),
				class: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
			}, null, _parent));
			_push(`<input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search projects by name or technology..." class="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"></div><div class="text-center text-sm text-muted-foreground mt-4"> Showing ${ssrInterpolate(__props.projects.length)} project(s) </div></div>`);
			if (__props.projects.length) {
				_push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
				ssrRenderList(__props.projects, (project) => {
					_push(`<div role="link" tabindex="0" class="group bg-card border border-border rounded-xl overflow-hidden card-hover hover:border-accent/50 transition-all duration-300 block cursor-pointer" data-aos="fade-up"><div class="relative h-48 overflow-hidden bg-accent/10"><img${ssrRenderAttr("src", project.images?.[0]?.image_path)}${ssrRenderAttr("alt", `Screenshot of ${project.title}`)} loading="lazy" decoding="async" width="600" height="400" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faEye),
						class: "w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"
					}, null, _parent));
					_push(`</div>`);
					if (project.is_featured) _push(`<span class="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full border bg-accent/20 text-accent border-accent/30"> Featured </span>`);
					else _push(`<!---->`);
					_push(`</div><div class="p-5 sm:p-6"><h3 class="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">${ssrInterpolate(project.title)}</h3><p class="text-muted-foreground text-sm mb-4 line-clamp-2">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2 mb-4"><!--[-->`);
					ssrRenderList(project.technologies.slice(0, 3), (tech) => {
						_push(`<span class="text-xs font-mono text-accent px-2 py-1 bg-accent/10 rounded-full border border-accent/20">${ssrInterpolate(tech.name)}</span>`);
					});
					_push(`<!--]-->`);
					if (project.technologies.length > 3) _push(`<span class="text-xs font-mono text-muted-foreground px-2 py-1"> +${ssrInterpolate(project.technologies.length - 3)}</span>`);
					else _push(`<!---->`);
					_push(`</div><div class="flex items-center gap-3">`);
					if (project.github_url) {
						_push(`<a${ssrRenderAttr("href", project.github_url)} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform" aria-label="View GitHub repository">`);
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faGithub),
							class: "w-5 h-5"
						}, null, _parent));
						_push(`</a>`);
					} else _push(`<!---->`);
					if (project.live_url) {
						_push(`<a${ssrRenderAttr("href", project.live_url)} target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform" aria-label="View live project">`);
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faArrowUpRightFromSquare),
							class: "w-5 h-5"
						}, null, _parent));
						_push(`</a>`);
					} else _push(`<!---->`);
					_push(`</div></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else {
				_push(`<div class="text-center py-16">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faMagnifyingGlass),
					class: "w-16 h-16 mb-4 text-muted-foreground mx-auto"
				}, null, _parent));
				_push(`<h3 class="text-xl font-semibold text-foreground mb-2">No projects found</h3><p class="text-muted-foreground">Try a different search term</p></div>`);
			}
			_push(`<div class="text-center mt-16">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/50 rounded-lg text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Back to Home `);
					else return [createTextVNode(" Back to Home ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Projects/Index.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Projects/Show.vue
var Show_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main$1 });
var _sfc_main$1 = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { project: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const page = usePage();
		const seoDescription = computed(() => truncateForMeta(props.project.description || ""));
		const currentImageIndex = ref(0);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_sfc_main$34, {
				title: `${__props.project.title} | Portfolio`,
				description: seoDescription.value,
				canonical: `/project/${__props.project.slug}`,
				image: __props.project.images?.[0]?.image_path,
				type: "article",
				"json-ld": [{
					"@context": "https://schema.org",
					"@type": "CreativeWork",
					name: __props.project.title,
					description: seoDescription.value,
					image: __props.project.images?.[0]?.image_path,
					keywords: __props.project.technologies?.map((t) => t.name).join(", "),
					url: `${unref(page).props.siteUrl}/project/${__props.project.slug}`
				}, {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Projects",
							item: "/projects"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: __props.project.title,
							item: `/project/${__props.project.slug}`
						}
					]
				}]
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background">`);
			_push(ssrRenderComponent(_sfc_main$33, null, null, _parent));
			_push(`<div class="pt-24 section-padding"><div class="max-w-6xl mx-auto">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors mb-8"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(FontAwesomeIcon), {
							icon: unref(faArrowLeft),
							class: "w-5 h-5"
						}, null, _parent, _scopeId));
						_push(`<span${_scopeId}>Back to Portfolio</span>`);
					} else return [createVNode(unref(FontAwesomeIcon), {
						icon: unref(faArrowLeft),
						class: "w-5 h-5"
					}, null, 8, ["icon"]), createVNode("span", null, "Back to Portfolio")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mb-12"><h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">${ssrInterpolate(__props.project.title)}</h1><p class="text-xl text-muted-foreground mb-8">${ssrInterpolate(__props.project.description)}</p><div class="flex flex-wrap gap-4">`);
			if (__props.project.live_url) {
				_push(`<a${ssrRenderAttr("href", __props.project.live_url)} target="_blank" rel="noopener noreferrer" class="btn-outline-cyan inline-flex items-center space-x-2">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faArrowUpRightFromSquare),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>Live Demo</span></a>`);
			} else _push(`<!---->`);
			if (__props.project.github_url) {
				_push(`<a${ssrRenderAttr("href", __props.project.github_url)} target="_blank" rel="noopener noreferrer" class="btn-outline inline-flex items-center space-x-2">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faGithub),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>View Code</span></a>`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
			if (__props.project.images?.length) {
				_push(`<div class="mb-12"><div class="relative bg-card border border-border rounded-lg overflow-hidden"><div class="aspect-video relative"><img${ssrRenderAttr("src", __props.project.images[currentImageIndex.value].image_path)}${ssrRenderAttr("alt", `${__props.project.title} screenshot ${currentImageIndex.value + 1}`)} decoding="async" width="1200" height="675" class="w-full h-full object-cover">`);
				if (__props.project.images.length > 1) {
					_push(`<!--[--><button aria-label="Previous screenshot" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faChevronLeft),
						class: "w-6 h-6 text-foreground"
					}, null, _parent));
					_push(`</button><button aria-label="Next screenshot" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-colors">`);
					_push(ssrRenderComponent(unref(FontAwesomeIcon), {
						icon: unref(faChevronRight),
						class: "w-6 h-6 text-foreground"
					}, null, _parent));
					_push(`</button><!--]-->`);
				} else _push(`<!---->`);
				_push(`</div>`);
				if (__props.project.images.length > 1) {
					_push(`<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"><!--[-->`);
					ssrRenderList(__props.project.images, (image, index) => {
						_push(`<button${ssrRenderAttr("aria-label", `Go to screenshot ${index + 1}`)} class="${ssrRenderClass([index === currentImageIndex.value ? "bg-accent" : "bg-muted-foreground/50", "w-3 h-3 rounded-full transition-colors"])}"></button>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="lg:col-span-2 space-y-8">`);
			if (__props.project.long_description) _push(`<section><h2 class="text-2xl font-bold text-foreground mb-4">Project Overview</h2><p class="text-muted-foreground leading-relaxed">${ssrInterpolate(__props.project.long_description)}</p></section>`);
			else _push(`<!---->`);
			if (__props.project.features?.length) {
				_push(`<section><h2 class="text-2xl font-bold text-foreground mb-4">Key Features</h2><ul class="space-y-3"><!--[-->`);
				ssrRenderList(__props.project.features, (feature, index) => {
					_push(`<li class="flex items-start space-x-3"><div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div><span class="text-muted-foreground">${ssrInterpolate(feature)}</span></li>`);
				});
				_push(`<!--]--></ul></section>`);
			} else _push(`<!---->`);
			if (__props.project.challenges?.length) {
				_push(`<section><h2 class="text-2xl font-bold text-foreground mb-4">Challenges &amp; Solutions</h2><ul class="space-y-3"><!--[-->`);
				ssrRenderList(__props.project.challenges, (challenge, index) => {
					_push(`<li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-muted-foreground">${ssrInterpolate(challenge)}</span></li>`);
				});
				_push(`<!--]--></ul></section>`);
			} else _push(`<!---->`);
			_push(`</div><div class="space-y-8"><section class="bg-card border border-border rounded-lg p-6"><h3 class="text-xl font-semibold text-foreground mb-4">Technologies Used</h3><div class="flex flex-wrap gap-2"><!--[-->`);
			ssrRenderList(__props.project.technologies, (tech) => {
				_push(`<span class="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-accent font-medium">${ssrInterpolate(tech.name)}</span>`);
			});
			_push(`<!--]--></div></section><section class="bg-card border border-border rounded-lg p-6"><h3 class="text-xl font-semibold text-foreground mb-4">Project Links</h3><div class="space-y-3">`);
			if (__props.project.live_url) {
				_push(`<a${ssrRenderAttr("href", __props.project.live_url)} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faArrowUpRightFromSquare),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>Live Demo</span></a>`);
			} else _push(`<!---->`);
			if (__props.project.github_url) {
				_push(`<a${ssrRenderAttr("href", __props.project.github_url)} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors">`);
				_push(ssrRenderComponent(unref(FontAwesomeIcon), {
					icon: unref(faGithub),
					class: "w-4 h-4"
				}, null, _parent));
				_push(`<span>Source Code</span></a>`);
			} else _push(`<!---->`);
			_push(`</div></section></div></div></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Projects/Show.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Welcome.vue
var Welcome_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main });
var _sfc_main = {
	__name: "Welcome",
	__ssrInlineRender: true,
	props: {
		canLogin: { type: Boolean },
		canRegister: { type: Boolean },
		laravelVersion: {
			type: String,
			required: true
		},
		phpVersion: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
			_push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:col-start-2 lg:justify-center"><svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="currentColor"></path></svg></div>`);
			if (__props.canLogin) {
				_push(`<nav class="-mx-3 flex flex-1 justify-end">`);
				if (_ctx.$page.props.auth.user) _push(ssrRenderComponent(unref(Link), {
					href: _ctx.route("dashboard"),
					class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Dashboard `);
						else return [createTextVNode(" Dashboard ")];
					}),
					_: 1
				}, _parent));
				else {
					_push(`<!--[-->`);
					_push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("login"),
						class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Log in `);
							else return [createTextVNode(" Log in ")];
						}),
						_: 1
					}, _parent));
					if (__props.canRegister) _push(ssrRenderComponent(unref(Link), {
						href: _ctx.route("register"),
						class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(` Register `);
							else return [createTextVNode(" Register ")];
						}),
						_: 1
					}, _parent));
					else _push(`<!---->`);
					_push(`<!--]-->`);
				}
				_push(`</nav>`);
			} else _push(`<!---->`);
			_push(`</header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8"><a href="https://laravel.com/docs" id="docs-card" class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div id="screenshot-container" class="relative flex w-full flex-1 items-stretch"><img src="https://laravel.com/assets/img/welcome/docs-light.svg" alt="Laravel documentation screenshot" class="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"><img src="https://laravel.com/assets/img/welcome/docs-dark.svg" alt="Laravel documentation screenshot" class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"><div class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div></div><div class="relative flex items-center gap-6 lg:items-end"><div id="docs-card-content" class="flex items-start gap-6 lg:flex-col"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF2D20" d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"></path><path fill="#FF2D20" d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"></path></svg></div><div class="pt-3 sm:pt-5 lg:pt-0"><h2 class="text-xl font-semibold text-black dark:text-white"> Documentation </h2><p class="mt-4 text-sm/relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div></div><svg class="size-6 shrink-0 stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></div></a><a href="https://laracasts.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laracasts </h2><p class="mt-4 text-sm/relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"></path><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laravel News </h2><p class="mt-4 text-sm/relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Vibrant Ecosystem </h2><p class="mt-4 text-sm/relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]">Forge</a>, <a href="https://vapor.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Vapor</a>, <a href="https://nova.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Nova</a>, <a href="https://envoyer.io" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Envoyer</a>, and <a href="https://herd.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Herd</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Echo</a>, <a href="https://laravel.com/docs/horizon" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Telescope</a>, and more. </p></div></div></div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region vendor/tightenco/ziggy/dist/index.esm.js
function t(t, e) {
	for (var n = 0; n < e.length; n++) {
		var r = e[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r);
	}
}
function e(e, n, r) {
	return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n() {
	return n = Object.assign ? Object.assign.bind() : function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = arguments[e];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (t[r] = n[r]);
		}
		return t;
	}, n.apply(null, arguments);
}
function r(t) {
	return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
		return t.__proto__ || Object.getPrototypeOf(t);
	}, r(t);
}
function o() {
	try {
		var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch (t) {}
	return (o = function() {
		return !!t;
	})();
}
function i(t, e) {
	return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, i(t, e);
}
function u(t) {
	var e = function(t) {
		if ("object" != typeof t || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var n = e.call(t, "string");
			if ("object" != typeof n) return n;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return String(t);
	}(t);
	return "symbol" == typeof e ? e : e + "";
}
function f(t) {
	var e = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
	return f = function(t) {
		if (null === t || !function(t) {
			try {
				return -1 !== Function.toString.call(t).indexOf("[native code]");
			} catch (e) {
				return "function" == typeof t;
			}
		}(t)) return t;
		if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== e) {
			if (e.has(t)) return e.get(t);
			e.set(t, n);
		}
		function n() {
			return function(t, e, n) {
				if (o()) return Reflect.construct.apply(null, arguments);
				var r = [null];
				r.push.apply(r, e);
				var u = new (t.bind.apply(t, r))();
				return n && i(u, n.prototype), u;
			}(t, arguments, r(this).constructor);
		}
		return n.prototype = Object.create(t.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), i(n, t);
	}, f(t);
}
var c = String.prototype.replace;
var a = /%20/g;
var l = {
	RFC1738: function(t) {
		return c.call(t, a, "+");
	},
	RFC3986: function(t) {
		return String(t);
	}
};
var s = "RFC3986";
var p = Object.prototype.hasOwnProperty;
var y = Array.isArray;
var d = /* @__PURE__ */ new WeakMap();
var b = function(t, e) {
	return d.set(t, e), t;
};
function v(t) {
	return d.has(t);
}
var h$1 = function(t) {
	return d.get(t);
};
var m = function(t, e) {
	d.set(t, e);
};
var g = function() {
	const t = [];
	for (let e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
	return t;
}();
var w = function(t, e) {
	const n = e && e.plainObjects ? Object.create(null) : {};
	for (let e = 0; e < t.length; ++e) void 0 !== t[e] && (n[e] = t[e]);
	return n;
};
var j = function t(e, n, r) {
	if (!n) return e;
	if ("object" != typeof n) {
		if (y(e)) e.push(n);
		else {
			if (!e || "object" != typeof e) return [e, n];
			if (v(e)) {
				var o = h$1(e) + 1;
				e[o] = n, m(e, o);
			} else (r && (r.plainObjects || r.allowPrototypes) || !p.call(Object.prototype, n)) && (e[n] = !0);
		}
		return e;
	}
	if (!e || "object" != typeof e) {
		if (v(n)) {
			for (var i = Object.keys(n), u = r && r.plainObjects ? {
				__proto__: null,
				0: e
			} : { 0: e }, f = 0; f < i.length; f++) u[parseInt(i[f], 10) + 1] = n[i[f]];
			return b(u, h$1(n) + 1);
		}
		return [e].concat(n);
	}
	let c = e;
	return y(e) && !y(n) && (c = w(e, r)), y(e) && y(n) ? (n.forEach(function(n, o) {
		if (p.call(e, o)) {
			const i = e[o];
			i && "object" == typeof i && n && "object" == typeof n ? e[o] = t(i, n, r) : e.push(n);
		} else e[o] = n;
	}), e) : Object.keys(n).reduce(function(e, o) {
		const i = n[o];
		return e[o] = p.call(e, o) ? t(e[o], i, r) : i, e;
	}, c);
};
var O = 1024;
var E = function(t, e, n, r) {
	if (v(t)) {
		var o = h$1(t) + 1;
		return t[o] = e, m(t, o), t;
	}
	var i = [].concat(t, e);
	return i.length > n ? b(w(i, { plainObjects: r }), i.length - 1) : i;
};
var T = function(t, e) {
	if (y(t)) {
		const n = [];
		for (let r = 0; r < t.length; r += 1) n.push(e(t[r]));
		return n;
	}
	return e(t);
};
var R = Object.prototype.hasOwnProperty;
var k = {
	brackets: function(t) {
		return t + "[]";
	},
	comma: "comma",
	indices: function(t, e) {
		return t + "[" + e + "]";
	},
	repeat: function(t) {
		return t;
	}
};
var S = Array.isArray;
var I = Array.prototype.push;
var A = function(t, e) {
	I.apply(t, S(e) ? e : [e]);
};
var D = Date.prototype.toISOString;
var $ = {
	addQueryPrefix: !1,
	allowDots: !1,
	allowEmptyArrays: !1,
	arrayFormat: "indices",
	charset: "utf-8",
	charsetSentinel: !1,
	delimiter: "&",
	encode: !0,
	encodeDotInKeys: !1,
	encoder: function(t, e, n, r, o) {
		if (0 === t.length) return t;
		let i = t;
		if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, function(t) {
			return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
		});
		let u = "";
		for (let t = 0; t < i.length; t += O) {
			const e = i.length >= O ? i.slice(t, t + O) : i, n = [];
			for (let t = 0; t < e.length; ++t) {
				let r = e.charCodeAt(t);
				45 === r || 46 === r || 95 === r || 126 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 || "RFC1738" === o && (40 === r || 41 === r) ? n[n.length] = e.charAt(t) : r < 128 ? n[n.length] = g[r] : r < 2048 ? n[n.length] = g[192 | r >> 6] + g[128 | 63 & r] : r < 55296 || r >= 57344 ? n[n.length] = g[224 | r >> 12] + g[128 | r >> 6 & 63] + g[128 | 63 & r] : (t += 1, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(t)), n[n.length] = g[240 | r >> 18] + g[128 | r >> 12 & 63] + g[128 | r >> 6 & 63] + g[128 | 63 & r]);
			}
			u += n.join("");
		}
		return u;
	},
	encodeValuesOnly: !1,
	format: s,
	formatter: l[s],
	indices: !1,
	serializeDate: function(t) {
		return D.call(t);
	},
	skipNulls: !1,
	strictNullHandling: !1
};
var N = {};
var _ = function(t, e, n, r, o, i, u, f, c, a, l, s, p, y, d, b, v, h) {
	let m = t, g = h, w = 0, j = !1;
	for (; void 0 !== (g = g.get(N)) && !j;) {
		const e = g.get(t);
		if (w += 1, void 0 !== e) {
			if (e === w) throw new RangeError("Cyclic object value");
			j = !0;
		}
		void 0 === g.get(N) && (w = 0);
	}
	if ("function" == typeof a ? m = a(e, m) : m instanceof Date ? m = p(m) : "comma" === n && S(m) && (m = T(m, function(t) {
		return t instanceof Date ? p(t) : t;
	})), null === m) {
		if (i) return c && !b ? c(e, $.encoder, v, "key", y) : e;
		m = "";
	}
	if ("string" == typeof (O = m) || "number" == typeof O || "boolean" == typeof O || "symbol" == typeof O || "bigint" == typeof O || function(t) {
		return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
	}(m)) return c ? [d(b ? e : c(e, $.encoder, v, "key", y)) + "=" + d(c(m, $.encoder, v, "value", y))] : [d(e) + "=" + d(String(m))];
	var O;
	const E = [];
	if (void 0 === m) return E;
	let R;
	if ("comma" === n && S(m)) b && c && (m = T(m, c)), R = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
	else if (S(a)) R = a;
	else {
		const t = Object.keys(m);
		R = l ? t.sort(l) : t;
	}
	const k = f ? e.replace(/\./g, "%2E") : e, I = r && S(m) && 1 === m.length ? k + "[]" : k;
	if (o && S(m) && 0 === m.length) return I + "[]";
	for (let e = 0; e < R.length; ++e) {
		const g = R[e], j = "object" == typeof g && void 0 !== g.value ? g.value : m[g];
		if (u && null === j) continue;
		const O = s && f ? g.replace(/\./g, "%2E") : g, T = S(m) ? "function" == typeof n ? n(I, O) : I : I + (s ? "." + O : "[" + O + "]");
		h.set(t, w);
		const k = /* @__PURE__ */ new WeakMap();
		k.set(N, h), A(E, _(j, T, n, r, o, i, u, f, "comma" === n && b && S(m) ? null : c, a, l, s, p, y, d, b, v, k));
	}
	return E;
};
var x = Object.prototype.hasOwnProperty;
var C = Array.isArray;
var P = {
	allowDots: !1,
	allowEmptyArrays: !1,
	allowPrototypes: !1,
	allowSparse: !1,
	arrayLimit: 20,
	charset: "utf-8",
	charsetSentinel: !1,
	comma: !1,
	decodeDotInKeys: !1,
	decoder: function(t, e, n) {
		const r = t.replace(/\+/g, " ");
		if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
		try {
			return decodeURIComponent(r);
		} catch (t) {
			return r;
		}
	},
	delimiter: "&",
	depth: 5,
	duplicates: "combine",
	ignoreQueryPrefix: !1,
	interpretNumericEntities: !1,
	parameterLimit: 1e3,
	parseArrays: !0,
	plainObjects: !1,
	strictNullHandling: !1
};
var Z = function(t) {
	return t.replace(/&#(\d+);/g, function(t, e) {
		return String.fromCharCode(parseInt(e, 10));
	});
};
var F = function(t, e) {
	return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
};
var U = function(t, e, n, r) {
	if (!t) return;
	const o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/g;
	let u = n.depth > 0 && /(\[[^[\]]*])/.exec(o);
	const f = u ? o.slice(0, u.index) : o, c = [];
	if (f) {
		if (!n.plainObjects && x.call(Object.prototype, f) && !n.allowPrototypes) return;
		c.push(f);
	}
	let a = 0;
	for (; n.depth > 0 && null !== (u = i.exec(o)) && a < n.depth;) {
		if (a += 1, !n.plainObjects && x.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
		c.push(u[1]);
	}
	return u && c.push("[" + o.slice(u.index) + "]"), function(t, e, n, r) {
		let o = r ? e : F(e, n);
		for (let e = t.length - 1; e >= 0; --e) {
			let r;
			const i = t[e];
			if ("[]" === i && n.parseArrays) r = v(o) ? o : n.allowEmptyArrays && ("" === o || n.strictNullHandling && null === o) ? [] : E([], o, n.arrayLimit, n.plainObjects);
			else {
				r = n.plainObjects ? Object.create(null) : {};
				const t = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i, e = n.decodeDotInKeys ? t.replace(/%2E/g, ".") : t, u = parseInt(e, 10);
				n.parseArrays || "" !== e ? !isNaN(u) && i !== e && String(u) === e && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (r = [], r[u] = o) : "__proto__" !== e && (r[e] = o) : r = { 0: o };
			}
			o = r;
		}
		return o;
	}(c, e, n, r);
};
function q(t, e) {
	const n = function(t) {
		if (!t) return P;
		if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
		if (void 0 !== t.decodeDotInKeys && "boolean" != typeof t.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
		if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
		if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
		const e = void 0 === t.charset ? P.charset : t.charset, n = void 0 === t.duplicates ? P.duplicates : t.duplicates;
		if ("combine" !== n && "first" !== n && "last" !== n) throw new TypeError("The duplicates option must be either combine, first, or last");
		return {
			allowDots: void 0 === t.allowDots ? !0 === t.decodeDotInKeys || P.allowDots : !!t.allowDots,
			allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : P.allowEmptyArrays,
			allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : P.allowPrototypes,
			allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : P.allowSparse,
			arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : P.arrayLimit,
			charset: e,
			charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : P.charsetSentinel,
			comma: "boolean" == typeof t.comma ? t.comma : P.comma,
			decodeDotInKeys: "boolean" == typeof t.decodeDotInKeys ? t.decodeDotInKeys : P.decodeDotInKeys,
			decoder: "function" == typeof t.decoder ? t.decoder : P.decoder,
			delimiter: "string" == typeof t.delimiter || (r = t.delimiter, "[object RegExp]" === Object.prototype.toString.call(r)) ? t.delimiter : P.delimiter,
			depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : P.depth,
			duplicates: n,
			ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
			interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : P.interpretNumericEntities,
			parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : P.parameterLimit,
			parseArrays: !1 !== t.parseArrays,
			plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : P.plainObjects,
			strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : P.strictNullHandling
		};
		var r;
	}(e);
	if ("" === t || null == t) return n.plainObjects ? Object.create(null) : {};
	const r = "string" == typeof t ? function(t, e) {
		const n = { __proto__: null }, r = (e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(e.delimiter, Infinity === e.parameterLimit ? void 0 : e.parameterLimit);
		let o, i = -1, u = e.charset;
		if (e.charsetSentinel) for (o = 0; o < r.length; ++o) 0 === r[o].indexOf("utf8=") && ("utf8=%E2%9C%93" === r[o] ? u = "utf-8" : "utf8=%26%2310003%3B" === r[o] && (u = "iso-8859-1"), i = o, o = r.length);
		for (o = 0; o < r.length; ++o) {
			if (o === i) continue;
			const t = r[o], f = t.indexOf("]="), c = -1 === f ? t.indexOf("=") : f + 1;
			let a, l;
			-1 === c ? (a = e.decoder(t, P.decoder, u, "key"), l = e.strictNullHandling ? null : "") : (a = e.decoder(t.slice(0, c), P.decoder, u, "key"), l = T(F(t.slice(c + 1), e), function(t) {
				return e.decoder(t, P.decoder, u, "value");
			})), l && e.interpretNumericEntities && "iso-8859-1" === u && (l = Z(l)), t.indexOf("[]=") > -1 && (l = C(l) ? [l] : l);
			const s = x.call(n, a);
			s && "combine" === e.duplicates ? n[a] = E(n[a], l, e.arrayLimit, e.plainObjects) : s && "last" !== e.duplicates || (n[a] = l);
		}
		return n;
	}(t, n) : t;
	let o = n.plainObjects ? Object.create(null) : {};
	const i = Object.keys(r);
	for (let e = 0; e < i.length; ++e) {
		const u = i[e], f = U(u, r[u], n, "string" == typeof t);
		o = j(o, f, n);
	}
	return !0 === n.allowSparse ? o : function(t) {
		const e = [{
			obj: { o: t },
			prop: "o"
		}], n = [];
		for (let t = 0; t < e.length; ++t) {
			const r = e[t], o = r.obj[r.prop], i = Object.keys(o);
			for (let t = 0; t < i.length; ++t) {
				const r = i[t], u = o[r];
				"object" == typeof u && null !== u && -1 === n.indexOf(u) && (e.push({
					obj: o,
					prop: r
				}), n.push(u));
			}
		}
		return function(t) {
			for (; t.length > 1;) {
				const e = t.pop(), n = e.obj[e.prop];
				if (y(n)) {
					const t = [];
					for (let e = 0; e < n.length; ++e) void 0 !== n[e] && t.push(n[e]);
					e.obj[e.prop] = t;
				}
			}
		}(e), t;
	}(o);
}
var K = /*#__PURE__*/ function() {
	function t(t, e, n) {
		var r, o;
		this.name = t, this.definition = e, this.bindings = null != (r = e.bindings) ? r : {}, this.wheres = null != (o = e.wheres) ? o : {}, this.config = n;
	}
	var n = t.prototype;
	return n.matchesUrl = function(t) {
		var e, n = this;
		if (!this.definition.methods.includes("GET")) return !1;
		var r = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, function(t, e, r, o) {
			var i, u = "(?<" + r + ">" + ((null == (i = n.wheres[r]) ? void 0 : i.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
			return o ? "(" + e + u + ")?" : "" + e + u;
		}).replace(/^\w+:\/\//, ""), o = t.replace(/^\w+:\/\//, "").split("?"), i = o[0], u = o[1], f = null != (e = new RegExp("^" + r + "/?$").exec(i)) ? e : new RegExp("^" + r + "/?$").exec(decodeURI(i));
		if (f) {
			for (var c in f.groups) f.groups[c] = "string" == typeof f.groups[c] ? decodeURIComponent(f.groups[c]) : f.groups[c];
			return {
				params: f.groups,
				query: q(u)
			};
		}
		return !1;
	}, n.compile = function(t) {
		var e = this;
		return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n, r, o) {
			var i, u;
			if (!o && [null, void 0].includes(t[r])) throw new Error("Ziggy error: '" + r + "' parameter is required for route '" + e.name + "'.");
			if (e.wheres[r] && !new RegExp("^" + (o ? "(" + e.wheres[r] + ")?" : e.wheres[r]) + "$").test(null != (u = t[r]) ? u : "")) throw new Error("Ziggy error: '" + r + "' parameter '" + t[r] + "' does not match required format '" + e.wheres[r] + "' for route '" + e.name + "'.");
			return encodeURI(null != (i = t[r]) ? i : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
		}).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
	}, e(t, [
		{
			key: "template",
			get: function() {
				var t = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
				return "" === t ? "/" : t;
			}
		},
		{
			key: "origin",
			get: function() {
				return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
			}
		},
		{
			key: "parameterSegments",
			get: function() {
				var t, e;
				return null != (t = null == (e = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e.map(function(t) {
					return {
						name: t.replace(/{|\??}/g, ""),
						required: !/\?}$/.test(t)
					};
				})) ? t : [];
			}
		}
	]);
}();
var z = /*#__PURE__*/ function(t) {
	function r(e, r, o, i) {
		var u;
		if (void 0 === o && (o = !0), (u = t.call(this) || this).t = null != i ? i : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !u.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), u.t = globalThis.Ziggy), u.t = n({}, u.t, { absolute: o }), e) {
			if (!u.t.routes[e]) throw new Error("Ziggy error: route '" + e + "' is not in the route list.");
			u.i = new K(e, u.t.routes[e], u.t), u.u = u.l(r);
		}
		return u;
	}
	var o, u = t;
	(o = r).prototype = Object.create(u.prototype), o.prototype.constructor = o, i(o, u);
	var f = r.prototype;
	return f.toString = function() {
		var t = this, e = Object.keys(this.u).filter(function(e) {
			return !t.i.parameterSegments.some(function(t) {
				return t.name === e;
			});
		}).filter(function(t) {
			return "_query" !== t;
		}).reduce(function(e, r) {
			var o;
			return n({}, e, ((o = {})[r] = t.u[r], o));
		}, {});
		return this.i.compile(this.u) + function(t, e) {
			let n = t;
			const r = function(t) {
				if (!t) return $;
				if (void 0 !== t.allowEmptyArrays && "boolean" != typeof t.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
				if (void 0 !== t.encodeDotInKeys && "boolean" != typeof t.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
				if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
				const e = t.charset || $.charset;
				if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
				let n = s;
				if (void 0 !== t.format) {
					if (!R.call(l, t.format)) throw new TypeError("Unknown format option provided.");
					n = t.format;
				}
				const r = l[n];
				let o, i = $.filter;
				if (("function" == typeof t.filter || S(t.filter)) && (i = t.filter), o = t.arrayFormat in k ? t.arrayFormat : "indices" in t ? t.indices ? "indices" : "repeat" : $.arrayFormat, "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
				return {
					addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : $.addQueryPrefix,
					allowDots: void 0 === t.allowDots ? !0 === t.encodeDotInKeys || $.allowDots : !!t.allowDots,
					allowEmptyArrays: "boolean" == typeof t.allowEmptyArrays ? !!t.allowEmptyArrays : $.allowEmptyArrays,
					arrayFormat: o,
					charset: e,
					charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : $.charsetSentinel,
					commaRoundTrip: t.commaRoundTrip,
					delimiter: void 0 === t.delimiter ? $.delimiter : t.delimiter,
					encode: "boolean" == typeof t.encode ? t.encode : $.encode,
					encodeDotInKeys: "boolean" == typeof t.encodeDotInKeys ? t.encodeDotInKeys : $.encodeDotInKeys,
					encoder: "function" == typeof t.encoder ? t.encoder : $.encoder,
					encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : $.encodeValuesOnly,
					filter: i,
					format: n,
					formatter: r,
					serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : $.serializeDate,
					skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : $.skipNulls,
					sort: "function" == typeof t.sort ? t.sort : null,
					strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : $.strictNullHandling
				};
			}(e);
			let o, i;
			"function" == typeof r.filter ? (i = r.filter, n = i("", n)) : S(r.filter) && (i = r.filter, o = i);
			const u = [];
			if ("object" != typeof n || null === n) return "";
			const f = k[r.arrayFormat], c = "comma" === f && r.commaRoundTrip;
			o || (o = Object.keys(n)), r.sort && o.sort(r.sort);
			const a = /* @__PURE__ */ new WeakMap();
			for (let t = 0; t < o.length; ++t) {
				const e = o[t];
				r.skipNulls && null === n[e] || A(u, _(n[e], e, f, c, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, a));
			}
			const p = u.join(r.delimiter);
			let y = !0 === r.addQueryPrefix ? "?" : "";
			return r.charsetSentinel && (y += "iso-8859-1" === r.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), p.length > 0 ? y + p : "";
		}(n({}, e, this.u._query), {
			addQueryPrefix: !0,
			arrayFormat: "indices",
			encodeValuesOnly: !0,
			skipNulls: !0,
			encoder: function(t, e) {
				return "boolean" == typeof t ? Number(t) : e(t);
			}
		});
	}, f.p = function(t) {
		var e = this;
		t ? this.t.absolute && t.startsWith("/") && (t = this.v().host + t) : t = this.h();
		var r = {}, o = Object.entries(this.t.routes).find(function(n) {
			return r = new K(n[0], n[1], e.t).matchesUrl(t);
		}) || [void 0, void 0];
		return n({ name: o[0] }, r, { route: o[1] });
	}, f.h = function() {
		var t = this.v(), e = t.pathname, n = t.search;
		return (this.t.absolute ? t.host + e : e.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
	}, f.current = function(t, e) {
		var r = this.p(), o = r.name, i = r.params, u = r.query, f = r.route;
		if (!t) return o;
		var c = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
		if ([null, void 0].includes(e) || !c) return c;
		var a = new K(o, f, this.t);
		e = this.l(e, a);
		var l = n({}, i, u);
		if (Object.values(e).every(function(t) {
			return !t;
		}) && !Object.values(l).some(function(t) {
			return void 0 !== t;
		})) return !0;
		var s = function(t, e) {
			return Object.entries(t).every(function(t) {
				var n = t[0], r = t[1];
				return Array.isArray(r) && Array.isArray(e[n]) ? r.every(function(t) {
					return e[n].includes(t) || e[n].includes(decodeURIComponent(t));
				}) : "object" == typeof r && "object" == typeof e[n] && null !== r && null !== e[n] ? s(r, e[n]) : e[n] == r || e[n] == decodeURIComponent(r);
			});
		};
		return s(e, l);
	}, f.v = function() {
		var t, e, n, r, o, i, u = "undefined" != typeof window ? window.location : {}, f = u.host, c = u.pathname, a = u.search;
		return {
			host: null != (t = null == (e = this.t.location) ? void 0 : e.host) ? t : void 0 === f ? "" : f,
			pathname: null != (n = null == (r = this.t.location) ? void 0 : r.pathname) ? n : void 0 === c ? "" : c,
			search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === a ? "" : a
		};
	}, f.has = function(t) {
		return this.t.routes.hasOwnProperty(t);
	}, f.l = function(t, e) {
		var r = this;
		void 0 === t && (t = {}), void 0 === e && (e = this.i), t ??= {}, t = ["string", "number"].includes(typeof t) ? [t] : t;
		var o = e.parameterSegments.filter(function(t) {
			return !r.t.defaults[t.name];
		});
		if (Array.isArray(t)) t = t.reduce(function(t, e, r) {
			var i, u;
			return n({}, t, o[r] ? ((i = {})[o[r].name] = e, i) : "object" == typeof e ? e : ((u = {})[e] = "", u));
		}, {});
		else if (1 === o.length && !t.hasOwnProperty(o[0].name) && (t.hasOwnProperty(Object.values(e.bindings)[0]) || t.hasOwnProperty("id"))) {
			var i;
			(i = {})[o[0].name] = t, t = i;
		}
		return n({}, this.m(e), this.j(t, e));
	}, f.m = function(t) {
		var e = this;
		return t.parameterSegments.filter(function(t) {
			return e.t.defaults[t.name];
		}).reduce(function(t, r, o) {
			var i, u = r.name;
			return n({}, t, ((i = {})[u] = e.t.defaults[u], i));
		}, {});
	}, f.j = function(t, e) {
		var r = e.bindings, o = e.parameterSegments;
		return Object.entries(t).reduce(function(t, e) {
			var i, u, f = e[0], c = e[1];
			if (!c || "object" != typeof c || Array.isArray(c) || !o.some(function(t) {
				return t.name === f;
			})) return n({}, t, ((u = {})[f] = c, u));
			var a = c.hasOwnProperty(r[f]) ? r[f] : c.hasOwnProperty("id") ? "id" : void 0;
			if (void 0 === a) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + r[f] + "'.");
			return n({}, t, ((i = {})[f] = c[a], i));
		}, {});
	}, f.valueOf = function() {
		return this.toString();
	}, e(r, [
		{
			key: "params",
			get: function() {
				var t = this.p();
				return n({}, t.params, t.query);
			}
		},
		{
			key: "routeParams",
			get: function() {
				return this.p().params;
			}
		},
		{
			key: "queryParams",
			get: function() {
				return this.p().query;
			}
		}
	]);
}(/*#__PURE__*/ f(String));
function B(t, e, n, r) {
	var o = new z(t, e, n, r);
	return t ? o.toString() : o;
}
var M = { install: function(t, e) {
	var n = function(t, n, r, o) {
		return void 0 === o && (o = e), B(t, n, r, o);
	};
	parseInt(t.version) > 2 ? (t.config.globalProperties.route = n, t.provide("route", n)) : t.mixin({ methods: { route: n } });
} };
//#endregion
//#region resources/js/ssr.js
var appName = process.env.VITE_APP_NAME || "Laravel";
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	title: (title) => title ? `${title} - ${appName}` : appName,
	resolve: (name) => {
		return (/* @__PURE__ */ Object.assign({
			"./Pages/Auth/ConfirmPassword.vue": ConfirmPassword_exports,
			"./Pages/Auth/ForgotPassword.vue": ForgotPassword_exports,
			"./Pages/Auth/Login.vue": Login_exports,
			"./Pages/Auth/Register.vue": Register_exports,
			"./Pages/Auth/ResetPassword.vue": ResetPassword_exports,
			"./Pages/Auth/VerifyEmail.vue": VerifyEmail_exports,
			"./Pages/Blog/Index.vue": Index_exports$1,
			"./Pages/Blog/Show.vue": Show_exports$1,
			"./Pages/Dashboard.vue": Dashboard_exports,
			"./Pages/Error.vue": Error_exports,
			"./Pages/Home.vue": Home_exports,
			"./Pages/Profile/Edit.vue": Edit_exports,
			"./Pages/Profile/Partials/DeleteUserForm.vue": DeleteUserForm_exports,
			"./Pages/Profile/Partials/UpdatePasswordForm.vue": UpdatePasswordForm_exports,
			"./Pages/Profile/Partials/UpdateProfileInformationForm.vue": UpdateProfileInformationForm_exports,
			"./Pages/Projects/Index.vue": Index_exports,
			"./Pages/Projects/Show.vue": Show_exports,
			"./Pages/Welcome.vue": Welcome_exports
		}))[`./Pages/${name}.vue`];
	},
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin).use(M);
	}
}));
//#endregion
export {};
