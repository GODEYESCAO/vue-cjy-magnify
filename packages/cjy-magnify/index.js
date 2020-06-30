import cjyMagnify from './cjy-magnify.vue'
export default cjyMagnify
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('cjy-magnify', cjyMagnify)
}
