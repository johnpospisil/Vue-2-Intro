new Vue({
    el: '#app',
    data: {
        title: 'Hello World! This is the initial sayHello() message.',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function () {
            this.title = "This is the updated sayHello() message.";
            return this.title;
        }
    }
});