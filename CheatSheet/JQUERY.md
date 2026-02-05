
# jQuery Cheat Sheet

A quick reference guide to **jQuery selectors, DOM manipulation, events, effects, AJAX, and utilities**.

---

## 1️⃣ Selecting Elements

```javascript
// By ID
$('#myId')

// By class
$('.myClass')

// By tag
$('div')

// All paragraphs inside a div
$('div p')

// Attribute selector
$('input[name="email"]')

// First / last / nth element
$('li:first')
$('li:last')
$('li:eq(2)')

// Contains text
$('p:contains("Hello")')
````

---

## 2️⃣ DOM Manipulation

```javascript
// Get / Set HTML
$('#myDiv').html()                  // get
$('#myDiv').html('<p>Hi</p>')      // set

// Get / Set text
$('#myDiv').text()
$('#myDiv').text('Hello')

// Get / Set value
$('#inputId').val()
$('#inputId').val('New Value')

// Append / Prepend
$('#myDiv').append('<span>End</span>')
$('#myDiv').prepend('<span>Start</span>')

// Remove elements
$('#myDiv').remove()   // removes from DOM
$('#myDiv').empty()    // removes children only

// Add / Remove / Toggle classes
$('#myDiv').addClass('active')
$('#myDiv').removeClass('active')
$('#myDiv').toggleClass('active')
```

---

## 3️⃣ CSS & Attributes

```javascript
// Get / Set CSS
$('#myDiv').css('color')
$('#myDiv').css('color', 'red')
$('#myDiv').css({ color: 'red', fontSize: '20px' })

// Get / Set attributes
$('#myImg').attr('src')
$('#myImg').attr('src', 'new.png')

// Remove attribute
$('#myImg').removeAttr('alt')

// Enable / Disable
$('#btn').prop('disabled', true)
```

---

## 4️⃣ Events

```javascript
// Click / Hover
$('#btn').click(function(){ ... })
$('#btn').hover(function(){ ... })

// Mouse & keyboard
$('#myDiv').mouseenter(fn)
$('#myDiv').mouseleave(fn)
$('#input').keydown(fn)
$('#input').keyup(fn)

// Form events
$('#myForm').submit(fn)
$('#input').focus(fn)
$('#input').blur(fn) 

// Using .on()
$('#myDiv').on('click', function(){ ... })
$('#myDiv').on('mouseenter mouseleave', fn)

// Remove events
$('#myDiv').off('click')
```

---

## 5️⃣ Effects / Animations

```javascript
// Show / hide
$('#myDiv').show()
$('#myDiv').hide()
$('#myDiv').toggle()

// Fading
$('#myDiv').fadeIn(500)
$('#myDiv').fadeOut(500)
$('#myDiv').fadeToggle(500)

// Sliding
$('#myDiv').slideDown(400)
$('#myDiv').slideUp(400)
$('#myDiv').slideToggle(400)

// Custom animation
$('#myDiv').animate({ left: '100px', opacity: 0.5 }, 1000)
```

---

## 6️⃣ Traversing the DOM

```javascript
$('#myDiv').children()      // all children
$('#myDiv').parent()        // parent
$('#myDiv').parents()       // all ancestors
$('#myDiv').siblings()      // siblings
$('#myDiv').next()          // next element
$('#myDiv').prev()          // previous element

// Filter
$('li').first()
$('li').last()
$('li').eq(2)   // 0-based index
```

---

## 7️⃣ AJAX & Fetch

```javascript
// Load HTML
$('#result').load('data.html')

// GET request
$.get('data.json', function(data){
    console.log(data)
})

// POST request
$.post('submit.php', { name: 'John' }, function(res){
    console.log(res)
})

// Full AJAX
$.ajax({
    url: 'data.json',
    method: 'GET',
    dataType: 'json',
    success: function(res){ console.log(res) },
    error: function(err){ console.log(err) }
})
```

---

## 8️⃣ Utilities

```javascript
// Iterate
$.each([1,2,3], function(index, value){ console.log(index, value) })
$.each({a:1,b:2}, function(key, value){ console.log(key, value) })

// Check if element exists
if($('#myDiv').length){ ... }

// Delay / Queue
$('#myDiv').delay(500).fadeOut()

// Extend objects
$.extend({a:1}, {b:2}) // {a:1,b:2}

// Trim string
$.trim('  hello  ') // 'hello'
```

---

## 9️⃣ Chaining

```javascript
$('#myDiv')
  .css('color','red')
  .slideUp(500)
  .slideDown(500)
  .html('Updated')
```

---

## 🔟 Misc / Tips

* Use `$(function(){ ... })` or `$(document).ready(fn)` to run code when DOM is loaded
* `$` is shorthand for jQuery
* `$(selector)` always returns a jQuery object (even if 0 elements)
* Convert to vanilla DOM element: `$('#myDiv')[0]`
