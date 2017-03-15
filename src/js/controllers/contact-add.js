const SERVER_URL = "https://sleepy-inlet-40566.herokuapp.com";

function ContactAddController ($scope, $http) {
console.log("Welcome to ContactAdd controller");
$scope.currentContact = null;



$scope.addContact = function (data, userId) {
    var url = `${SERVER_URL}/contacts/add`;
    $http.post(url, data).then(resp => {
      console.log(resp.data);
      $scope.currentContact = resp.data;
    })
  }
};

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
