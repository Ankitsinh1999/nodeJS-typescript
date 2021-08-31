"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = (0, express_1.default)();
// app.get('/',(req:Request, res:Response)=>{
//     res.send(`
//         <div>
//             <h1>Hiiii</h1>
//         </div>
//     `);
// })
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['dhsjhfhdskd'] }));
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log('port listen at port 3000');
});