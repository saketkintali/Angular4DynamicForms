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
var ToggleComponent = (function () {
    function ToggleComponent() {
        this.shouldToggle = false;
    }
    return ToggleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ToggleComponent.prototype, "shouldToggle", void 0);
ToggleComponent = __decorate([
    core_1.Component({
        selector: 'toggle',
        template: "\n     <div class=\"modal\" [@toggleState]=\"shouldToggle\">\n        <ng-content></ng-content>\n    </div>\n    ",
        styles: [
            "\n  .modal {\n    background-color:#ffffff;\n    border:1px solid lightgray;\n    box-shadow:0 0 7px rgba(0,0,0,.2);\n    width:40%;\n    text-align:center;\n    padding:30px;\n    border-radius:6px;\n    font-weight:400;\n    margin:40px auto;\n    overflow-y: hidden;\n  }\n  "
        ],
        animations: [
            core_1.trigger('toggleState', [
                // What happens when toggleState is true
                core_1.state('true', core_1.style({ maxHeight: '200px' })),
                // What happens when toggleState is false
                core_1.state('false', core_1.style({ maxHeight: 0, padding: 0, display: 'none' })),
                // transition
                core_1.transition('* => *', core_1.animate('300ms')),
            ])
        ],
    })
], ToggleComponent);
exports.ToggleComponent = ToggleComponent;
//# sourceMappingURL=toggle.component.js.map