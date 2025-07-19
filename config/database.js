const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
    })
    .then(() => {
      console.log("Database Connection is Successful");
    })
    .catch((error) => {
      console.log("Database Connection is unsuccessful");
      console.error(error.message);

      // process.exit(1) is used to terminate the process with an exit code of 1, indicating a failure or error condition.This exit code is typically used to signal that the process did not complete successfully.
      // It's important to note that process.exit(1) forcefully exits the process, which means it does not wait for any ongoing asynchronous operations to complete. This can lead to issues such as incomplete logging or data loss if those operations are not properly handled.

      //   process.exit(1);

      // process.exitCode allows the process to exit gracefully, ensuring that all pending operations are completed before termination.This approach is generally safer and more reliable than directly calling process.exit(1).
      
      process.exitCode = 1;
    });
};

module.exports = dbConnect;
