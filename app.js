const app = {
    data() {
      return {
        inputValue: '',
        val: ''
      }
    },

    methods: {
    	hah(){
    		this.val = 'თავიდან სცადე <3 უნდა გამოიცნო :D';
    	}
    },

    computed: {
    	validateInput(){
 
    		if(this.inputValue.replace(/\s/g, '') == "მიყვარხარ"){
				this.val = 'მეც';
				
    		}

    		return this.val;
    	}
    }

  }


Vue.createApp(app).mount('#main');