const searchInfo = {
    textSnippet: 'string'
}

const accessInfo = {
                "country": 'string',
                "viewability": 'string',
                "embeddable": 'boolean',
                "publicDomain": 'boolean',
                "textToSpeechPermission": 'string',
                "epub": {
                    "isAvailable": 'boolean',
                    "acsTokenLink": 'string'                },
                "pdf": {
                    "isAvailable": 'boolean'
                },
                "webReaderLink": 'string', 
                "accessViewStatus": 'string',
                "quoteSharingAllowed": 'boolean'
            }

const saleInfo = {
                "country": 'string',
                "saleability": 'string',
                "isEbook": 'boolean',
                "listPrice": {
                    "amount": 'number',
                    "currencyCode": 'string'
                },
                "retailPrice": {
                    "amount": 'number',
                    "currencyCode": 'string'
                },
                "buyLink": 'string',
                "offers": [{
                    "finskyOfferType": 'number',
                    "listPrice": {
                        "amountInMicros": 'number',
                        "currencyCode": 'string'
                    },
                    "retailPrice": {
                        "amountInMicros": 'number',
                        "currencyCode": 'string' 
                    },
                    "giftable": 'boolean' 
                }]
}
            
const volumeInfo = {
                "title": 'string',
                "subtitle": 'string',
                "authors": ['string'],
                "publisher": 'string',
                "publishedDate": 'string',
                "description": 'string',
                "industryIdentifiers": [{
                        "type": 'string',
                        "identifier": 'string'
                    }],
                "readingModes": {
                    "text": 'boolean',
                    "image": 'boolean'
                },
                "pageCount": 'number',
                "printType": 'string',
                "categories": ['string'],
                "maturityRating": 'string',
                "allowAnonLogging": 'boolean',
                "contentVersion": 'string',
                "panelizationSummary": {
                    "containsEpubBubbles": 'boolean',
                    "containsImageBubbles": 'boolean'
                },
                "imageLinks": {
                    "smallThumbnail": 'string',
                    "thumbnail": 'string'
                },
                "language": 'string',
                "previewLink": 'string',
                "infoLink": 'string',
                "canonicalVolumeLink": 'string',
                "averageRating": 'number',
                "ratingsCount": 'number', 
            }

const bookItem = {
            "kind": 'string',
            "id": 'string',
            "etag": 'string',
            "selfLink": 'string',
            "volumeInfo": volumeInfo,
            "saleInfo": saleInfo,
            "accessInfo": accessInfo,
            "searchInfo": searchInfo
}

export const dataForCheck = {
            "kind": 'string',
            "totalItems": 'number',
            "items": [bookItem]
}

export default (() => dataForCheck)();