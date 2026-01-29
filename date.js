let d = new Date();


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



// d.toString();      // Full readable string //Tue Jan 27 2026 18:53:02 GMT+0530 (India Standard Time)
// d.toDateString();  // Only date //Tue Jan 27 2026  
// d.toTimeString();  // Only time //18:51:20 GMT+0530 (India Standard Time)
// d.toUTCString();   // UTC format  //Tue, 27 Jan 2026 13:21:41 GMT
// d.toISOString();   // ISO format (YYYY-MM-DDTHH:mm:ss.sssZ) //2026-01-27T13:22:02.489Z

// console.log(d.toUTCString());

// // Date.now();            // milliseconds since 1 Jan 1970 //1769520298916
// // let d = new Date();
// // d.getTime();           // same as above


// // let d = new Date();
// d.setDate(d.getDate() + 5);
// console.log(d) // 5 days later
// d.setDate(d.getDate() - 7); //milliseconds since 1 Jan 1970 
// console.log(d)
// d.toDateString(); // Jan 25 2026
// console.log(d)
// ; // 7 days earlier

// new Date(
//   year,        // required
//   monthIndex,  // 0 = Jan, 11 = Dec
//   day,         // day of month (1–31)
//   hours,       // 0–23
//   minutes,     // 0–59
//   seconds,     // 0–59
//   milliseconds // 0–999
// )

// let text = d.constructor;   //ƒ Date() { [native code] }

// console.log(text);


// let d = new Date();
// console.log(d.getUTCDate());


// d.setTime(1332403882588); //Add 1332403882588 milliseconds to January 1, 1970

//--------parse() parses a date string and returns the time difference since January 1, 1970.
// let ms = Date.parse("March 21, 2012");

// Date.now() is a static method of the Date object.

// You cannot use it on a date like myDate.now()

// The syntax is always Date.now().  in millisecond

// console.log(d); //Thu Mar 22 2012 13:41:22 GMT+0530 (India Standard Time)

// console.log(d.toISOString());   //2012-03-22T08:11:22.588Z

// toJSON() returns a date as a string, using JSON date formatting: // 2026-01-28T07:20:51.285Z


//toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions:
// d.toLocaleDateString();//1/28/2026


//toLocaleTimeString() returns the time portion of a date, as a string, using locale conventions:
//d.toLocaleTimeString(); //12:55:46 PM


// d.toTimeString() //13:03:38 GMT+0530 (India Standard Time)

//Date.UTC() returns the number of milliseconds between a date and January 1, 1970, according to UTC:

// let ms = Date.UTC(2020, 0o2, 30);//1585526400000
// console.log(ms);


console.log(d);

d.setDate(d.getDate()+16)

console.log(d);

let ans=new Date(2026, 0, 30).setDate(35);

console.log(new Date(ans).toDateString());


// or
let ans1 = new Date(2026, 2, 30);
ans1.setDate(35);

console.log(ans1.toDateString());
// 🐍
