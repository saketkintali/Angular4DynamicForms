"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.showHelp = !!options.showHelp;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.condition = options.condition || true;
        this.labelHtmlClass = options.labelHtmlClass || '';
        this.fieldHtmlClass = options.fieldHtmlClass || '';
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;
//# sourceMappingURL=question-base.js.map