import express from "express";
import routes from "./routes/routes.js";
import { createKernelAndWS } from "./entities.js";

async function run() {
	try {
		const app = express();
		app.use(express.json());
		app.use("/api", routes);

		createKernelAndWS();
		const port = 8080;
		app.listen(port, () => {
			console.log(`Server started at ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
}

run().catch(console.dir);