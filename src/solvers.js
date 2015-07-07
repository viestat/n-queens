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
    var newRow = board.rows()[i];
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

  // var array = [];
  // var board = new Board({n:n});
  // // console.log(board);
  // for (var i = 0; i < n; i++) {
  //   // var currentRow = board.rows[i];
  //   // var subArray = [];
  //   for (var j =0; j<n; j++) {
  //     if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
  //       board.togglePiece(i,j);
  //       // countRooks++;
  //     } 
  //   }
  //   var newRow = board.attributes[i];
  //   // console.log("newRow", newRow);

  //   array.push(newRow);
  //   // console.log("array", array);
  // }



  var array = [];
  var board = new Board({n:n});

  
  console.log("n", n);
  console.log("board.rows()", board.rows());
  if(n === 0){
    return [];
  }
  for (var i = 0 ; i < n; i++) {
    console.log("are we iterating");
    for (var j = 0 ; j < n; j++) {

      // console.log(array[i]);
      // console.log("each row", board.rows()[i]);
      // console.log("evaluate to true if it has row conflicts", board.hasRowConflicts());
       console.log("the one that shouldn't be 1:", board.rows()[0][1]);
       console.log(board.hasAnyRowConflicts());

      if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {

        //  && 
        // !board.hasAnyMajorDiagonalConflicts() &&
        // !board.hasAnyMinorDiagonalConflicts()) 
      
        // if(n === 1) {
        //   board.togglePiece(i,j);
        //   var newRow = board.rows()[i];
        //   array.push(newRow);
        //   return array; 
        // }
            board.togglePiece(i,j); 
        // if(i !== 0 && j !== 0) {  
          //do nothing
        // } 
        // if((i !== 0 && j !== 0) && 
        //    (i !== 0 && j !== n-1) && 
        //    (i !== n-1 && j !== 0) && 
        //    (i !== n-1 && j !== n-1)) {
        // //do something
        // }        
      }



    }
    var newRow = board.rows()[i];
  }
  array.push(newRow);
  // console.log(array)


  var solution = array; //fixme
  // console.log("input argument", n);
  console.log("board.rows() end", board.rows());
  console.log("solution", solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

  //var array = [];
  // var board = new Board({n:num});
  // var rows = board.rows();
  // console.log("num", num);
  // console.log("rows", board.attributes);
  // if(n==0) {
  //   return 0;
  // }
//  console.log()
// var array 
//   if(n !== 0) {

//     var board = new Board({n:n});
//     var array = [];
//       // console.log("n", n)
//       for(var i = 0; i < n; i++){
//         console.log("i", i);
//         var currRow = board.rows[i];
//         // console.log(currRow);
//         for(var j = 0; j < n; j++){      
//           // console.log("asdkfja;sdlkfjlasdkjf;laskdjf")
//         if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() 
//           && !board.hasAnyMajorDiagonalConflicts() && board.hasAnyMinorDiagonalConflicts()
//           ) {
//           // console.log("OMSETHING");
//             board.togglePiece(i, j);
//           }
//         }

//         array.push(board.attributes[i]);
//       } 

//   }



//   // var solution = array; //fixme

//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   // return solution;

//   var solution = array;

//   // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

//   return solution;
//   // var array = [];
//   // // var board = new Board({n:n});
//   // // console.log(board);
  // // for (var i = 0; i < n; i++) {
  // //   // var currentRow = board.rows[i];
  // //   // var subArray = [];
  // //   for (var j =0; j<n; j++) {
  // //     if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
  // //       board.togglePiece(i,j);
  // //       // countRooks++;
  // //     } 
  // //   }
  // //   var newRow = board.attributes[i];
  // //   // console.log("newRow", newRow);

  // //   array.push(newRow);
  // //   // console.log("array", array);
  // // }

  // var solution = array; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;  

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

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
