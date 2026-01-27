// //Current date & time
// let now = new Date();
// console.log(now);   //Tue Jan 27 2026 18:35:27 GMT+0530 (India Standard Time)

// //B) Specific date
// let someDate = new Date("2026-01-27"); // YYYY-MM-DD format
// console.log(someDate); //Tue Jan 27 2026 05:30:00 GMT+0530 (India Standard Time)

// // C) With year, month, day, etc.
// let d1 = new Date(2026, 0, 27, 14, 30, 0); // Month is 0-indexed → 0 = January
// console.log(d1); //Tue Jan 27 2026 14:30:00 GMT+0530 (India Standard Time)

// //D) Using timestamp (milliseconds since Jan 1, 1970)
// let dateFromMs = new Date(1674800000000);
// console.log(dateFromMs);  //Fri Jan 27 2023 11:43:20 GMT+0530 (India Standard Time)


// let d = new Date();

// d.getFullYear();   // Year: 2026
// d.getMonth();      // Month: 0-11 (January = 0)
// d.getDate();       // Day of month: 1-31
// d.getDay();        // Day of week: 0-6 (Sunday = 0)
// d.getHours();      // Hours: 0-23
// d.getMinutes();    // Minutes: 0-59
// d.getSeconds();    // Seconds: 0-59
// d.getMilliseconds();// Milliseconds: 0-999

// console.log(d.getDay());


// let d = new Date();
// d.toString();      // Full readable string //Tue Jan 27 2026 18:53:02 GMT+0530 (India Standard Time)
// d.toDateString();  // Only date //Tue Jan 27 2026  
// d.toTimeString();  // Only time //18:51:20 GMT+0530 (India Standard Time)
// d.toUTCString();   // UTC format  //Tue, 27 Jan 2026 13:21:41 GMT
// d.toISOString();   // ISO format (YYYY-MM-DDTHH:mm:ss.sssZ) //2026-01-27T13:22:02.489Z

// console.log(d.toString());

// Date.now();            // milliseconds since 1 Jan 1970 //1769520298916
// let d = new Date();
// d.getTime();           // same as above


let d = new Date();
d.setDate(d.getDate() + 5); // 5 days later
console.log(d.setDate(d.getDate() - 7)); //milliseconds since 1 Jan 1970 
console.log(d.toDateString()); // Jan 25 2026
; // 7 days earlier

