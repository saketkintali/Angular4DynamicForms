"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            console.log('question', question);
            if (question.controlType == 'checkboxes') {
                var CheckBoxQuestion = question;
                var tempArr = [];
                for (var i = 0; i < CheckBoxQuestion.options.length; i++) {
                    tempArr.push(new forms_1.FormControl());
                }
                group[question.key] = new forms_1.FormArray(tempArr);
            }
            else {
                group[question.key] = question.required ? new forms_1.FormControl(question.value || '', forms_1.Validators.required)
                    : new forms_1.FormControl(question.value || '');
            }
        });
        return new forms_1.FormGroup(group);
    };
    return QuestionControlService;
}());
QuestionControlService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], QuestionControlService);
exports.QuestionControlService = QuestionControlService;
//# sourceMappingURL=question-control.service.js.map