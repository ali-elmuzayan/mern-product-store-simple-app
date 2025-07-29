import app from "./app.js";
 import ENV from "./config/env.js";
 import DB, {connectDB} from "./config/db.js";





const port = ENV.PORT || 3000;
const server = app.listen(port, () => {
    // console.log(DB);
    connectDB()
    console.log(`Server is unning on http://127.0.0.1:${port}`)
});



// Gracefully handle restarts or shutdowns
function handleShutdown(signal) {
    console.log(`🛑 Received ${signal}. Closing server...`);
    server.close(() => {
        console.log('✅ Server closed. Exiting process.');
        process.exit(0);
    });
}

process.on('SIGINT', handleShutdown);   // Ctrl+C
process.on('SIGTERM', handleShutdown);  // Nodemon or other tools
