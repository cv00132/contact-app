const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactController ($scope, $http) {
    console.log("Welcome to Contact controller");
   $scope.currentContact = null;


   function init () {
     $http.get(`${SERVER_URL}/contacts`).then(resp => {
       $scope.contacts = resp.data;
     });
     console.log("We're init");
   }

   init();



   // $http.get(`${SERVER_URL}/contacts`, data).then(resp => {
   //   console.log(resp.data);
   //   $scope.Contact = resp.data;
   //  })
   //
   //  $http.get(`${SERVER_URL}/contacts/:id`, data).then(resp => {
   //    console.log(resp.data);
   //    $scope.currentContact = resp.data;
   //  })
};

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
