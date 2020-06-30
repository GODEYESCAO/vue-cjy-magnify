import cjyMagnify from './packages/cjy-magnify'
export default cjyMagnify
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('cjy-magnify', cjyMagnify)
}
