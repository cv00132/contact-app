const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactController ($scope, $http) {
   $scope.contacts = [];
   $scope.currentContact = null;

   function init () {
     $http.get(`${SERVER_URL}/contacts`).then(resp => {
       $scope.contacts = resp.data;
     });
   }

   init();

    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      console.log(resp.data);
      $scope.currentContact = resp.data;
    })
};

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
