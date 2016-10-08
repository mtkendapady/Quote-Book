angular.module( "quoteBook")
.controller( "quoteCtrl" , function( $scope, quoteSrvc ) {
  // $scope.test = "test";
  var quoteText = $scope.quoteText;
  var quoteAuthor = $scope.quoteAuthor;

  $scope.quotes = quoteSrvc.getQuote();

  $scope.addQuote = function( quoteText , quoteAuthor ) {
    $scope.quoteText = "";
    $scope.quoteAuthor = "";

    return quoteSrvc.addQuote( quoteText, quoteAuthor );
  };

  $scope.removeQuote = quoteSrvc.removeQuote;
});
