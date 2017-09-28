"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_radios_1 = require("./question-radios");
var question_dropdown_1 = require("./question-dropdown");
var question_textbox_1 = require("./question-textbox");
var question_checkboxes_1 = require("./question-checkboxes");
var question_template_1 = require("./question.template");
var QuestionService = (function () {
    function QuestionService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_template_1.Template({
                key: 'ReplaceVehicle',
                template: "<div class='section-header section-header--form clearfix'><h2 id='replaceVehicleHeading'>Replace Vehicle</h2></div>",
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                labelHtmlClass: 'dummyclass',
                fieldHtmlClass: 'testclass',
                value: 'Bombasto',
                type: 'name',
                showHelp: true,
                required: true,
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                labelHtmlClass: 'dummyclass',
                fieldHtmlClass: 'testclass',
                type: 'email',
                condition: true,
            }),
            new question_dropdown_1.DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                labelHtmlClass: 'dummyclass',
                fieldHtmlClass: 'testclass',
                options: [
                    { key: '', value: 'Select' },
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                value: ''
            }),
            new question_radios_1.RadiosQuestion({
                key: 'gender',
                label: 'Gender',
                labelHtmlClass: 'dummyclass',
                fieldHtmlClass: 'testclass',
                options: [
                    { key: 'male', value: 'Male' },
                    { key: 'female', value: 'Female' },
                ],
                condition: 'this.form.controls.brave.value == \'solid\''
            }),
            new question_checkboxes_1.checkBoxQuestion({
                key: 'checkValue',
                label: 'Check Value',
                labelHtmlClass: 'dummyclass',
                fieldHtmlClass: 'testclass',
                options: [
                    { key: 'good', value: 'Good' },
                    { key: 'bad', value: 'Bad' },
                    { key: 'neutral', value: 'Neutral' },
                ],
            }),
        ];
        return questions;
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable()
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map