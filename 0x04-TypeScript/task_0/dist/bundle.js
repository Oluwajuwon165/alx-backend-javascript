/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLGFBQWE7Q0FDeEIsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXJELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87SUFDM0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsYUFBYSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkpvaG5cIixcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gIGFnZTogMjAsXG4gIGxvY2F0aW9uOiBcIk5ldyBZb3JrXCIsXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkphbmVcIixcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gIGFnZTogMjIsXG4gIGxvY2F0aW9uOiBcIkxvcyBBbmdlbGVzXCIsXG59O1xuXG5jb25zdCBzdHVkZW50c0xpc3Q6IFN0dWRlbnRbXSA9IFtzdHVkZW50MSwgc3R1ZGVudDJdO1xuXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuc3R1ZGVudHNMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBjb25zdCBsb2NhdGlvbkNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICBmaXJzdE5hbWVDZWxsLmlubmVySFRNTCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICBsb2NhdGlvbkNlbGwuaW5uZXJIVE1MID0gc3R1ZGVudC5sb2NhdGlvbjtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==