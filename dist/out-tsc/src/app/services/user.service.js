import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var baseUrl = "https://localhost:5001/";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (username, password) {
        return this.http.post(baseUrl + "/api/Auth/register", {
            "username": username,
            "password": password
        }).pipe(map(function (jwt) {
            if (jwt) {
                localStorage.setItem('token', jwt.token);
                return jwt;
            }
        }));
    };
    UserService.prototype.register = function (formVal) {
        return this.http.post(baseUrl, formVal)
            .pipe(map(function (result) {
            return result;
        }));
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map