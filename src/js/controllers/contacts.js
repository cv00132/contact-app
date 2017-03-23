const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactController ($scope, $http) {
   $scope.contacts = [];

   function init () {
     $http.get(`${SERVER_URL}/contacts`).then(resp => {
       $scope.contacts = resp.data;
     });
   }

   init();

};

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
