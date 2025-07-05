export default {
    install(Vue) {
        console.log('install', Vue)
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局指令
        Vue.directive('fbind', {
            inserted(element, binding) {
                element.value = binding.value
            }
        })
        // 全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100
                }
            },
            methods: {
                showName() {
                    alert(this.name)
                }
            }
        })
        // 添加实例方法
        Vue.prototype.hello = () => { alert('你好啊') }
    }
}