new Vue({
    el: '#app',
    data: {
        title: 'Hello World! This is data stored in a variable in a Vue object.',
        depart: 'Goodbye!',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function() {
            return 'This text is returned from the sayHello function located in the Vue object!';
        },
        sayGoodbye: function() {
            return this.depart;
        }
    }
});