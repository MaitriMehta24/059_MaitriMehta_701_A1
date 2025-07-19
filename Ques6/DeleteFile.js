const fs= require("fs").promises;

fs.unlink("./file-to-delete.txt")
.then(()=>{
    console.log("File Deleted Successfully...");
}).catch((error)=>{
    console.log("Error in Deleting File: "+error);
});

