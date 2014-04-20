modules.cellularBYOB = '2013-August-23';

var CellAttributeDialogMorph;

CellAttributeDialogMorph.prototype = new VariableDialogMorph();
CellAttributeDialogMorph.prototype.constructor = CellAttributeDialogMorph;
CellAttributeDialogMorph.uber = VariableDialogMorph.prototype;

function CellAttributeDialogMorph(target, action, environment) {
    this.init(target, action, environment);
}

CellAttributeDialogMorph.prototype.createTypeButtons = function () { };

VariableDialogMorph.prototype.createTypeButtons = function () {
    var myself = this;

    this.addTypeButton(
        function () {myself.setType('gobal'); },
        "global",
        function () {return myself.isGlobal; }
    );
    this.addTypeButton(
        function () {myself.setType('local'); },
        "for each instance of this sprite",
        function () {return !myself.isGlobal; }
    );
};