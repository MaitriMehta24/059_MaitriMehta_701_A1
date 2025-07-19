// Using __dirname (directory name)
console.log("📁 Current directory:", __dirname);

// Using __filename (file name with full path)
console.log("📄 Current file:", __filename);

// Using setTimeout (calls a function after 2 seconds)
setTimeout(() => {
    console.log("⏳ This message is shown after 2 seconds");
}, 2000);

// Using setInterval (prints message every 1 second, 3 times)
let count = 0;
const intervalId = setInterval(() => {
    console.log("🔁 Hello from setInterval", ++count);
    if (count === 3) {
        clearInterval(intervalId);
        console.log("✅ Interval cleared");
    }
}, 1000);

// Using console (global logging tool)
console.log("✅ Using global console.log");
