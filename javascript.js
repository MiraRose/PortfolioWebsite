
var app = new Vue({

  el: '#app',

  data: {
    projectInView: {
      image: 'vendingmachineproject.png', 
      alt: '', 
      demo: '', 
      github: 'https://github.com/MiraRose/VendingMachineKata', 
      id: 0 
    },
    projects: [
      { image: 'vendingmachineproject.png', alt: '', demo: '', github: 'https://github.com/MiraRose/VendingMachineKata', id: 0 },
      { image: 'squaregardeningapp.png', alt: '', demo: 'SquareGardenApp/index.html', github: 'https://github.com/MiraRose/SquareGardenApp', id: 1 },
      
  ]
  },

  methods: {
    forward: function() {
      if (this.projects.length > 1 && this.projectInView.id < this.projects.length - 1 ) {
        var currentId = this.projectInView.id;
        this.projectInView = this.projects[currentId + 1];
      }
      else if (this.projectInView.id == this.projects.length - 1) {
        this.projectInView = this.projects[0];
      }
    },

    backward: function() {
      if (this.projects.length > 1 && this.projectInView.id > 0) {
        var currentId = this.projectInView.id;
        this.projectInView = this.projects[currentId - 1]
      }
      else if (this.projectInView.id == 0) {
        this.projectInView = this.projects[this.projects.length - 1];
      }
    }
  }
}

)