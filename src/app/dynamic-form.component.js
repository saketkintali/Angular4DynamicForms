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
var question_service_1 = require("./question.service");
var question_control_service_1 = require("./question-control.service");
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs, qs) {
        this.qcs = qcs;
        this.qs = qs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
        console.log('vvvvvvvvvvvvvvvvvvvv', this.form);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        var obj = this.form.value;
        var copy = Object.assign({}, obj);
        console.log(copy); // { a: 1 } 
        var dupForm = this.form;
        var checkService = this.qs.getQuestions();
        for (var i = 0; i < checkService.length; i++) {
            if (checkService[i].condition) {
                var conditionVal = eval(checkService[i].condition);
                if (!conditionVal || checkService[i].controlType == "template") {
                    delete copy[checkService[i].key];
                    console.log('rrrrrrrrrrrr', this.form.value, copy);
                }
            }
        }
        this.payLoad = JSON.stringify(copy);
    };
    return DynamicFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "questions", void 0);
DynamicFormComponent = __decorate([
    core_1.Component({
        selector: 'dynamic-form',
        templateUrl: './dynamic-form.component.html',
        providers: [question_control_service_1.QuestionControlService]
    }),
    __metadata("design:paramtypes", [question_control_service_1.QuestionControlService, question_service_1.QuestionService])
], DynamicFormComponent);
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamic-form.component.js.map