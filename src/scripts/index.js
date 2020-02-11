import router from "./router.js";
import app from "./app.js";

// pages
import main from "./pages/main.js";

// routes
router.page("/", () => app.render(main));
router.page("/post/:id", (param) => {
	console.log(param)
});

// app
app.root("#root");
app.on("render", () => {
	router.update();
});