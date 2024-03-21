/**
 * Express Gateway Server
 * @module Gateway
 */

const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Proxy middleware for '/customer' route
 * @name customerProxy
 * @function
 * @param {string} target - The target URL to proxy requests to.
 */
app.use("/customer", proxy("http://localhost:1030"));

/**
 * Proxy middleware for '/products' route
 * @name productsProxy
 * @function
 * @param {string} target - The target URL to proxy requests to.
 */
app.use("/products", proxy("http://localhost:1020"));

/**
 * Proxy middleware for '/shopping' route
 * @name shoppingProxy
 * @function
 * @param {string} target - The target URL to proxy requests to.
 */
app.use("/shopping", proxy("http://localhost:1040"));

/**
 * Default route handler
 * @name defaultRoute
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The response object with a JSON message.
 */
app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from ApiGateway Service" });
});

/**
 * Start Express server and listen on port 1010.
 * Log a message when server is running.
 */
app.listen(1010, () => {
  console.log("Server is running on port 1010 ApiGateway Service");
});
