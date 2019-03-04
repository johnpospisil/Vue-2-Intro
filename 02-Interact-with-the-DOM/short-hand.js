new Vue({
	el: '#app',
	data: {
		link: 'https://www.google.com'
	},
	methods: {
		changeLink: function() {
			this.link = 'http://www.bing.com'; 
		}
	}
})