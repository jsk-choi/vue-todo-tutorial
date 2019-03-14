import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/componentszzz/HelloWorld'
import ToDo from '@/components/ToDo'

Vue.use(Router)

const Foo = { template: '<h1>foo</h1>' }
const Bar = { template: '<div>bar</div>' }

console.log('foo', Foo);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/todos',
            component: Foo
        }
    ]
})