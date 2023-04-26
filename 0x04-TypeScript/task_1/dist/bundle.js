/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher = {
    contract: false,
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London"
};
console.log(teacher);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
;
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsSUFBTSxPQUFPLEdBQVk7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFNckIsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQU10QixTQUFTLFlBQVksQ0FBQyxTQUFpQixFQUFFLFFBQWdCO0lBQ3ZELE9BQU8sVUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQy9DLENBQUM7QUFDRCxDQUFDO0FBYUQ7SUFJRSxzQkFBWSxFQUEyQztZQUF6QyxTQUFTLGlCQUFFLFFBQVE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IHRlYWNoZXI6IFRlYWNoZXIgPSB7XG4gIGNvbnRyYWN0OiBmYWxzZSxcbiAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiBcIkRvZVwiLFxuICBsb2NhdGlvbjogXCJMb25kb25cIlxufTtcblxuY29uc29sZS5sb2codGVhY2hlcik7XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuXG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpXG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJpbnRUZWFjaGVyKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XG59XG47XG5cblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudEludGVyZmFjZSB7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50SW50ZXJmYWNlIHtcbiAgcHJpdmF0ZSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9OiBTdHVkZW50Q29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuY29uc3Qgc3R1ZGVudCA9IG5ldyBTdHVkZW50Q2xhc3MoeyBmaXJzdE5hbWU6ICdKb2huJywgbGFzdE5hbWU6ICdEb2UnIH0pO1xuY29uc29sZS5sb2coc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTsgLy8gT3V0cHV0OiBDdXJyZW50bHkgd29ya2luZ1xuY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKTsgLy8gT3V0cHV0OiBKb2huXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=