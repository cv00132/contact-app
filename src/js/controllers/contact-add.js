const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactAddController ($scope, $http, $state) {
console.log("Welcome to ContactAdd controller");
$scope.currentContact = null;
$scope.contacts = [];


$scope.addContact = function (data) {
    var url = `${SERVER_URL}/contacts`;
    $http.post(url, data).then(resp => {
      console.log(resp.data);
      $scope.currentContact = resp.data;
      $scope.contacts.push(resp.data);
      $state.go('contacts');

    })
  }
};

ContactAddController.$inject = ['$scope', '$http', '$state'];

export default ContactAddController;
