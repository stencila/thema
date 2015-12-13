"use strict";

var DocumentNode = require('substance/model/DocumentNode');

function Cell(){
  Cell.super.apply(this, arguments);
}

Cell.Prototype = function() {
  this.empty = function() {
    return this.expr.length==0;
  };
};

DocumentNode.extend(Cell);

Cell.static.name = "sheet-cell";

Cell.static.defineSchema({
  expr: "text",
  name: { type: "string", optional: true },
  value: { type: "string", optional: true },
  row: "number",
  col: "number"
});

Cell.static.generatedProps = ['value'];

module.exports = Cell;
