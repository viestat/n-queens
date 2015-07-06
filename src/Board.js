// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    //just checks whether you are still on the chest board
    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    // var board = new Board({n:5})
    hasRowConflictAt: function(rowIndex) {
      var currentRow = this.attributes[rowIndex];
      var countOnes = 0;

      for (var i = 0 ; i<currentRow.length; i++) {
        // console.log(currentRow[i]);
        if (currentRow[i] === 1) {
          countOnes++;
        }
      }
      // console.log("countOnes", !countOnes);
      // countOnes = countOnes -1;

      if(countOnes > 1) {
        return true;
      } else {return false}
      // return !countOnes;

      // console.log("zero", this.attributes[0]);
      // console.log("one", this.attributes[1]);
      // console.log("two", this.attributes[2]);
      // console.log("three", this.attributes[4]);

      // console.log("this.attributes", this.attributes);
      // console.log(this.attributes[rowIndex]);
      // console.log("this", this);
      // console.log(this._currentAttributes[rowIndex]);
      // console.log(this._previousAttributes[rowIndex]);
      // for (var )
      // console.log(this);
      // return false;
// _currentAttributes
// _previousAttributes

      // console.log("this.rows",this.rows);
      // console.log("show")
      // console.log("this", this);
      // console.log("rowIndex", rowIndex);
      // console.log("this.child", this.child);
      // console.log("this.render", this.render);
      // console.log("board:", board);
      // return rowIndex;// fixme
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      // for (var i = 0 ; i < this.attributes )
      // console.log(Array.isArray(this.attributes));
      // console.log("this.attributes", this.attributes);

      var hasConflict = false;

      for (var key in this.attributes) {
        // console.log("key:", key);
        // console.log("this.attributes[key]", this.attributes[key]);
        hasConflict = this.hasRowConflictAt(key);
        if(hasConflict) {
          return true;
        }
        // console.log("hasConflict", hasConflict);
        // console.log("this.attributes[key]:",this.attributes[key]);
      }
      // console.log("hasConflict", hasConflict);
      return hasConflict;
      // console.log("zero", this.attributes[0]);
      // console.log("one", this.attributes[1]);
      // console.log("two", this.attributes[2]);
      // console.log("three", this.attributes[4]);
    
      // console.log("this", this);

      // // this.attributes[2][1].push(1);
      // // console.log("this.rows", this.rows);
      // // console.log("this", this);
      // // console.log("*((())))))))))");
      // console.log("this.attributes", this.attributes);

      // return false; // fixme

    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var rookCount = 0;

      for (var key in this.attributes) {
        var eachRow =  this.attributes[key];
        if (eachRow[colIndex]) {
          rookCount++;
        }
      }
      if(rookCount > 1) {
        return true;
      } else {
        return false; // fixme        
      }
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      // console.log("this.attributes", this.attributes);

      // var hasConflict = false;

      // for (var key in this.attributes) {
      //   // console.log("key:", key);
      //   // console.log("this.attributes[key]", this.attributes[key]);
      //   hasConflict = this.hasRowConflictAt(key);
      //   if(hasConflict) {
      //     return true;
      //   }
      //   // console.log("hasConflict", hasConflict);
      //   // console.log("this.attributes[key]:",this.attributes[key]);
      // }
      // // console.log("hasConflict", hasConflict);
      // return hasConflict;

      // console.log('BLAHBLAHBLAHBLAHBLAH');
      var boardSize = this.attributes[0].length;
      var hasConflict = false;
      // console.log("this.attributes", this.attributes)
      // console.log("this.attributes[n]:", this.attributes.n);
      // console.log("boardSize", boardSize);
      for (var i = 0 ; i < boardSize; i++) {
        hasConflict = this.hasColConflictAt(i);
        if(hasConflict) {
          return true;
        }
      }
      return false; // fixme
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      // //determine if there is more than one 1's in the table;
      // // console.log("**********", majorDiagonalColumnIndexAtFirstRow);
      // var pieceCount = 0;
      // var majorIndex;
      // var boardSize = this.attributes[0].length;

      // for (var i in this.attributes) {
      // // console.log("this.attributes[0]", this.attributes[i]);

      //   // console.log("each row", this.attributes[i]);
      //   // console.log("key", key);
      //   // console.log("boardSize", boardSize);
      //   for (var j = 0; j < boardSize; j++) {
      //     // console.log("each element", this.attributes[i][j]);
      //     // console.log("majorIndex", majorIndex);

      //     // console.log("SOMETHIGN", something);
      //     // console.log("majorIndex", majorIndex);

      //     if(this.attributes[i][j]) {
      //     majorIndex = this._getFirstRowColumnIndexForMajorDiagonalOn(i, j);

      //       // console.log("THERE IS ELEMENT HERE");
      //       // console.log("majorIndex", majorIndex)
      //       if(majorIndex === majorDiagonalColumnIndexAtFirstRow) {
      //         pieceCount++;
      //       }
      //     }
      //     // if(majorIndex === majorDiagonalColumnIndexAtFirstRow) {
      //     //   // console.log("this.attributes[i]:",this.attributes[i]);
      //     //   // console.log("this.attributes[i][j]:",this.attributes[i][j]);
      //     //   console.log("is there a rook", this.attributes[i][j])
      //     //   if(this.attributes[i][j]) {
      //     //     pieceCount++;
      //     //   }

      //     // }
      //   }
      // }
      // // console.log("pieceCount", pieceCount);
      // if (pieceCount >1) {
      //   // console.log("count", pieceCount);
      //   // console.log("true");
      //   return true;
      // } else {
      //   // console.log("count", pieceCount);
      //   // console.log("false");
      //   return false;
      // }
      // //if the output from __getFirstRowColumnIndexForMajorDiagonalOn is 
      // //the same value 
      // // return false; // fixme
    },




    // _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
    //   return colIndex - rowIndex;
    // },

    // _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
    //   return colIndex + rowIndex;
    // },





    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      // var hasConflict = false;
      // for (var i = -3; i < 4; i++) {
      //   hasConflicts = this.hasMajorDiagonalConflictAt(i);
      //   if(hasConflicts) {
      //     return true;
      //   }
      // }
      // return false; // fixme
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      // var pieceCount = 0;
      // var minorIndex;
      // console.log("***********input*****", minorDiagonalColumnIndexAtFirstRow)
      // for (var i in this.attributes) {
      //   var currRow = this.attributes[i];
      //   var size = this.attributes[0].length;
      //   // console.log("SIZE", size);
      //   console.log("current Row:", currRow);
      //   for (var j = 0; j < size; j++) {
      //     if(this.attributes[i][j]) { 
      //       // console.log("i, j", i)
      //       var numI = parseInt(i);
      //       minorIndex = this._getFirstRowColumnIndexForMinorDiagonalOn(numI,j)
      //       console.log("minorIndex", minorIndex);
      //       if(minorIndex === minorDiagonalColumnIndexAtFirstRow) {
      //         pieceCount++;
      //       }
      //     }
      //   }
      // }

      // if(pieceCount > 1) {
      //   console.log("there is conflict, true")
      //   return true;
      // } else {
      //   console.log("no conflict, false")
      //   return false; // fixme
      // }
    },

    // _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
    //   return colIndex + rowIndex;
    // },


    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      // var hasConflict = false;
      // for (var i = 0; i < 7; i++) {
      //   hasConflict = this.hasMinorDiagonalConflictAt(i);
      //   if(hasConflict) {
      //     return true;
      //   }
      // }
      // return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
