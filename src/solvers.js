/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

  // describe('findNRooksSolution()', function() {

  //   it('finds a valid solution for n of 1-8', function() {
  //     _.range(1, 9).map(function(n) {
  //       var solutionBoard = new Board(findNRooksSolution(n));
  //       var numPieces = _.reduce(solutionBoard.rows(), function(memo, row) {
  //         return memo + _.reduce(row, function(memo, col) {
  //           return memo + col;
  //         }, 0);
  //       }, 0);

  //       expect(solutionBoard.get('n')).to.equal(n);
  //       expect(numPieces).to.equal(n);
  //       expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
  //     });
  //   });

  // });


window.findNRooksSolution = function(n) {
  // var countRooks = 0;
  var array = [];
  var board = new Board({n:n});
  // console.log(board);
  for (var i = 0; i < n; i++) {
    // var currentRow = board.rows[i];
    // var subArray = [];
    for (var j =0; j<n; j++) {
      if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
        board.togglePiece(i,j);
        // countRooks++;
      } 
    }
    var newRow = board.attributes[i];
    // console.log("newRow", newRow);

    array.push(newRow);
    // console.log("array", array);
  }


  var solution = array; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // console.log()
  // var board = new Board({n:n});
  // var array = [];
  // console.log("n", n)
  // for(var i = 0; i < n; i++){
  //   var currRow = board.rows[i];
  //   for(var j = 0; j < n; j++){      
  //     console.log("asdkfja;sdlkfjlasdkjf;laskdjf")
  //   if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() 
  //     // && !board.hasAnyMajorDiagonalConflicts() && board.hasAnyMinorDiagonalConflicts()
  //     ) {
  //     // console.log("OMSETHING");
  //       board.togglePiece(i, j);
  //     }
  //   }

  //   array.push(board.attributes[i]);
  // } 


  // var solution = array; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;


  var array = [];
  var board = new Board({n:n});
  // console.log(board);
  for (var i = 0; i < n; i++) {
    // var currentRow = board.rows[i];
    // var subArray = [];
    for (var j =0; j<n; j++) {
      if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
        board.togglePiece(i,j);
        // countRooks++;
      } 
    }
    var newRow = board.attributes[i];
    // console.log("newRow", newRow);

    array.push(newRow);
    // console.log("array", array);
  }

  var solution = array; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;  
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
