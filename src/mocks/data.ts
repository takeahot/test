import { FlashOnRounded } from "@mui/icons-material"
import { AccessInfo, BookItem, SearchInfo, SaleInfo, VolumeInfo } from "../types/serverAnswer"
import dataForCheck from "../types/dataForCheck"

const answer = {
    "kind": "books#volumes",
    "totalItems": 2066,
    "items": [{
            "kind": "books#volume",
            "id": "UAYvDwAAQBAJ",
            "etag": "8ktv8keZ9QE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/UAYvDwAAQBAJ",
            "volumeInfo": {
                "title": "Eloquent JavaScript",
                "subtitle": "A Modern Introduction to Programming",
                "authors": [
                    "Marijn Haverbeke"
                ],
                "publisher": "No Starch Press",
                "publishedDate": "2011-01-15",
                "description": "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban, you'll learn to: –Understand the essential elements of programming: syntax, control, and data –Use object-oriented and functional programming techniques to organize and clarify your programs –Script the browser and make basic Web applications –Work with tools like regular expressions and XMLHttpRequest objects And since programming is an art that's best learned by doing, all example code is available online in an interactive sandbox for you to experiment with. With Eloquent JavaScript as your guide, you can tweak, expand, and modify the author's code, or throw it away and build your own creations from scratch. Before you know it, you'll be fluent in the language of the Web.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781593272937"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1593272936"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 224,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "0.0.1.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=UAYvDwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=UAYvDwAAQBAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Eloquent_JavaScript.html?hl=&id=UAYvDwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=UAYvDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Eloquent JavaScript dives into this flourishing language and teaches you to write code that&#39;s beautiful and effective."
            }
        },
        {
            "kind": "books#volume",
            "id": "qU3rAgAAQBAJ",
            "etag": "khXhWwHER6o",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/qU3rAgAAQBAJ",
            "volumeInfo": {
                "title": "Speaking JavaScript",
                "subtitle": "An In-Depth Guide for Programmers",
                "authors": [
                    "Axel Rauschmayer"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2014-02-25",
                "description": "Like it or not, JavaScript is everywhere these days—from browser to server to mobile—and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections. First, a quick-start guide teaches you just enough of the language to help you be productive right away. More experienced JavaScript programmers will find a complete and easy-to-read reference that covers each language feature in depth. Complete contents include: JavaScript quick start: Familiar with object-oriented programming? This part helps you learn JavaScript quickly and properly. JavaScript in depth: Learn details of ECMAScript 5, from syntax, variables, functions, and object-oriented programming to regular expressions and JSON with lots of examples. Pick a topic and jump in. Background: Understand JavaScript’s history and its relationship with other programming languages. Tips, tools, and libraries: Survey existing style guides, best practices, advanced techniques, module systems, package managers, build tools, and learning resources.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781449364991"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1449364993"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 460,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.4.5.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=qU3rAgAAQBAJ&printsec=frontcover&dq=js&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 42.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 42.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&rdid=book-qU3rAgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [{
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 42990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 42990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=qU3rAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections."
            }
        },
        {
            "kind": "books#volume",
            "id": "nO9ZAgAAQBAJ",
            "etag": "uWtUMS5BPP0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/nO9ZAgAAQBAJ",
            "volumeInfo": {
                "title": "Pro Node.js for Developers",
                "authors": [
                    "Colin J. Ihrig"
                ],
                "publisher": "Apress",
                "publishedDate": "2013-11-25",
                "description": "Since it’s creation in 2009, Node.js has grown into a powerful and increasingly popular asynchronous-development framework for creating highly-scalable network applications using JavaScript. Respected companies such as Dow Jones and LinkedIn are among the many organizations to have seen Node’s potential and adopted it into their businesses. Pro Node.js for Developers provides a comprehensive guide to this exciting new technology. We introduce you to Node – what it is, why it matters and how to set it up – before diving deeply into the key concepts and APIs that underpin its operation. Building upon your existing JavaScript skills you’ll be shown how to use Node.js to build both Web- and Network-based applications, to deal with data sources, capture events and deal with child processes to create robust applications that will work well in a wide range of circumstances. Once you've mastered these skills we’ll go further, teaching you more advanced software engineering skills that will give your code a professional edge. You’ll learn how to create easily reusable modules that will save you time through code reuse, to log and debug your applications quickly and effectively and to write code that will scale easily and reliably as the demand for your application grows. What you’ll learn Install, configure and deploy Node.js apps effectively Understand the Node.js asynchronous programming model in detail Create both web and network-based Node.js applications with ease Learn to work effectively with varied data sources and file types Discover advanced software engineering concepts that will will save you time and promote code reuse Who this book is for This book is for developers who already have a working knowledge of JavaScript and are interested in adopting Node.js into their projects. All other concepts will be introduced from first-principals. Table of Contents Introducing Node.js The Node Module System The Event Loop Events Timers and Scheduling The Command Line Interface Accessing the File System Data Streams Binary Data Creating Child Processes Network Programming HTTP Server Development Connect Connecting to Databases Logging Application Scaling Appendix",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781430258605"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1430258608"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 308,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.3.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=nO9ZAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nO9ZAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=nO9ZAgAAQBAJ&printsec=frontcover&dq=js&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=nO9ZAgAAQBAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Pro_Node_js_for_Developers.html?hl=&id=nO9ZAgAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Pro_Node_js_for_Developers-sample-epub.acsm?id=nO9ZAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=nO9ZAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "What you’ll learn Install, configure and deploy Node.js apps effectively Understand the Node.js asynchronous programming model in detail Create both web and network-based Node.js applications with ease Learn to work effectively with ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "_uTRAwAAQBAJ",
            "etag": "U4ifK4LOG3w",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/_uTRAwAAQBAJ",
            "volumeInfo": {
                "title": "JavaScript and JQuery",
                "subtitle": "Interactive Front-End Web Development Hardcover",
                "authors": [
                    "Jon Duckett"
                ],
                "publisher": "John Wiley & Sons",
                "publishedDate": "2014-07-21",
                "description": "This book covers: 1. Basic programming concepts - assuming no prior knowledge of programming beyond an ability to create a web page using HTML & CSS ; 2. Core elements of the JavaScript language - so you can learn how to write your own scripts from scratch ; 3. jQuery - which will allow you to simplify the process of writing scripts (this is introduced half-way through the book once you have a solid understanding of JavaScript) ; 4. How to recreate techniques you will have seen on other web sites such as sliders, content filters, form validation, updating content using Ajax, and more. Each chapter: Breaks subjects down into bite-sized chunks with a new topic on each page ; Contains clear descriptions of syntax, each one demonstrated with inspiring code samples ; Uses diagrams and photography to explain complex concepts in a visual way. This book enables you to use & customize thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web as well as create your own scripts from scratch.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781118871652"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1118871650"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 640,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=_uTRAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=_uTRAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=_uTRAwAAQBAJ&pg=PP1&dq=js&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=_uTRAwAAQBAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_and_JQuery.html?hl=&id=_uTRAwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=_uTRAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Duckett speaks directly to readers, making this an invaluable resource. This book is also available as a set, Web Design with HTML, CSS, JavaScript and jQuery Set 978119038634 along with HTML and CSS Design and Build Websites 9781118871645."
            }
        },
        {
            "kind": "books#volume",
            "id": "PXa2bby0oQ0C",
            "etag": "L5XstY/hNnA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C",
            "volumeInfo": {
                "title": "JavaScript: The Good Parts",
                "subtitle": "The Good Parts",
                "authors": [
                    "Douglas Crockford"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2008-05-08",
                "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9780596554873"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0596554877"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 172,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 4.5,
                "ratingsCount": 48,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "0.6.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=js&hl=&cd=5&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=PXa2bby0oQ0C&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=PXa2bby0oQ0C"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 23.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 23.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=PXa2bby0oQ0C&rdid=book-PXa2bby0oQ0C&rdot=1&source=gbs_api",
                "offers": [{
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 23990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 23990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=PXa2bby0oQ0C&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "If you develop sites or applications for the Web, this book is an absolute must."
            }
        },
        {
            "kind": "books#volume",
            "id": "IS0EAwAAQBAJ",
            "etag": "r9TMzgYAujg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/IS0EAwAAQBAJ",
            "volumeInfo": {
                "title": "You Don't Know JS: Scope & Closures",
                "authors": [
                    "Kyle Simpson"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2014-03-10",
                "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the \"You Don’t Know JS\" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope, “hoisting”, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781449335564"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "144933556X"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 98,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.8.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=IS0EAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=IS0EAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=IS0EAwAAQBAJ&printsec=frontcover&dq=js&hl=&cd=6&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=IS0EAwAAQBAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/You_Don_t_Know_JS_Scope_Closures.html?hl=&id=IS0EAwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=IS0EAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language."
            }
        },
        {
            "kind": "books#volume",
            "id": "xEApjgEACAAJ",
            "etag": "qj/R4GGWSDE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/xEApjgEACAAJ",
            "volumeInfo": {
                "title": "React.Js Essentials",
                "authors": [
                    "Artemij Fedosejev"
                ],
                "publisher": "Packt Publishing",
                "publishedDate": "2015-08-27",
                "description": "A fast-paced guide to designing and building scalable and maintainable web apps with React.jsAbout This Book• Build maintainable and performant user interfaces for your web applications using React.js• Create reusable React.js components to save time and effort in maintaining your user interfaces• Learn how to build a ready-to-deploy React.js web application, following our step-by-step tutorialWho This Book Is ForIf you're a front-end developer with knowledge of jQuery and its libraries, along with frameworks, such as Angular.JS and Backbone.JS, or native JavaScript development, and you wish to use the fastest web user interface library there is, then this book is ideal for you.What You Will Learn• Install powerful React.js tools to make development much more efficient• Create React elements with properties and children• Get started with stateless and stateful React components• Use JSX to speed up your React.js development process• Add reactivity to your React components with lifecycle methods• Integrate your React components with other JavaScript libraries• Utilize the Flux application architecture with your React components• Test your React components with Jest test frameworkIn DetailBuilding web applications with maintainable and performant user interfaces is a challenge that many have faced for more than a decade, but no one has risen to this challenge quite like React.js. Today React.js is used by Facebook, Instagram, Khan Academy, and Imperial College London, to name a few. Many new users recognize the benefits of React.js and adopt it in their own projects, forming a fast-growing community. The speed at which React.js has evolved promises a bright future for those who invest in learning it today.React.js Essentials will take you on a fast-paced journey through building your own maintainable React.js application. Begin by exploring how you can create single and multiple user interface elements. Create stateless and stateful components and make them reactive, learn to interact between your components and lifecycle methods and gauge how to effectively integrate your user interface components with other JavaScript libraries. Delve deep into the core elements of the Flux architecture and learn how to manage your application using stores. Finish by going that extra mile with the Jest test framework, running multiple tests on your application and find solutions to scale it further without complexity.Style and approachThe book adopts a step-by-step, hands-on approach with ample codes to ensure you learn React.js at a fast pace.",
                "industryIdentifiers": [{
                        "type": "ISBN_10",
                        "identifier": "1783551623"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781783551620"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 208,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=xEApjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=xEApjgEACAAJ&dq=js&hl=&cd=7&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=xEApjgEACAAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/React_Js_Essentials.html?hl=&id=xEApjgEACAAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=xEApjgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "A fast-paced guide to designing and building scalable and maintainable web apps with React.jsAbout This Book- Build maintainable and performant user interfaces for your web applications using React.js- Create reusable React.js components to ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "yv8ntAEACAAJ",
            "etag": "5Mx8VBs+j0M",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/yv8ntAEACAAJ",
            "volumeInfo": {
                "title": "Get Programming with Node.js",
                "authors": [
                    "Jonathan Wexler"
                ],
                "publisher": "Pearson Professional",
                "publishedDate": "2019-02-28",
                "description": "\"Get Programming with Node.js teaches you to build web servers using JavaScript and Node. In this engaging tutorial, you'll work through eight complete projects, from writing the code for your first web server to adding live chat to a web app. Your hands will stay on the keyboard as you explore the most important aspects of the Node development process, including security, database management, authenticating user accounts, and deploying to production. You'll especially appreciate the easy-to-follow discussions, illuminating diagrams, and carefully explained code!\" --",
                "industryIdentifiers": [{
                        "type": "ISBN_10",
                        "identifier": "1617294748"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781617294747"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 480,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=yv8ntAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=yv8ntAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=yv8ntAEACAAJ&dq=js&hl=&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=yv8ntAEACAAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Get_Programming_with_Node_js.html?hl=&id=yv8ntAEACAAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=yv8ntAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "If you want to use JavaScript on the server, Node.js is your choice. About the Book Get Programming with Node.js teaches you to build web servers using JavaScript and Node."
            }
        },
        {
            "kind": "books#volume",
            "id": "R889zgEACAAJ",
            "etag": "Lsm+9BFVTFg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/R889zgEACAAJ",
            "volumeInfo": {
                "title": "Learning Tensorflow. Js",
                "subtitle": "Machine Learning in JavaScript",
                "authors": [
                    "Gant Laborde"
                ],
                "publisher": "O'Reilly Media",
                "publishedDate": "2021-08-17",
                "description": "Combining the demand for AI with the ubiquity of JavaScript was inevitable. With Google's TensorFlow.js framework, seasoned AI veterans and web developers alike can help propel the future of AI-driven websites. In this guide, author Gant Laborde--Google Developer Expert in machine learning and the web--provides a hands-on, end-to-end approach to TensorFlow.js fundamentals for a broad technical audience that includes data scientists, engineers, web developers, students, and researchers. You'll begin by working through some basic examples in TensorFlow.js before diving deeper into neural network architectures, DataFrames, TensorFlow Hub, model conversion, transfer learning, and more. Once you finish this book, you'll know how to build and deploy production-ready deep learning systems with TensorFlow.js. Explore tensors, the most fundamental structure of machine learning Convert data into tensors and back with a real-world example Combine AI with the web using TensorFlow.js and other tools Use resources to convert, train, and manage machine learning data Start building and training your own training models from scratch Learn how to create your own image classification models Examine transfer learning: retraining an advanced model to perform a new task",
                "industryIdentifiers": [{
                        "type": "ISBN_10",
                        "identifier": "1492090794"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781492090793"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 300,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=R889zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=R889zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=R889zgEACAAJ&dq=js&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=R889zgEACAAJ&dq=js&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Tensorflow_Js.html?hl=&id=R889zgEACAAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=R889zgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Once you finish this book, you&#39;ll know how to build and deploy production-readydeep learning systems with TensorFlow.js.&quot;"
            }
        },
        {
            "kind": "books#volume",
            "id": "L46fX62D5qYC",
            "etag": "6QcKGddtnN0",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/L46fX62D5qYC",
            "volumeInfo": {
                "title": "Learning JavaScript Design Patterns",
                "subtitle": "A JavaScript and jQuery Developer's Guide",
                "authors": [
                    "Addy Osmani"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2012-07-08",
                "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you. Explore many popular design patterns, including Modules, Observers, Facades, and Mediators. Learn how modern architectural patterns—such as MVC, MVP, and MVVM—are useful from the perspective of a modern web application developer. This book also walks experienced JavaScript developers through modern module formats, how to namespace code effectively, and other essential topics. Learn the structure of design patterns and how they are written Understand different pattern categories, including creational, structural, and behavioral Walk through more than 20 classical and modern design patterns in JavaScript Use several options for writing modular code—including the Module pattern, Asyncronous Module Definition (AMD), and CommonJS Discover design patterns implemented in the jQuery library Learn popular design patterns for writing maintainable jQuery plug-ins \"This book should be in every JavaScript developer’s hands. It’s the go-to book on JavaScript patterns that will be read and referenced many times in the future.\"—Andrée Hansson, Lead Front-End Developer, presis!",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781449334871"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1449334873"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 254,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.8.8.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=L46fX62D5qYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=L46fX62D5qYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=L46fX62D5qYC&printsec=frontcover&dq=js&hl=&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=L46fX62D5qYC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=L46fX62D5qYC"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 38.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 38.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=L46fX62D5qYC&rdid=book-L46fX62D5qYC&rdot=1&source=gbs_api",
                "offers": [{
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 38990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 38990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=L46fX62D5qYC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book also walks experienced JavaScript developers through modern module formats, how to namespace code effectively, and other essential topics."
            }
        }
    ]
}

export const getBookItems = ():Array<BookItem> => answer.items

export const getBookItem = (id: string):BookItem | undefined => answer.items.find(it => it.id === id)

export const answerTypeCheck = (nameOfObject = 'answer', data = answer, checkTemplate = dataForCheck) => {
    const TypesCheck = (objName: any ,obj: any ,objForCheck: any ) => {

        const isPrimitiveTextType = (val:any) => {
            if (
                val === 'string' ||
                val === 'boolean' ||
                val === 'number' ||
                val === 'bigint' || 
                val === 'symbol'
            ) {
                return true;
            };
            return false;
        }

        const arrayHandle = (keyName: any , array: any[] ,objForCheck: any[] ) => {
            if (array.length !== objForCheck.length) {
                // console.log(keyName + ' length not correspond with check array length')
                array.map((item,index) => {
                    TypesCheck(keyName + '[' + index + ']',item,objForCheck[0])
                })
            } else {
                array.map((item,index) => {
                    TypesCheck(keyName + '[' + index + ']',item,objForCheck[index])
                })
            }
        }

        // console.log(objName);
        // console.log(obj);
        if (typeof objForCheck === 'undefined') {
            console.log(objName + ' new element');
        }
        
        if (isPrimitiveTextType(objForCheck)) {
            // console.log('primitive')
            if (!(typeof obj === objForCheck)) {
                console.log(objName +' type is not correct')
            }
        } else if (typeof obj === 'undefined') {
                console.log(objName + 'is undefined ===================================================')
        } else if (Array.isArray(objForCheck)){
            // console.log('array')
            arrayHandle(objName,obj,objForCheck)
        } else if (typeof obj === 'object' && typeof objForCheck === 'object') {
            // console.log('object')
            if (!(Object.keys(obj).length === Object.entries(objForCheck).length)) {
                if (Object.keys(obj).length > Object.entries(objForCheck).length) {
                    // console.log(objName + ' on data more keys then template')
                    // console.log(Object.keys(obj).filter(el => !Object.keys(objForCheck).includes(el)))
                } else {
                    // console.log(objName + ' on data less keys then template')
                    // console.log(Object.keys(objForCheck).filter(el => !Object.keys(obj).includes(el)))
                }
            }
            Object.entries(obj).map((elem: any ,i: number ,array: any) => {
                TypesCheck(objName + '.' + elem[0],elem[1],objForCheck[elem[0]])
            })
        } else {
            console.log('something goes wrong')
        }
    
    }

    TypesCheck( nameOfObject, data , checkTemplate )

    return "allChecked";  
}

export default answer