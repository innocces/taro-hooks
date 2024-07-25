"use strict";
exports.id = 62;
exports.ids = [62,276];
exports.modules = {

/***/ 64276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatElapsedTime: () => (/* binding */ formatElapsedTime),
/* harmony export */   getDocumentIndexId: () => (/* binding */ getDocumentIndexId),
/* harmony export */   getDocumentProperties: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_0__.JN),
/* harmony export */   getInnerType: () => (/* binding */ getInnerType),
/* harmony export */   getVectorSize: () => (/* binding */ getVectorSize),
/* harmony export */   isArrayType: () => (/* binding */ isArrayType),
/* harmony export */   isGeoPointType: () => (/* binding */ isGeoPointType),
/* harmony export */   isVectorType: () => (/* binding */ isVectorType),
/* harmony export */   validateSchema: () => (/* binding */ validateSchema)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69016);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5482);



async function formatElapsedTime(n) {
    return {
        raw: Number(n),
        formatted: await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .formatNanoseconds */ .j7)(n)
    };
}
async function getDocumentIndexId(doc) {
    if (doc.id) {
        if (typeof doc.id !== 'string') {
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('DOCUMENT_ID_MUST_BE_STRING', typeof doc.id);
        }
        return doc.id;
    }
    return await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .uniqueId */ .NF)();
}
async function validateSchema(doc, schema) {
    for (const [prop, type] of Object.entries(schema)){
        const value = doc[prop];
        if (typeof value === 'undefined') {
            continue;
        }
        if (type === 'geopoint' && typeof value === 'object' && typeof value.lon === 'number' && typeof value.lat === 'number') {
            continue;
        }
        if (type === 'enum' && (typeof value === 'string' || typeof value === 'number')) {
            continue;
        }
        if (type === 'enum[]' && Array.isArray(value)) {
            const valueLength = value.length;
            for(let i = 0; i < valueLength; i++){
                if (typeof value[i] !== 'string' && typeof value[i] !== 'number') {
                    return prop + '.' + i;
                }
            }
            continue;
        }
        if (isVectorType(type)) {
            const vectorSize = getVectorSize(type);
            if (!Array.isArray(value) || value.length !== vectorSize) {
                throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_INPUT_VECTOR', prop, vectorSize, value.length);
            }
            continue;
        }
        if (isArrayType(type)) {
            if (!Array.isArray(value)) {
                return prop;
            }
            const expectedType = getInnerType(type);
            const valueLength = value.length;
            for(let i = 0; i < valueLength; i++){
                if (typeof value[i] !== expectedType) {
                    return prop + '.' + i;
                }
            }
            continue;
        }
        if (typeof type === 'object') {
            if (!value || typeof value !== 'object') {
                return prop;
            }
            // using as ResultDocument is not exactly right but trying to be type-safe here is not useful
            const subProp = await validateSchema(value, type);
            if (subProp) {
                return prop + '.' + subProp;
            }
            continue;
        }
        if (typeof value !== type) {
            return prop;
        }
    }
    return undefined;
}
const IS_ARRAY_TYPE = {
    string: false,
    number: false,
    boolean: false,
    enum: false,
    geopoint: false,
    'string[]': true,
    'number[]': true,
    'boolean[]': true,
    'enum[]': true
};
const INNER_TYPE = {
    'string[]': 'string',
    'number[]': 'number',
    'boolean[]': 'boolean',
    'enum[]': 'enum'
};
function isGeoPointType(type) {
    return type === 'geopoint';
}
function isVectorType(type) {
    return typeof type === 'string' && /^vector\[\d+\]$/.test(type);
}
function isArrayType(type) {
    return typeof type === 'string' && IS_ARRAY_TYPE[type];
}
function getInnerType(type) {
    return INNER_TYPE[type];
}
function getVectorSize(type) {
    const size = Number(type.slice(7, -1));
    switch(true){
        case isNaN(size):
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_VECTOR_VALUE', type);
        case size <= 0:
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .$)('INVALID_VECTOR_SIZE', type);
        default:
            return size;
    }
}

//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ 49579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gd: () => (/* binding */ syncBoundedLevenshtein),
/* harmony export */   X1: () => (/* binding */ boundedLevenshtein)
/* harmony export */ });
/* unused harmony export levenshtein */
/**
 * Inspired by:
 * https://github.com/Yomguithereal/talisman/blob/86ae55cbd040ff021d05e282e0e6c71f2dde21f8/src/metrics/levenshtein.js#L218-L340
 */ function _boundedLevenshtein(a, b, tolerance) {
    // the strings are the same
    if (a === b) {
        return 0;
    }
    // a should be the shortest string
    const swap = a;
    if (a.length > b.length) {
        a = b;
        b = swap;
    }
    let lenA = a.length;
    let lenB = b.length;
    // ignore common prefix
    let startIdx = 0;
    while(startIdx < lenA && a.charCodeAt(startIdx) === b.charCodeAt(startIdx)){
        startIdx++;
    }
    // if string A is subfix of B, we consider the distance 0
    // because we search for prefix!
    // fix https://github.com/askorama/orama/issues/544
    if (startIdx === lenA) {
        return 0;
    }
    // ignore common suffix
    // note: `~-` decreases by a unit in a bitwise fashion
    while(lenA > 0 && a.charCodeAt(~-lenA) === b.charCodeAt(~-lenB)){
        lenA--;
        lenB--;
    }
    // early return when the smallest string is empty
    if (!lenA) {
        return lenB > tolerance ? -1 : lenB;
    }
    lenA -= startIdx;
    lenB -= startIdx;
    // If both strings are smaller than the tolerance, we accept any distance
    // Probably the result distance is wrong, but we don't care:
    // It is always less then the tolerance!
    if (lenA <= tolerance && lenB <= tolerance) {
        return lenA > lenB ? lenA : lenB;
    }
    const delta = lenB - lenA;
    if (tolerance > lenB) {
        tolerance = lenB;
    } else if (delta > tolerance) {
        return -1;
    }
    let i = 0;
    const row = [];
    const characterCodeCache = [];
    while(i < tolerance){
        characterCodeCache[i] = b.charCodeAt(startIdx + i);
        row[i] = ++i;
    }
    while(i < lenB){
        characterCodeCache[i] = b.charCodeAt(startIdx + i);
        row[i++] = tolerance + 1;
    }
    const offset = tolerance - delta;
    const haveMax = tolerance < lenB;
    let jStart = 0;
    let jEnd = tolerance;
    let current = 0;
    let left = 0;
    let above = 0;
    let charA = 0;
    let j = 0;
    // Starting the nested loops
    for(i = 0; i < lenA; i++){
        left = i;
        current = i + 1;
        charA = a.charCodeAt(startIdx + i);
        jStart += i > offset ? 1 : 0;
        jEnd += jEnd < lenB ? 1 : 0;
        for(j = jStart; j < jEnd; j++){
            above = current;
            current = left;
            left = row[j];
            if (charA !== characterCodeCache[j]) {
                // insert current
                if (left < current) {
                    current = left;
                }
                // delete current
                if (above < current) {
                    current = above;
                }
                current++;
            }
            row[j] = current;
        }
        if (haveMax && row[i + delta] > tolerance) {
            return -1;
        }
    }
    return current <= tolerance ? current : -1;
}
/**
 * Computes the Levenshtein distance between two strings (a, b), returning early with -1 if the distance
 * is greater than the given tolerance.
 * It assumes that:
 * - tolerance >= ||a| - |b|| >= 0
 */ async function boundedLevenshtein(a, b, tolerance) {
    const distance = _boundedLevenshtein(a, b, tolerance);
    return {
        distance,
        isBounded: distance >= 0
    };
}
// This is only used internally, keep in sync with the previous one
function syncBoundedLevenshtein(a, b, tolerance) {
    const distance = _boundedLevenshtein(a, b, tolerance);
    return {
        distance,
        isBounded: distance >= 0
    };
}
function levenshtein(a, b) {
    /* c8 ignore next 3 */ if (!a.length) {
        return b.length;
    }
    /* c8 ignore next 3 */ if (!b.length) {
        return a.length;
    }
    const swap = a;
    if (a.length > b.length) {
        a = b;
        b = swap;
    }
    const row = Array.from({
        length: a.length + 1
    }, (_, i)=>i);
    let val = 0;
    for(let i = 1; i <= b.length; i++){
        let prev = i;
        for(let j = 1; j <= a.length; j++){
            if (b[i - 1] === a[j - 1]) {
                val = row[j - 1];
            } else {
                val = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1));
            }
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
}

//# sourceMappingURL=levenshtein.js.map

/***/ }),

/***/ 89473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ createTokenizer),
  J: () => (/* binding */ normalizeToken)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/errors.js
var errors = __webpack_require__(69016);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/diacritics.js
const DIACRITICS_CHARCODE_START = 192;
const DIACRITICS_CHARCODE_END = 383;
const CHARCODE_REPLACE_MAPPING = [
    65,
    65,
    65,
    65,
    65,
    65,
    65,
    67,
    69,
    69,
    69,
    69,
    73,
    73,
    73,
    73,
    69,
    78,
    79,
    79,
    79,
    79,
    79,
    null,
    79,
    85,
    85,
    85,
    85,
    89,
    80,
    115,
    97,
    97,
    97,
    97,
    97,
    97,
    97,
    99,
    101,
    101,
    101,
    101,
    105,
    105,
    105,
    105,
    101,
    110,
    111,
    111,
    111,
    111,
    111,
    null,
    111,
    117,
    117,
    117,
    117,
    121,
    112,
    121,
    65,
    97,
    65,
    97,
    65,
    97,
    67,
    99,
    67,
    99,
    67,
    99,
    67,
    99,
    68,
    100,
    68,
    100,
    69,
    101,
    69,
    101,
    69,
    101,
    69,
    101,
    69,
    101,
    71,
    103,
    71,
    103,
    71,
    103,
    71,
    103,
    72,
    104,
    72,
    104,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    74,
    106,
    75,
    107,
    107,
    76,
    108,
    76,
    108,
    76,
    108,
    76,
    108,
    76,
    108,
    78,
    110,
    78,
    110,
    78,
    110,
    110,
    78,
    110,
    79,
    111,
    79,
    111,
    79,
    111,
    79,
    111,
    82,
    114,
    82,
    114,
    82,
    114,
    83,
    115,
    83,
    115,
    83,
    115,
    83,
    115,
    84,
    116,
    84,
    116,
    84,
    116,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    87,
    119,
    89,
    121,
    89,
    90,
    122,
    90,
    122,
    90,
    122,
    115
];
function replaceChar(charCode) {
    if (charCode < DIACRITICS_CHARCODE_START || charCode > DIACRITICS_CHARCODE_END) return charCode;
    /* c8 ignore next  */ return CHARCODE_REPLACE_MAPPING[charCode - DIACRITICS_CHARCODE_START] || charCode;
}
function replaceDiacritics(str) {
    const stringCharCode = [];
    for(let idx = 0; idx < str.length; idx++){
        stringCharCode[idx] = replaceChar(str.charCodeAt(idx));
    }
    return String.fromCharCode(...stringCharCode);
}

//# sourceMappingURL=diacritics.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/languages.js
var languages = __webpack_require__(32601);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/english-stemmer.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const step2List = {
    ational: 'ate',
    tional: 'tion',
    enci: 'ence',
    anci: 'ance',
    izer: 'ize',
    bli: 'ble',
    alli: 'al',
    entli: 'ent',
    eli: 'e',
    ousli: 'ous',
    ization: 'ize',
    ation: 'ate',
    ator: 'ate',
    alism: 'al',
    iveness: 'ive',
    fulness: 'ful',
    ousness: 'ous',
    aliti: 'al',
    iviti: 'ive',
    biliti: 'ble',
    logi: 'log'
};
const step3List = {
    icate: 'ic',
    ative: '',
    alize: 'al',
    iciti: 'ic',
    ical: 'ic',
    ful: '',
    ness: ''
};
// Consonant
const c = '[^aeiou]';
// Vowel
const v = '[aeiouy]';
// Consonant sequence
const C = c + '[^aeiouy]*';
// Vowel sequence
const V = v + '[aeiou]*';
// [C]VC... is m>0
const mgr0 = '^(' + C + ')?' + V + C;
// [C]VC[V] is m=1
const meq1 = '^(' + C + ')?' + V + C + '(' + V + ')?$';
// [C]VCVC... is m>1
const mgr1 = '^(' + C + ')?' + V + C + V + C;
// vowel in stem
const s_v = '^(' + C + ')?' + v;
function english_stemmer_stemmer(w) {
    let stem;
    let suffix;
    let re;
    let re2;
    let re3;
    let re4;
    if (w.length < 3) {
        return w;
    }
    const firstch = w.substring(0, 1);
    if (firstch == 'y') {
        w = firstch.toUpperCase() + w.substring(1);
    }
    re = /^(.+?)(ss|i)es$/;
    re2 = /^(.+?)([^s])s$/;
    if (re.test(w)) {
        w = w.replace(re, '$1$2');
    } else if (re2.test(w)) {
        w = w.replace(re2, '$1$2');
    }
    re = /^(.+?)eed$/;
    re2 = /^(.+?)(ed|ing)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        re = new RegExp(mgr0);
        if (re.test(fp[1])) {
            re = /.$/;
            w = w.replace(re, '');
        }
    } else if (re2.test(w)) {
        const fp = re2.exec(w);
        stem = fp[1];
        re2 = new RegExp(s_v);
        if (re2.test(stem)) {
            w = stem;
            re2 = /(at|bl|iz)$/;
            re3 = new RegExp('([^aeiouylsz])\\1$');
            re4 = new RegExp('^' + C + v + '[^aeiouwxy]$');
            if (re2.test(w)) {
                w = w + 'e';
            } else if (re3.test(w)) {
                re = /.$/;
                w = w.replace(re, '');
            } else if (re4.test(w)) {
                w = w + 'e';
            }
        }
    }
    re = /^(.+?)y$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(s_v);
        if (stem && re.test(stem)) {
            w = stem + 'i';
        }
    }
    re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        suffix = fp === null || fp === void 0 ? void 0 : fp[2];
        re = new RegExp(mgr0);
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step2List[suffix];
        }
    }
    re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        suffix = fp === null || fp === void 0 ? void 0 : fp[2];
        re = new RegExp(mgr0);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step3List[suffix];
        }
    }
    re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    re2 = /^(.+?)(s|t)(ion)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(mgr1);
        if (stem && re.test(stem)) {
            w = stem;
        }
    } else if (re2.test(w)) {
        const fp = re2.exec(w);
        stem = (fp === null || fp === void 0 ? void 0 : fp[1]) ?? '' + (fp === null || fp === void 0 ? void 0 : fp[2]) ?? '';
        re2 = new RegExp(mgr1);
        if (re2.test(stem)) {
            w = stem;
        }
    }
    re = /^(.+?)e$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(mgr1);
        re2 = new RegExp(meq1);
        re3 = new RegExp('^' + C + v + '[^aeiouwxy]$');
        if (stem && (re.test(stem) || re2.test(stem) && !re3.test(stem))) {
            w = stem;
        }
    }
    re = /ll$/;
    re2 = new RegExp(mgr1);
    if (re.test(w) && re2.test(w)) {
        re = /.$/;
        w = w.replace(re, '');
    }
    if (firstch == 'y') {
        w = firstch.toLowerCase() + w.substring(1);
    }
    return w;
}

//# sourceMappingURL=english-stemmer.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/index.js




function normalizeToken(prop, token) {
    var _this_stopWords;
    const key = `${this.language}:${prop}:${token}`;
    if (this.normalizationCache.has(key)) {
        return this.normalizationCache.get(key);
    }
    // Remove stopwords if enabled
    if ((_this_stopWords = this.stopWords) === null || _this_stopWords === void 0 ? void 0 : _this_stopWords.includes(token)) {
        this.normalizationCache.set(key, '');
        return '';
    }
    // Apply stemming if enabled
    if (this.stemmer && !this.stemmerSkipProperties.has(prop)) {
        token = this.stemmer(token);
    }
    token = replaceDiacritics(token);
    this.normalizationCache.set(key, token);
    return token;
}
/* c8 ignore next 10 */ function trim(text) {
    while(text[text.length - 1] === ''){
        text.pop();
    }
    while(text[0] === ''){
        text.shift();
    }
    return text;
}
function tokenize(input, language, prop) {
    if (language && language !== this.language) {
        throw (0,errors/* createError */.$)('LANGUAGE_NOT_SUPPORTED', language);
    }
    /* c8 ignore next 3 */ if (typeof input !== 'string') {
        return [
            input
        ];
    }
    let tokens;
    if (prop && this.tokenizeSkipProperties.has(prop)) {
        tokens = [
            this.normalizeToken.bind(this, prop ?? '')(input)
        ];
    } else {
        const splitRule = languages/* SPLITTERS */.DO[this.language];
        tokens = input.toLowerCase().split(splitRule).map(this.normalizeToken.bind(this, prop ?? '')).filter(Boolean);
    }
    const trimTokens = trim(tokens);
    if (!this.allowDuplicates) {
        return Array.from(new Set(trimTokens));
    }
    return trimTokens;
}
async function createTokenizer(config = {}) {
    if (!config.language) {
        config.language = 'english';
    } else if (!languages/* SUPPORTED_LANGUAGES */.Fc.includes(config.language)) {
        throw (0,errors/* createError */.$)('LANGUAGE_NOT_SUPPORTED', config.language);
    }
    // Handle stemming - It is disabled by default
    let stemmer;
    if (config.stemming || config.stemmer && !('stemming' in config)) {
        if (config.stemmer) {
            if (typeof config.stemmer !== 'function') {
                throw (0,errors/* createError */.$)('INVALID_STEMMER_FUNCTION_TYPE');
            }
            stemmer = config.stemmer;
        } else {
            if (config.language === 'english') {
                stemmer = english_stemmer_stemmer;
            } else {
                throw (0,errors/* createError */.$)('MISSING_STEMMER', config.language);
            }
        }
    }
    // Handle stopwords
    let stopWords;
    if (config.stopWords !== false) {
        stopWords = [];
        if (Array.isArray(config.stopWords)) {
            stopWords = config.stopWords;
        } else if (typeof config.stopWords === 'function') {
            stopWords = await config.stopWords(stopWords);
        } else if (config.stopWords) {
            throw (0,errors/* createError */.$)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
        }
        // Make sure stopWords is just an array of strings
        if (!Array.isArray(stopWords)) {
            throw (0,errors/* createError */.$)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
        }
        for (const s of stopWords){
            if (typeof s !== 'string') {
                throw (0,errors/* createError */.$)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
            }
        }
    }
    // Create the tokenizer
    const tokenizer = {
        tokenize,
        language: config.language,
        stemmer,
        stemmerSkipProperties: new Set(config.stemmerSkipProperties ? [
            config.stemmerSkipProperties
        ].flat() : []),
        tokenizeSkipProperties: new Set(config.tokenizeSkipProperties ? [
            config.tokenizeSkipProperties
        ].flat() : []),
        stopWords,
        allowDuplicates: Boolean(config.allowDuplicates),
        normalizeToken,
        normalizationCache: new Map()
    };
    tokenizer.tokenize = tokenize.bind(tokenizer);
    tokenizer.normalizeToken = normalizeToken;
    return tokenizer;
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 84062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  create: () => (/* binding */ create_create)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/defaults.js
var defaults = __webpack_require__(64276);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/utils.js
var utils = __webpack_require__(5482);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/internal-document-id-store.js
var internal_document_id_store = __webpack_require__(51375);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/documents-store.js

async function create(_, sharedInternalDocumentStore) {
    return {
        sharedInternalDocumentStore,
        docs: {},
        count: 0
    };
}
async function get(store, id) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(store.sharedInternalDocumentStore, id);
    return store.docs[internalId];
}
async function getMultiple(store, ids) {
    const idsLength = ids.length;
    const found = Array.from({
        length: idsLength
    });
    for(let i = 0; i < idsLength; i++){
        const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(store.sharedInternalDocumentStore, ids[i]);
        found[i] = store.docs[internalId];
    }
    return found;
}
async function getAll(store) {
    return store.docs;
}
async function store(store, id, doc) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(store.sharedInternalDocumentStore, id);
    if (typeof store.docs[internalId] !== 'undefined') {
        return false;
    }
    store.docs[internalId] = doc;
    store.count++;
    return true;
}
async function remove(store, id) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(store.sharedInternalDocumentStore, id);
    if (typeof store.docs[internalId] === 'undefined') {
        return false;
    }
    delete store.docs[internalId];
    store.count--;
    return true;
}
async function count(store) {
    return store.count;
}
async function load(sharedInternalDocumentStore, raw) {
    const rawDocument = raw;
    return {
        docs: rawDocument.docs,
        count: rawDocument.count,
        sharedInternalDocumentStore
    };
}
async function save(store) {
    return {
        docs: store.docs,
        count: store.count
    };
}
async function createDocumentsStore() {
    return {
        create,
        get,
        getMultiple,
        getAll,
        store,
        remove,
        count,
        load,
        save
    };
}

//# sourceMappingURL=documents-store.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/errors.js
var errors = __webpack_require__(69016);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/plugins.js

const AVAILABLE_PLUGIN_HOOKS = [
    'beforeInsert',
    'afterInsert',
    'beforeRemove',
    'afterRemove',
    'beforeUpdate',
    'afterUpdate',
    'beforeSearch',
    'afterSearch',
    'beforeInsertMultiple',
    'afterInsertMultiple',
    'beforeRemoveMultiple',
    'afterRemoveMultiple',
    'beforeUpdateMultiple',
    'afterUpdateMultiple',
    'beforeLoad',
    'afterLoad',
    'afterCreate'
];
async function getAllPluginsByHook(orama, hook) {
    var _orama_plugins;
    const pluginsToRun = [];
    const pluginsLength = (_orama_plugins = orama.plugins) === null || _orama_plugins === void 0 ? void 0 : _orama_plugins.length;
    if (!pluginsLength) {
        return pluginsToRun;
    }
    for(let i = 0; i < pluginsLength; i++){
        try {
            const plugin = await orama.plugins[i];
            if (typeof plugin[hook] === 'function') {
                pluginsToRun.push(plugin[hook]);
            }
        } catch (error) {
            console.error('Caught error in getAllPluginsByHook:', error);
            throw (0,errors/* createError */.$)('PLUGIN_CRASHED');
        }
    }
    return pluginsToRun;
}

//# sourceMappingURL=plugins.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/hooks.js
var hooks = __webpack_require__(73000);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/trees/avl.js

function rotateLeft(node) {
    const right = node.r;
    node.r = right.l;
    right.l = node;
    node.h = Math.max(getHeight(node.l), getHeight(node.r)) + 1;
    right.h = Math.max(getHeight(right.l), getHeight(right.r)) + 1;
    return right;
}
function rotateRight(node) {
    const left = node.l;
    node.l = left.r;
    left.r = node;
    node.h = Math.max(getHeight(node.l), getHeight(node.r)) + 1;
    left.h = Math.max(getHeight(left.l), getHeight(left.r)) + 1;
    return left;
}
function contains(node, key) {
    return !!find(node, key);
}
function getSize(root) {
    let size = 0;
    const queue = [];
    if (root !== null) {
        queue.push(root.root);
    }
    while(queue.length > 0){
        const node = queue.shift();
        size++;
        if (node.l !== null) {
            queue.push(node.l);
        }
        if (node.r !== null) {
            queue.push(node.r);
        }
    }
    return size;
}
function isBalanced(root) {
    if (root === null) return true;
    const stack = [
        root.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (node != null) {
            const leftHeight = getHeight(node.l);
            const rightHeight = getHeight(node.r);
            const heightDiff = leftHeight - rightHeight;
            if (Math.abs(heightDiff) > 1) {
                return false;
            }
            if (node.l !== null) {
                stack.push(node.l);
            }
            if (node.r !== null) {
                stack.push(node.r);
            }
        }
    }
    return true;
}
function rangeSearch(node, min, max) {
    const result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        if (min < node.k) {
            traverse(node.l);
        }
        if (node.k >= min && node.k <= max) {
            (0,utils/* safeArrayPush */.h)(result, node.v);
        }
        if (max > node.k) {
            traverse(node.r);
        }
    }
    traverse(node.root);
    return result;
}
function greaterThan(node, key, inclusive = false) {
    const result = [];
    if (node === null) return result;
    const stack = [
        node.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (!node) {
            continue;
        }
        if (inclusive && node.k >= key) {
            (0,utils/* safeArrayPush */.h)(result, node.v);
        }
        if (!inclusive && node.k > key) {
            (0,utils/* safeArrayPush */.h)(result, node.v);
        }
        stack.push(node.r);
        stack.push(node.l);
    }
    return result;
}
function lessThan(node, key, inclusive = false) {
    const result = [];
    if (node === null) return result;
    const stack = [
        node.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (!node) {
            continue;
        }
        if (inclusive && node.k <= key) {
            (0,utils/* safeArrayPush */.h)(result, node.v);
        }
        if (!inclusive && node.k < key) {
            (0,utils/* safeArrayPush */.h)(result, node.v);
        }
        stack.push(node.r);
        stack.push(node.l);
    }
    return result;
}
function getNodeByKey(node, key) {
    while(node !== null){
        if (key < node.k) {
            node = node.l;
        } else if (key > node.k) {
            node = node.r;
        } else {
            return node;
        }
    }
    return null;
}
function avl_create(key, value) {
    return {
        root: {
            k: key,
            v: value,
            l: null,
            r: null,
            h: 0
        }
    };
}
function insert(rootNode, key, newValue) {
    function insertNode(node, key, newValue) {
        if (node === null) {
            return {
                k: key,
                v: newValue,
                l: null,
                r: null,
                h: 0
            };
        }
        if (key < node.k) {
            node.l = insertNode(node.l, key, newValue);
        } else if (key > node.k) {
            node.r = insertNode(node.r, key, newValue);
        } else {
            for (const value of newValue){
                node.v.push(value);
            }
            return node;
        }
        node.h = 1 + Math.max(getHeight(node.l), getHeight(node.r));
        const balanceFactor = getHeight(node.l) - getHeight(node.r);
        if (balanceFactor > 1 && key < node.l.k) {
            return rotateRight(node);
        }
        if (balanceFactor < -1 && key > node.r.k) {
            return rotateLeft(node);
        }
        if (balanceFactor > 1 && key > node.l.k) {
            node.l = rotateLeft(node.l);
            return rotateRight(node);
        }
        if (balanceFactor < -1 && key < node.r.k) {
            node.r = rotateRight(node.r);
            return rotateLeft(node);
        }
        return node;
    }
    rootNode.root = insertNode(rootNode.root, key, newValue);
}
function getHeight(node) {
    return node !== null ? node.h : -1;
}
function find(root, key) {
    const node = getNodeByKey(root.root, key);
    if (node === null) {
        return null;
    }
    return node.v;
}
function avl_remove(rootNode, key) {
    if (rootNode === null || rootNode.root === null) {
        return;
    }
    let node = rootNode.root;
    let parentNode = null;
    while(node != null && node.k !== key){
        parentNode = node;
        if (key < node.k) {
            node = node.l;
        } else {
            node = node.r;
        }
    }
    if (node === null) {
        return;
    }
    const deleteNode = ()=>{
        if (node.l === null && node.r === null) {
            if (parentNode === null) {
                rootNode.root = null;
            } else {
                if (parentNode.l === node) {
                    parentNode.l = null;
                } else {
                    parentNode.r = null;
                }
            }
        } else if (node.l != null && node.r != null) {
            let minValueNode = node.r;
            let minValueParent = node;
            while(minValueNode.l != null){
                minValueParent = minValueNode;
                minValueNode = minValueNode.l;
            }
            node.k = minValueNode.k;
            if (minValueParent === node) {
                minValueParent.r = minValueNode.r;
            } else {
                minValueParent.l = minValueNode.r;
            }
        } else {
            const childNode = node.l != null ? node.l : node.r;
            if (parentNode === null) {
                rootNode.root = childNode;
            } else {
                if (parentNode.l === node) {
                    parentNode.l = childNode;
                } else {
                    parentNode.r = childNode;
                }
            }
        }
    };
    deleteNode();
}
function removeDocument(root, id, key) {
    const node = getNodeByKey(root.root, key);
    if (!node) {
        return;
    }
    if (node.v.length === 1) {
        avl_remove(root, key);
        return;
    }
    node.v.splice(node.v.indexOf(id), 1);
}

//# sourceMappingURL=avl.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/trees/flat.js

function flat_create() {
    return {
        numberToDocumentId: new Map()
    };
}
function flat_insert(root, key, value) {
    if (root.numberToDocumentId.has(key)) {
        root.numberToDocumentId.get(key).push(value);
        return root;
    }
    root.numberToDocumentId.set(key, [
        value
    ]);
    return root;
}
function flat_find(root, key) {
    return root.numberToDocumentId.get(key) ?? null;
}
function flat_remove(root, key) {
    if (root != null) {
        root.numberToDocumentId.delete(key);
    }
    return root;
}
function flat_removeDocument(root, id, key) {
    var _root_numberToDocumentId_get, _root_numberToDocumentId_get1;
    root === null || root === void 0 ? void 0 : root.numberToDocumentId.set(key, ((_root_numberToDocumentId_get = root === null || root === void 0 ? void 0 : root.numberToDocumentId.get(key)) === null || _root_numberToDocumentId_get === void 0 ? void 0 : _root_numberToDocumentId_get.filter((v)=>v !== id)) ?? []);
    if (((_root_numberToDocumentId_get1 = root === null || root === void 0 ? void 0 : root.numberToDocumentId.get(key)) === null || _root_numberToDocumentId_get1 === void 0 ? void 0 : _root_numberToDocumentId_get1.length) === 0) {
        root === null || root === void 0 ? void 0 : root.numberToDocumentId.delete(key);
    }
}
function flat_contains(node, key) {
    return !(flat_find(node, key) == null);
}
function flat_getSize(root) {
    let size = 0;
    for (const [, value] of (root === null || root === void 0 ? void 0 : root.numberToDocumentId) ?? []){
        size += value.length;
    }
    return size;
}
function filter(root, operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
        throw new Error('Invalid operation');
    }
    const operationType = operationKeys[0];
    switch(operationType){
        case 'eq':
            {
                const value = operation[operationType];
                return root.numberToDocumentId.get(value) ?? [];
            }
        case 'in':
            {
                const value = operation[operationType];
                const result = [];
                for (const v of value){
                    const ids = root.numberToDocumentId.get(v);
                    if (ids != null) {
                        (0,utils/* safeArrayPush */.h)(result, ids);
                    }
                }
                return result;
            }
        case 'nin':
            {
                const value = operation[operationType];
                const result = [];
                const keys = root.numberToDocumentId.keys();
                for (const key of keys){
                    if (value.includes(key)) {
                        continue;
                    }
                    const ids = root.numberToDocumentId.get(key);
                    if (ids != null) {
                        (0,utils/* safeArrayPush */.h)(result, ids);
                    }
                }
                return result;
            }
    }
    throw new Error('Invalid operation');
}
function filterArr(root, operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
        throw new Error('Invalid operation');
    }
    const operationType = operationKeys[0];
    switch(operationType){
        case 'containsAll':
            {
                const values = operation[operationType];
                const ids = values.map((value)=>root.numberToDocumentId.get(value) ?? []);
                return (0,utils/* intersect */.y$)(ids);
            }
    }
    throw new Error('Invalid operation');
}

//# sourceMappingURL=flat.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/levenshtein.js
var levenshtein = __webpack_require__(49579);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/trees/radix.js


class Node {
    constructor(key, subWord, end){
        this.k = key;
        this.s = subWord;
        this.e = end;
    }
    // Node children
    c = {};
    // Node documents
    d = [];
    // Node word
    w = '';
    toJSON() {
        return {
            w: this.w,
            s: this.s,
            c: this.c,
            d: this.d,
            e: this.e
        };
    }
}
function updateParent(node, parent) {
    node.w = parent.w + node.s;
}
function addDocument(node, docID) {
    node.d.push(docID);
}
function radix_removeDocument(node, docID) {
    const index = node.d.indexOf(docID);
    /* c8 ignore next 3 */ if (index === -1) {
        return false;
    }
    node.d.splice(index, 1);
    return true;
}
function findAllWords(node, output, term, exact, tolerance) {
    if (node.e) {
        const { w , d: docIDs  } = node;
        if (exact && w !== term) {
            return {};
        }
        // always check in own property to prevent access to inherited properties
        // fix https://github.com/askorama/orama/issues/137
        if ((0,utils/* getOwnProperty */.g5)(output, w) == null) {
            if (tolerance) {
                // computing the absolute difference of letters between the term and the word
                const difference = Math.abs(term.length - w.length);
                // if the tolerance is set, check whether the edit distance is within tolerance.
                // In that case, we don't need to add the word to the output
                if (difference <= tolerance && (0,levenshtein/* syncBoundedLevenshtein */.Gd)(term, w, tolerance).isBounded) {
                    output[w] = [];
                }
            } else {
                // prevent default tolerance not set
                output[w] = [];
            }
        }
        // check if _output[w] exists and then add the doc to it
        // always check in own property to prevent access to inherited properties
        // fix https://github.com/askorama/orama/issues/137
        if ((0,utils/* getOwnProperty */.g5)(output, w) != null && docIDs.length > 0) {
            const docs = new Set(output[w]);
            const docIDsLength = docIDs.length;
            for(let i = 0; i < docIDsLength; i++){
                docs.add(docIDs[i]);
            }
            output[w] = Array.from(docs);
        }
    }
    // recursively search the children
    for (const character of Object.keys(node.c)){
        findAllWords(node.c[character], output, term, exact, tolerance);
    }
    return output;
}
function getCommonPrefix(a, b) {
    let commonPrefix = '';
    const len = Math.min(a.length, b.length);
    for(let i = 0; i < len; i++){
        if (a[i] !== b[i]) {
            return commonPrefix;
        }
        commonPrefix += a[i];
    }
    return commonPrefix;
}
function radix_create(end = false, subWord = '', key = '') {
    return new Node(key, subWord, end);
}
function radix_insert(root, word, docId) {
    const wordLength = word.length;
    for(let i = 0; i < wordLength; i++){
        const currentCharacter = word[i];
        const wordAtIndex = word.substring(i);
        const rootChildCurrentChar = root.c[currentCharacter];
        if (rootChildCurrentChar) {
            const edgeLabel = rootChildCurrentChar.s;
            const edgeLabelLength = edgeLabel.length;
            const commonPrefix = getCommonPrefix(edgeLabel, wordAtIndex);
            const commonPrefixLength = commonPrefix.length;
            // the wordAtIndex matches exactly with an existing child node
            if (edgeLabel === wordAtIndex) {
                addDocument(rootChildCurrentChar, docId);
                rootChildCurrentChar.e = true;
                return;
            }
            const edgeLabelAtCommonPrefix = edgeLabel[commonPrefixLength];
            // the wordAtIndex is completely contained in the child node subword
            if (commonPrefixLength < edgeLabelLength && commonPrefixLength === wordAtIndex.length) {
                const newNode = radix_create(true, wordAtIndex, currentCharacter) // Create a new node with end set to true
                ;
                newNode.c[edgeLabelAtCommonPrefix] = rootChildCurrentChar;
                const newNodeChild = newNode.c[edgeLabelAtCommonPrefix];
                newNodeChild.s = edgeLabel.substring(commonPrefixLength);
                newNodeChild.k = edgeLabelAtCommonPrefix;
                root.c[currentCharacter] = newNode;
                updateParent(newNode, root);
                updateParent(newNodeChild, newNode);
                addDocument(newNode, docId);
                return;
            }
            // the wordAtIndex is partially contained in the child node subword
            if (commonPrefixLength < edgeLabelLength && commonPrefixLength < wordAtIndex.length) {
                const inbetweenNode = radix_create(false, commonPrefix, currentCharacter);
                inbetweenNode.c[edgeLabelAtCommonPrefix] = rootChildCurrentChar;
                root.c[currentCharacter] = inbetweenNode;
                const inbetweenNodeChild = inbetweenNode.c[edgeLabelAtCommonPrefix];
                inbetweenNodeChild.s = edgeLabel.substring(commonPrefixLength);
                inbetweenNodeChild.k = edgeLabelAtCommonPrefix;
                const wordAtCommonPrefix = wordAtIndex[commonPrefixLength];
                const newNode = radix_create(true, word.substring(i + commonPrefixLength), wordAtCommonPrefix);
                addDocument(newNode, docId);
                inbetweenNode.c[wordAtCommonPrefix] = newNode;
                updateParent(inbetweenNode, root);
                updateParent(newNode, inbetweenNode);
                updateParent(inbetweenNodeChild, inbetweenNode);
                return;
            }
            // skip to the next divergent character
            i += edgeLabelLength - 1;
            // navigate in the child node
            root = rootChildCurrentChar;
        } else {
            // if the node for the current character doesn't exist create new node
            const newNode = radix_create(true, wordAtIndex, currentCharacter);
            addDocument(newNode, docId);
            root.c[currentCharacter] = newNode;
            updateParent(newNode, root);
            return;
        }
    }
}
function _findLevenshtein(node, term, index, tolerance, originalTolerance, output) {
    if (tolerance < 0) {
        return;
    }
    if (node.w.startsWith(term)) {
        findAllWords(node, output, term, false, 0);
        return;
    }
    if (node.e) {
        const { w , d: docIDs  } = node;
        if (w) {
            if ((0,levenshtein/* syncBoundedLevenshtein */.Gd)(term, w, originalTolerance).isBounded) {
                output[w] = [];
            }
            if ((0,utils/* getOwnProperty */.g5)(output, w) != null && docIDs.length > 0) {
                const docs = new Set(output[w]);
                const docIDsLength = docIDs.length;
                for(let i = 0; i < docIDsLength; i++){
                    docs.add(docIDs[i]);
                }
                output[w] = Array.from(docs);
            }
        }
    }
    if (index >= term.length) {
        return;
    }
    // Match current character without consuming tolerance
    if (term[index] in node.c) {
        _findLevenshtein(node.c[term[index]], term, index + 1, tolerance, originalTolerance, output);
    }
    // If tolerance is still available, consider other branches:
    // 1. Deletion (skip the current term character)
    _findLevenshtein(node, term, index + 1, tolerance - 1, originalTolerance, output);
    // 2. Insertion (skip the current tree node character)
    for(const character in node.c){
        _findLevenshtein(node.c[character], term, index, tolerance - 1, originalTolerance, output);
    }
    // 3. Substitution (skip both current term character and tree node character)
    for(const character in node.c){
        if (character !== term[index]) {
            _findLevenshtein(node.c[character], term, index + 1, tolerance - 1, originalTolerance, output);
        }
    }
}
function radix_find(root, { term , exact , tolerance  }) {
    // Find the closest node to the term
    // Use `if` condition because tolerance `0` is supposed to match only prefix.
    // (allows infinite insertions at end, which is against normal levenshtein logic).
    // (new _findLevenshtein only handles not exact and tolerance>0 condition)
    if (tolerance && !exact) {
        const output = {};
        tolerance = tolerance || 0;
        _findLevenshtein(root, term, 0, tolerance || 0, tolerance, output);
        return output;
    } else {
        const termLength = term.length;
        for(let i = 0; i < termLength; i++){
            const character = term[i];
            if (character in root.c) {
                const rootChildCurrentChar = root.c[character];
                const edgeLabel = rootChildCurrentChar.s;
                const termSubstring = term.substring(i);
                // find the common prefix between two words ex: prime and primate = prim
                const commonPrefix = getCommonPrefix(edgeLabel, termSubstring);
                const commonPrefixLength = commonPrefix.length;
                // if the common prefix length is equal to edgeLabel length (the node subword) it means they are a match
                // if the common prefix is equal to the term means it is contained in the node
                if (commonPrefixLength !== edgeLabel.length && commonPrefixLength !== termSubstring.length) {
                    // if tolerance is set we take the current node as the closest
                    if (tolerance) break;
                    return {};
                }
                // skip the subword length and check the next divergent character
                i += rootChildCurrentChar.s.length - 1;
                // navigate into the child node
                root = rootChildCurrentChar;
            } else {
                return {};
            }
        }
        const output = {};
        // found the closest node we recursively search through children
        findAllWords(root, output, term, exact, tolerance);
        return output;
    }
}
function radix_contains(root, term) {
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        if (character in root.c) {
            const rootChildrenChar = root.c[character];
            const edgeLabel = rootChildrenChar.s;
            const termSubstring = term.substring(i);
            const commonPrefix = getCommonPrefix(edgeLabel, termSubstring);
            const commonPrefixLength = commonPrefix.length;
            if (commonPrefixLength !== edgeLabel.length && commonPrefixLength !== termSubstring.length) {
                return false;
            }
            i += rootChildrenChar.s.length - 1;
            root = rootChildrenChar;
        } else {
            return false;
        }
    }
    return true;
}
function removeWord(root, term) {
    if (!term) {
        return false;
    }
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        const parent = root;
        if (character in root.c) {
            i += root.c[character].s.length - 1;
            root = root.c[character];
            if (Object.keys(root.c).length === 0) {
                delete parent.c[root.k];
                return true;
            }
        } else {
            return false;
        }
    }
    return false;
}
function removeDocumentByWord(root, term, docID, exact = true) {
    if (!term) {
        return true;
    }
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        if (character in root.c) {
            const rootChildCurrentChar = root.c[character];
            i += rootChildCurrentChar.s.length - 1;
            root = rootChildCurrentChar;
            if (exact && root.w !== term) {
            // Do nothing if the exact condition is not met.
            } else {
                radix_removeDocument(root, docID);
            }
        } else {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=radix.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/trees/bkd.js
const K = 2 // 2D points
;
const EARTH_RADIUS = 6371e3 // Earth radius in meters
;
function bkd_create() {
    return {
        root: null
    };
}
function bkd_insert(tree, point, docIDs) {
    const newNode = {
        point,
        docIDs
    };
    if (tree.root == null) {
        tree.root = newNode;
        return;
    }
    let node = tree.root;
    let depth = 0;
    while(node !== null){
        // Check if the current node's point matches the new point
        if (node.point.lon === point.lon && node.point.lat === point.lat) {
            // Merge the new docIDs with the existing ones and remove duplicates
            const newDocIDs = node.docIDs ?? [];
            node.docIDs = Array.from(new Set([
                ...newDocIDs,
                ...docIDs || []
            ]));
            return;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                if (node.left == null) {
                    node.left = newNode;
                    return;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = newNode;
                    return;
                }
                node = node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                if (node.left == null) {
                    node.left = newNode;
                    return;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = newNode;
                    return;
                }
                node = node.right;
            }
        }
        depth++;
    }
}
function bkd_contains(tree, point) {
    let node = tree.root;
    let depth = 0;
    while(node != null){
        if ((node === null || node === void 0 ? void 0 : node.point.lon) === point.lon && node.point.lat === point.lat) {
            return true;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node === null || node === void 0 ? void 0 : node.left;
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node === null || node === void 0 ? void 0 : node.left;
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
            }
        }
        depth++;
    }
    return false;
}
// @todo: this is very inefficient. Fix this later.
function removeDocByID(tree, point, docID) {
    let node = tree.root;
    let depth = 0;
    let parentNode = null;
    let direction = null;
    while(node !== null){
        if ((node === null || node === void 0 ? void 0 : node.point.lon) === point.lon && node.point.lat === point.lat) {
            var _node_docIDs;
            const index = (_node_docIDs = node.docIDs) === null || _node_docIDs === void 0 ? void 0 : _node_docIDs.indexOf(docID);
            if (index !== undefined && index > -1) {
                var // Remove the docID from the array
                _node_docIDs1;
                (_node_docIDs1 = node.docIDs) === null || _node_docIDs1 === void 0 ? void 0 : _node_docIDs1.splice(index, 1);
                if (node.docIDs == null || node.docIDs.length === 0) {
                    // If the node doesn't have any more docIDs, remove the node
                    if (parentNode != null) {
                        if (direction === 'left') {
                            parentNode.left = node.left !== null ? node.left : node.right;
                        } else if (direction === 'right') {
                            parentNode.right = node.right !== null ? node.right : node.left;
                        }
                    } else {
                        // If the node to be removed is the root
                        tree.root = node.left !== null ? node.left : node.right;
                    }
                }
                return;
            }
        }
        const axis = depth % K;
        parentNode = node;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node === null || node === void 0 ? void 0 : node.left;
                direction = 'left';
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
                direction = 'right';
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node === null || node === void 0 ? void 0 : node.left;
                direction = 'left';
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
                direction = 'right';
            }
        }
        depth++;
    }
}
function getDocIDsByCoordinates(tree, point) {
    let node = tree.root;
    let depth = 0;
    while(node !== null){
        if (node.point.lon === point.lon && node.point.lat === point.lat) {
            // prettier-ignore
            return node.docIDs ?? null;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node.left;
            } else {
                node = node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        depth++;
    }
    return null;
}
function searchByRadius(node, center, radius, inclusive = true, sort = 'asc', highPrecision = false) {
    const distanceFn = highPrecision ? vincentyDistance : haversineDistance;
    const stack = [
        {
            node,
            depth: 0
        }
    ];
    const result = [];
    while(stack.length > 0){
        const { node , depth  } = stack.pop();
        if (node === null) continue;
        const dist = distanceFn(center, node.point);
        if (inclusive ? dist <= radius : dist > radius) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        }
        if (node.left != null) {
            stack.push({
                node: node.left,
                depth: depth + 1
            });
        }
        if (node.right != null) {
            stack.push({
                node: node.right,
                depth: depth + 1
            });
        }
    }
    if (sort) {
        result.sort((a, b)=>{
            const distA = distanceFn(center, a.point);
            const distB = distanceFn(center, b.point);
            return sort.toLowerCase() === 'asc' ? distA - distB : distB - distA;
        });
    }
    return result;
}
function searchByPolygon(root, polygon, inclusive = true, sort = null, highPrecision = false) {
    const stack = [
        {
            node: root,
            depth: 0
        }
    ];
    const result = [];
    while(stack.length > 0){
        const task = stack.pop();
        if (task == null || task.node == null) continue;
        const { node , depth  } = task;
        const nextDepth = depth + 1;
        if (node.left != null) {
            stack.push({
                node: node.left,
                depth: nextDepth
            });
        }
        if (node.right != null) {
            stack.push({
                node: node.right,
                depth: nextDepth
            });
        }
        const isInsidePolygon = isPointInPolygon(polygon, node.point);
        if (isInsidePolygon && inclusive) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        } else if (!isInsidePolygon && !inclusive) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        }
    }
    const centroid = calculatePolygonCentroid(polygon);
    if (sort) {
        const sortFn = highPrecision ? vincentyDistance : haversineDistance;
        result.sort((a, b)=>{
            const distA = sortFn(centroid, a.point);
            const distB = sortFn(centroid, b.point);
            return sort.toLowerCase() === 'asc' ? distA - distB : distB - distA;
        });
    }
    return result;
}
function calculatePolygonCentroid(polygon) {
    let totalArea = 0;
    let centroidX = 0;
    let centroidY = 0;
    const polygonLength = polygon.length;
    for(let i = 0, j = polygonLength - 1; i < polygonLength; j = i++){
        const xi = polygon[i].lon;
        const yi = polygon[i].lat;
        const xj = polygon[j].lon;
        const yj = polygon[j].lat;
        const areaSegment = xi * yj - xj * yi;
        totalArea += areaSegment;
        centroidX += (xi + xj) * areaSegment;
        centroidY += (yi + yj) * areaSegment;
    }
    totalArea /= 2;
    const centroidCoordinate = 6 * totalArea;
    centroidX /= centroidCoordinate;
    centroidY /= centroidCoordinate;
    return {
        lon: centroidX,
        lat: centroidY
    };
}
function isPointInPolygon(polygon, point) {
    let isInside = false;
    const x = point.lon;
    const y = point.lat;
    const polygonLength = polygon.length;
    for(let i = 0, j = polygonLength - 1; i < polygonLength; j = i++){
        const xi = polygon[i].lon;
        const yi = polygon[i].lat;
        const xj = polygon[j].lon;
        const yj = polygon[j].lat;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) isInside = !isInside;
    }
    return isInside;
}
function haversineDistance(coord1, coord2) {
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLat = (coord2.lat - coord1.lat) * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
}
function vincentyDistance(coord1, coord2) {
    // Constants for WGS 84 ellipsoidal Earth model (https://epsg.org/ellipsoid_7030/WGS-84.html)
    // Semi-major axis of the Earth in meters
    const a = 6378137;
    // Flattening of the ellipsoid
    const f = 1 / 298.257223563;
    // Semi-minor axis
    const b = (1 - f) * a;
    // Convert degrees to radians for calculations
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    // Reduced latitudes - account for flattening by transforming from geodetic to auxiliary latitude
    const U1 = Math.atan((1 - f) * Math.tan(lat1));
    const U2 = Math.atan((1 - f) * Math.tan(lat2));
    const sinU1 = Math.sin(U1);
    const cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2);
    const cosU2 = Math.cos(U2);
    // Initial approximation for the longitude difference between the two points
    let lambda = deltaLon;
    let prevLambda;
    // Limit the iterations to ensure we don't get stuck in an infinite loop
    let iterationLimit = 1000;
    let sinAlpha;
    let cos2Alpha;
    let sinSigma;
    let cosSigma;
    let sigma;
    // Refine the value of lambda (longitude difference)
    do {
        const sinLambda = Math.sin(lambda);
        const cosLambda = Math.cos(lambda);
        // Compute the trigonometric values required for Vincenty formulae
        sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = Math.atan2(sinSigma, cosSigma);
        // Angular separation between the two points and the equator
        sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
        cos2Alpha = 1 - sinAlpha * sinAlpha;
        const cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cos2Alpha;
        // Compensation factor for the Earth's shape
        const C = f / 16 * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
        // Store previous lambda to check for convergence
        prevLambda = lambda;
        // Refine the estimate of lambda using the Vincenty formula
        lambda = deltaLon + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }while (Math.abs(lambda - prevLambda) > 1e-12 && --iterationLimit > 0)
    // Compute factors that depend on the shape of the Earth and angular distances
    const u2 = cos2Alpha * (a * a - b * b) / (b * b);
    const A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
    const B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
    // Compute the correction factor for the ellipsoidal shape of the Earth
    const deltaSigma = B * sinSigma * (cosSigma - 2 * sinU1 * sinU2 / cos2Alpha + B / 4 * (cosSigma * (-1 + 2 * sinSigma * sinSigma) - B / 6 * sigma * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * sigma * sigma)));
    // Final calculation of distance using Vincenty formula
    const s = b * A * (sigma - deltaSigma);
    return s;
}

//# sourceMappingURL=bkd.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/algorithms.js
var algorithms = __webpack_require__(15192);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/cosine-similarity.js
var cosine_similarity = __webpack_require__(31641);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/index.js










async function insertDocumentScoreParameters(index, prop, id, tokens, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, id);
    index.avgFieldLength[prop] = ((index.avgFieldLength[prop] ?? 0) * (docsCount - 1) + tokens.length) / docsCount;
    index.fieldLengths[prop][internalId] = tokens.length;
    index.frequencies[prop][internalId] = {};
}
async function insertTokenScoreParameters(index, prop, id, tokens, token) {
    let tokenFrequency = 0;
    for (const t of tokens){
        if (t === token) {
            tokenFrequency++;
        }
    }
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, id);
    const tf = tokenFrequency / tokens.length;
    index.frequencies[prop][internalId][token] = tf;
    if (!(token in index.tokenOccurrences[prop])) {
        index.tokenOccurrences[prop][token] = 0;
    }
    // increase a token counter that may not yet exist
    index.tokenOccurrences[prop][token] = (index.tokenOccurrences[prop][token] ?? 0) + 1;
}
async function removeDocumentScoreParameters(index, prop, id, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, id);
    index.avgFieldLength[prop] = (index.avgFieldLength[prop] * docsCount - index.fieldLengths[prop][internalId]) / (docsCount - 1);
    index.fieldLengths[prop][internalId] = undefined;
    index.frequencies[prop][internalId] = undefined;
}
async function removeTokenScoreParameters(index, prop, token) {
    index.tokenOccurrences[prop][token]--;
}
async function calculateResultScores(context, index, prop, term, ids) {
    const documentIDs = Array.from(ids);
    // Exact fields for TF-IDF
    const avgFieldLength = index.avgFieldLength[prop];
    const fieldLengths = index.fieldLengths[prop];
    const oramaOccurrences = index.tokenOccurrences[prop];
    const oramaFrequencies = index.frequencies[prop];
    // oramaOccurrences[term] can be undefined, 0, string, or { [k: string]: number }
    const termOccurrences = typeof oramaOccurrences[term] === 'number' ? oramaOccurrences[term] ?? 0 : 0;
    const scoreList = [];
    // Calculate TF-IDF value for each term, in each document, for each index.
    const documentIDsLength = documentIDs.length;
    for(let k = 0; k < documentIDsLength; k++){
        var _oramaFrequencies_internalId;
        const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, documentIDs[k]);
        const tf = (oramaFrequencies === null || oramaFrequencies === void 0 ? void 0 : (_oramaFrequencies_internalId = oramaFrequencies[internalId]) === null || _oramaFrequencies_internalId === void 0 ? void 0 : _oramaFrequencies_internalId[term]) ?? 0;
        const bm25 = (0,algorithms/* BM25 */.B)(tf, termOccurrences, context.docsCount, fieldLengths[internalId], avgFieldLength, context.params.relevance);
        scoreList.push([
            internalId,
            bm25
        ]);
    }
    return scoreList;
}
async function components_create(orama, sharedInternalDocumentStore, schema, index, prefix = '') {
    if (!index) {
        index = {
            sharedInternalDocumentStore,
            indexes: {},
            vectorIndexes: {},
            searchableProperties: [],
            searchablePropertiesWithTypes: {},
            frequencies: {},
            tokenOccurrences: {},
            avgFieldLength: {},
            fieldLengths: {}
        };
    }
    for (const [prop, type] of Object.entries(schema)){
        const path = `${prefix}${prefix ? '.' : ''}${prop}`;
        if (typeof type === 'object' && !Array.isArray(type)) {
            // Nested
            components_create(orama, sharedInternalDocumentStore, type, index, path);
            continue;
        }
        if ((0,defaults.isVectorType)(type)) {
            index.searchableProperties.push(path);
            index.searchablePropertiesWithTypes[path] = type;
            index.vectorIndexes[path] = {
                size: (0,defaults.getVectorSize)(type),
                vectors: {}
            };
        } else {
            const isArray = /\[/.test(type);
            switch(type){
                case 'boolean':
                case 'boolean[]':
                    index.indexes[path] = {
                        type: 'Bool',
                        node: {
                            true: [],
                            false: []
                        },
                        isArray
                    };
                    break;
                case 'number':
                case 'number[]':
                    index.indexes[path] = {
                        type: 'AVL',
                        node: avl_create(0, []),
                        isArray
                    };
                    break;
                case 'string':
                case 'string[]':
                    index.indexes[path] = {
                        type: 'Radix',
                        node: radix_create(),
                        isArray
                    };
                    index.avgFieldLength[path] = 0;
                    index.frequencies[path] = {};
                    index.tokenOccurrences[path] = {};
                    index.fieldLengths[path] = {};
                    break;
                case 'enum':
                case 'enum[]':
                    index.indexes[path] = {
                        type: 'Flat',
                        node: flat_create(),
                        isArray
                    };
                    break;
                case 'geopoint':
                    index.indexes[path] = {
                        type: 'BKD',
                        node: bkd_create(),
                        isArray
                    };
                    break;
                default:
                    throw (0,errors/* createError */.$)('INVALID_SCHEMA_TYPE', Array.isArray(type) ? 'array' : type, path);
            }
            index.searchableProperties.push(path);
            index.searchablePropertiesWithTypes[path] = type;
        }
    }
    return index;
}
function insertScalarBuilder(implementation, index, prop, id, language, tokenizer, docsCount) {
    return async (value)=>{
        const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, id);
        const { type , node  } = index.indexes[prop];
        switch(type){
            case 'Bool':
                {
                    node[value ? 'true' : 'false'].push(internalId);
                    break;
                }
            case 'AVL':
                {
                    insert(node, value, [
                        internalId
                    ]);
                    break;
                }
            case 'Radix':
                {
                    const tokens = await tokenizer.tokenize(value, language, prop);
                    await implementation.insertDocumentScoreParameters(index, prop, internalId, tokens, docsCount);
                    for (const token of tokens){
                        await implementation.insertTokenScoreParameters(index, prop, internalId, tokens, token);
                        radix_insert(node, token, internalId);
                    }
                    break;
                }
            case 'Flat':
                {
                    flat_insert(node, value, internalId);
                    break;
                }
            case 'BKD':
                {
                    bkd_insert(node, value, [
                        internalId
                    ]);
                    break;
                }
        }
    };
}
async function components_insert(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    if ((0,defaults.isVectorType)(schemaType)) {
        return insertVector(index, prop, value, id);
    }
    const insertScalar = insertScalarBuilder(implementation, index, prop, id, language, tokenizer, docsCount);
    if (!(0,defaults.isArrayType)(schemaType)) {
        return insertScalar(value);
    }
    const elements = value;
    const elementsLength = elements.length;
    for(let i = 0; i < elementsLength; i++){
        await insertScalar(elements[i]);
    }
}
function insertVector(index, prop, value, id) {
    if (!(value instanceof Float32Array)) {
        value = new Float32Array(value);
    }
    const size = index.vectorIndexes[prop].size;
    const magnitude = (0,cosine_similarity/* getMagnitude */.V)(value, size);
    index.vectorIndexes[prop].vectors[id] = [
        magnitude,
        value
    ];
}
async function removeScalar(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(index.sharedInternalDocumentStore, id);
    if ((0,defaults.isVectorType)(schemaType)) {
        delete index.vectorIndexes[prop].vectors[id];
        return true;
    }
    const { type , node  } = index.indexes[prop];
    switch(type){
        case 'AVL':
            {
                removeDocument(node, internalId, value);
                return true;
            }
        case 'Bool':
            {
                const booleanKey = value ? 'true' : 'false';
                const position = node[booleanKey].indexOf(internalId);
                node[value ? 'true' : 'false'].splice(position, 1);
                return true;
            }
        case 'Radix':
            {
                const tokens = await tokenizer.tokenize(value, language, prop);
                await implementation.removeDocumentScoreParameters(index, prop, id, docsCount);
                for (const token of tokens){
                    await implementation.removeTokenScoreParameters(index, prop, token);
                    removeDocumentByWord(node, token, internalId);
                }
                return true;
            }
        case 'Flat':
            {
                flat_removeDocument(node, internalId, value);
                return true;
            }
        case 'BKD':
            {
                removeDocByID(node, value, internalId);
                return false;
            }
    }
}
async function components_remove(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    if (!(0,defaults.isArrayType)(schemaType)) {
        return removeScalar(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount);
    }
    const innerSchemaType = (0,defaults.getInnerType)(schemaType);
    const elements = value;
    const elementsLength = elements.length;
    for(let i = 0; i < elementsLength; i++){
        await removeScalar(implementation, index, prop, id, elements[i], innerSchemaType, language, tokenizer, docsCount);
    }
    return true;
}
async function search(context, index, prop, term) {
    if (!(prop in index.tokenOccurrences)) {
        return [];
    }
    const { node , type  } = index.indexes[prop];
    if (type !== 'Radix') {
        throw (0,errors/* createError */.$)('WRONG_SEARCH_PROPERTY_TYPE', prop);
    }
    const { exact , tolerance  } = context.params;
    const searchResult = radix_find(node, {
        term,
        exact,
        tolerance
    });
    const ids = new Set();
    for(const key in searchResult){
        //skip keys inherited from prototype
        const ownProperty = (0,utils/* getOwnProperty */.g5)(searchResult, key);
        if (!ownProperty) continue;
        for (const id of searchResult[key]){
            ids.add(id);
        }
    }
    return context.index.calculateResultScores(context, index, prop, term, Array.from(ids));
}
async function searchByWhereClause(context, index, filters) {
    const filterKeys = Object.keys(filters);
    const filtersMap = filterKeys.reduce((acc, key)=>({
            [key]: [],
            ...acc
        }), {});
    for (const param of filterKeys){
        const operation = filters[param];
        if (typeof index.indexes[param] === 'undefined') {
            throw (0,errors/* createError */.$)('UNKNOWN_FILTER_PROPERTY', param);
        }
        const { node , type , isArray  } = index.indexes[param];
        if (type === 'Bool') {
            const idx = node;
            const filteredIDs = idx[operation.toString()];
            (0,utils/* safeArrayPush */.h)(filtersMap[param], filteredIDs);
            continue;
        }
        if (type === 'BKD') {
            let reqOperation;
            if ('radius' in operation) {
                reqOperation = 'radius';
            } else if ('polygon' in operation) {
                reqOperation = 'polygon';
            } else {
                throw new Error(`Invalid operation ${operation}`);
            }
            if (reqOperation === 'radius') {
                const { value , coordinates , unit ='m' , inside =true , highPrecision =false  } = operation[reqOperation];
                const distanceInMeters = (0,utils/* convertDistanceToMeters */.O6)(value, unit);
                const ids = searchByRadius(node.root, coordinates, distanceInMeters, inside, undefined, highPrecision);
                // @todo: convert this into a for loop
                (0,utils/* safeArrayPush */.h)(filtersMap[param], ids.flatMap(({ docIDs  })=>docIDs));
            } else {
                const { coordinates , inside =true , highPrecision =false  } = operation[reqOperation];
                const ids = searchByPolygon(node.root, coordinates, inside, undefined, highPrecision);
                // @todo: convert this into a for loop
                (0,utils/* safeArrayPush */.h)(filtersMap[param], ids.flatMap(({ docIDs  })=>docIDs));
            }
            continue;
        }
        if (type === 'Radix' && (typeof operation === 'string' || Array.isArray(operation))) {
            for (const raw of [
                operation
            ].flat()){
                const term = await context.tokenizer.tokenize(raw, context.language, param);
                for (const t of term){
                    const filteredIDsResults = radix_find(node, {
                        term: t,
                        exact: true
                    });
                    (0,utils/* safeArrayPush */.h)(filtersMap[param], Object.values(filteredIDsResults).flat());
                }
            }
            continue;
        }
        const operationKeys = Object.keys(operation);
        if (operationKeys.length > 1) {
            throw (0,errors/* createError */.$)('INVALID_FILTER_OPERATION', operationKeys.length);
        }
        if (type === 'Flat') {
            const flatOperation = isArray ? filterArr : filter;
            (0,utils/* safeArrayPush */.h)(filtersMap[param], flatOperation(node, operation));
            continue;
        }
        if (type === 'AVL') {
            const operationOpt = operationKeys[0];
            const operationValue = operation[operationOpt];
            let filteredIDs = [];
            switch(operationOpt){
                case 'gt':
                    {
                        filteredIDs = greaterThan(node, operationValue, false);
                        break;
                    }
                case 'gte':
                    {
                        filteredIDs = greaterThan(node, operationValue, true);
                        break;
                    }
                case 'lt':
                    {
                        filteredIDs = lessThan(node, operationValue, false);
                        break;
                    }
                case 'lte':
                    {
                        filteredIDs = lessThan(node, operationValue, true);
                        break;
                    }
                case 'eq':
                    {
                        filteredIDs = find(node, operationValue) ?? [];
                        break;
                    }
                case 'between':
                    {
                        const [min, max] = operationValue;
                        filteredIDs = rangeSearch(node, min, max);
                        break;
                    }
            }
            (0,utils/* safeArrayPush */.h)(filtersMap[param], filteredIDs);
        }
    }
    // AND operation: calculate the intersection between all the IDs in filterMap
    return (0,utils/* intersect */.y$)(Object.values(filtersMap));
}
async function getSearchableProperties(index) {
    return index.searchableProperties;
}
async function getSearchablePropertiesWithTypes(index) {
    return index.searchablePropertiesWithTypes;
}
function loadRadixNode(node) {
    const convertedNode = radix_create(node.e, node.s, node.k);
    convertedNode.d = node.d;
    convertedNode.w = node.w;
    for (const childrenKey of Object.keys(node.c)){
        convertedNode.c[childrenKey] = loadRadixNode(node.c[childrenKey]);
    }
    return convertedNode;
}
function loadFlatNode(node) {
    return {
        numberToDocumentId: new Map(node)
    };
}
function saveFlatNode(node) {
    return Array.from(node.numberToDocumentId.entries());
}
async function components_load(sharedInternalDocumentStore, raw) {
    const { indexes: rawIndexes , vectorIndexes: rawVectorIndexes , searchableProperties , searchablePropertiesWithTypes , frequencies , tokenOccurrences , avgFieldLength , fieldLengths  } = raw;
    const indexes = {};
    const vectorIndexes = {};
    for (const prop of Object.keys(rawIndexes)){
        const { node , type , isArray  } = rawIndexes[prop];
        switch(type){
            case 'Radix':
                indexes[prop] = {
                    type: 'Radix',
                    node: loadRadixNode(node),
                    isArray
                };
                break;
            case 'Flat':
                indexes[prop] = {
                    type: 'Flat',
                    node: loadFlatNode(node),
                    isArray
                };
                break;
            default:
                indexes[prop] = rawIndexes[prop];
        }
    }
    for (const idx of Object.keys(rawVectorIndexes)){
        const vectors = rawVectorIndexes[idx].vectors;
        for(const vec in vectors){
            vectors[vec] = [
                vectors[vec][0],
                new Float32Array(vectors[vec][1])
            ];
        }
        vectorIndexes[idx] = {
            size: rawVectorIndexes[idx].size,
            vectors
        };
    }
    return {
        sharedInternalDocumentStore,
        indexes,
        vectorIndexes,
        searchableProperties,
        searchablePropertiesWithTypes,
        frequencies,
        tokenOccurrences,
        avgFieldLength,
        fieldLengths
    };
}
async function components_save(index) {
    const { indexes , vectorIndexes , searchableProperties , searchablePropertiesWithTypes , frequencies , tokenOccurrences , avgFieldLength , fieldLengths  } = index;
    const vectorIndexesAsArrays = {};
    for (const idx of Object.keys(vectorIndexes)){
        const vectors = vectorIndexes[idx].vectors;
        for(const vec in vectors){
            vectors[vec] = [
                vectors[vec][0],
                Array.from(vectors[vec][1])
            ];
        }
        vectorIndexesAsArrays[idx] = {
            size: vectorIndexes[idx].size,
            vectors
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const savedIndexes = {};
    for (const name of Object.keys(indexes)){
        const { type , node , isArray  } = indexes[name];
        if (type !== 'Flat') {
            savedIndexes[name] = indexes[name];
            continue;
        }
        savedIndexes[name] = {
            type: 'Flat',
            node: saveFlatNode(node),
            isArray
        };
    }
    return {
        indexes: savedIndexes,
        vectorIndexes: vectorIndexesAsArrays,
        searchableProperties,
        searchablePropertiesWithTypes,
        frequencies,
        tokenOccurrences,
        avgFieldLength,
        fieldLengths
    };
}
async function createIndex() {
    return {
        create: components_create,
        insert: components_insert,
        remove: components_remove,
        insertDocumentScoreParameters,
        insertTokenScoreParameters,
        removeDocumentScoreParameters,
        removeTokenScoreParameters,
        calculateResultScores,
        search,
        searchByWhereClause,
        getSearchableProperties,
        getSearchablePropertiesWithTypes,
        load: components_load,
        save: components_save
    };
}

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/languages.js
var languages = __webpack_require__(32601);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/sorter.js





function innerCreate(orama, sharedInternalDocumentStore, schema, sortableDeniedProperties, prefix) {
    const sorter = {
        language: orama.tokenizer.language,
        sharedInternalDocumentStore,
        enabled: true,
        isSorted: true,
        sortableProperties: [],
        sortablePropertiesWithTypes: {},
        sorts: {}
    };
    for (const [prop, type] of Object.entries(schema)){
        const path = `${prefix}${prefix ? '.' : ''}${prop}`;
        if (sortableDeniedProperties.includes(path)) {
            continue;
        }
        if (typeof type === 'object' && !Array.isArray(type)) {
            // Nested
            const ret = innerCreate(orama, sharedInternalDocumentStore, type, sortableDeniedProperties, path);
            (0,utils/* safeArrayPush */.h)(sorter.sortableProperties, ret.sortableProperties);
            sorter.sorts = {
                ...sorter.sorts,
                ...ret.sorts
            };
            sorter.sortablePropertiesWithTypes = {
                ...sorter.sortablePropertiesWithTypes,
                ...ret.sortablePropertiesWithTypes
            };
            continue;
        }
        if (!(0,defaults.isVectorType)(type)) {
            switch(type){
                case 'boolean':
                case 'number':
                case 'string':
                    sorter.sortableProperties.push(path);
                    sorter.sortablePropertiesWithTypes[path] = type;
                    sorter.sorts[path] = {
                        docs: new Map(),
                        orderedDocsToRemove: new Map(),
                        orderedDocs: [],
                        type: type
                    };
                    break;
                case 'geopoint':
                case 'enum':
                    continue;
                case 'enum[]':
                case 'boolean[]':
                case 'number[]':
                case 'string[]':
                    continue;
                default:
                    throw (0,errors/* createError */.$)('INVALID_SORT_SCHEMA_TYPE', Array.isArray(type) ? 'array' : type, path);
            }
        }
    }
    return sorter;
}
async function sorter_create(orama, sharedInternalDocumentStore, schema, config) {
    const isSortEnabled = (config === null || config === void 0 ? void 0 : config.enabled) !== false;
    if (!isSortEnabled) {
        return {
            disabled: true
        };
    }
    return innerCreate(orama, sharedInternalDocumentStore, schema, (config || {}).unsortableProperties || [], '');
}
async function sorter_insert(sorter, prop, id, value) {
    if (!sorter.enabled) {
        return;
    }
    sorter.isSorted = false;
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(sorter.sharedInternalDocumentStore, id);
    const s = sorter.sorts[prop];
    // This happen during a document updating
    // Because we re-use the same internalId
    // We need to clean-up the data structure before re-inserting
    // to avoid duplicates in the orderedDocs array
    // See: https://github.com/askorama/orama/issues/629
    if (s.orderedDocsToRemove.has(internalId)) {
        ensureOrderedDocsAreDeletedByProperty(sorter, prop);
    }
    s.docs.set(internalId, s.orderedDocs.length);
    s.orderedDocs.push([
        internalId,
        value
    ]);
}
function ensureIsSorted(sorter) {
    if (sorter.isSorted || !sorter.enabled) {
        return;
    }
    const properties = Object.keys(sorter.sorts);
    for (const prop of properties){
        ensurePropertyIsSorted(sorter, prop);
    }
    sorter.isSorted = true;
}
function stringSort(language, value, d) {
    return value[1].localeCompare(d[1], (0,languages/* getLocale */.JK)(language));
}
function numberSort(value, d) {
    return value[1] - d[1];
}
function booleanSort(value, d) {
    return d[1] ? -1 : 1;
}
function ensurePropertyIsSorted(sorter, prop) {
    const s = sorter.sorts[prop];
    let predicate;
    switch(s.type){
        case 'string':
            predicate = stringSort.bind(null, sorter.language);
            break;
        case 'number':
            predicate = numberSort.bind(null);
            break;
        case 'boolean':
            predicate = booleanSort.bind(null);
            break;
    }
    s.orderedDocs.sort(predicate);
    // Increment position for the greather documents
    const orderedDocsLength = s.orderedDocs.length;
    for(let i = 0; i < orderedDocsLength; i++){
        const docId = s.orderedDocs[i][0];
        s.docs.set(docId, i);
    }
}
function ensureOrderedDocsAreDeleted(sorter) {
    const properties = Object.keys(sorter.sorts);
    for (const prop of properties){
        ensureOrderedDocsAreDeletedByProperty(sorter, prop);
    }
}
function ensureOrderedDocsAreDeletedByProperty(sorter, prop) {
    const s = sorter.sorts[prop];
    if (!s.orderedDocsToRemove.size) return;
    s.orderedDocs = s.orderedDocs.filter((doc)=>!s.orderedDocsToRemove.has(doc[0]));
    s.orderedDocsToRemove.clear();
}
async function sorter_remove(sorter, prop, id) {
    if (!sorter.enabled) {
        return;
    }
    const s = sorter.sorts[prop];
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.Kj)(sorter.sharedInternalDocumentStore, id);
    const index = s.docs.get(internalId);
    if (!index) return;
    s.docs.delete(internalId);
    s.orderedDocsToRemove.set(internalId, true);
}
async function sortBy(sorter, docIds, by) {
    if (!sorter.enabled) {
        throw (0,errors/* createError */.$)('SORT_DISABLED');
    }
    const property = by.property;
    const isDesc = by.order === 'DESC';
    const s = sorter.sorts[property];
    if (!s) {
        throw (0,errors/* createError */.$)('UNABLE_TO_SORT_ON_UNKNOWN_FIELD', property, sorter.sortableProperties.join(', '));
    }
    ensureOrderedDocsAreDeletedByProperty(sorter, property);
    ensureIsSorted(sorter);
    docIds.sort((a, b)=>{
        // This sort algorithm works leveraging on
        // that s.docs is a map of docId -> position
        // If a document is not indexed, it will be not present in the map
        const indexOfA = s.docs.get((0,internal_document_id_store/* getInternalDocumentId */.Kj)(sorter.sharedInternalDocumentStore, a[0]));
        const indexOfB = s.docs.get((0,internal_document_id_store/* getInternalDocumentId */.Kj)(sorter.sharedInternalDocumentStore, b[0]));
        const isAIndexed = typeof indexOfA !== 'undefined';
        const isBIndexed = typeof indexOfB !== 'undefined';
        if (!isAIndexed && !isBIndexed) {
            return 0;
        }
        // unindexed documents are always at the end
        if (!isAIndexed) {
            return 1;
        }
        if (!isBIndexed) {
            return -1;
        }
        return isDesc ? indexOfB - indexOfA : indexOfA - indexOfB;
    });
    return docIds;
}
async function getSortableProperties(sorter) {
    if (!sorter.enabled) {
        return [];
    }
    return sorter.sortableProperties;
}
async function getSortablePropertiesWithTypes(sorter) {
    if (!sorter.enabled) {
        return {};
    }
    return sorter.sortablePropertiesWithTypes;
}
async function sorter_load(sharedInternalDocumentStore, raw) {
    const rawDocument = raw;
    if (!rawDocument.enabled) {
        return {
            enabled: false
        };
    }
    const sorts = Object.keys(rawDocument.sorts).reduce((acc, prop)=>{
        const { docs , orderedDocs , type  } = rawDocument.sorts[prop];
        acc[prop] = {
            docs: new Map(Object.entries(docs).map(([k, v])=>[
                    +k,
                    v
                ])),
            orderedDocsToRemove: new Map(),
            orderedDocs,
            type
        };
        return acc;
    }, {});
    return {
        sharedInternalDocumentStore,
        language: rawDocument.language,
        sortableProperties: rawDocument.sortableProperties,
        sortablePropertiesWithTypes: rawDocument.sortablePropertiesWithTypes,
        sorts,
        enabled: true,
        isSorted: rawDocument.isSorted
    };
}
async function sorter_save(sorter) {
    if (!sorter.enabled) {
        return {
            enabled: false
        };
    }
    ensureOrderedDocsAreDeleted(sorter);
    ensureIsSorted(sorter);
    const sorts = Object.keys(sorter.sorts).reduce((acc, prop)=>{
        const { docs , orderedDocs , type  } = sorter.sorts[prop];
        acc[prop] = {
            docs: Object.fromEntries(docs.entries()),
            orderedDocs,
            type
        };
        return acc;
    }, {});
    return {
        language: sorter.language,
        sortableProperties: sorter.sortableProperties,
        sortablePropertiesWithTypes: sorter.sortablePropertiesWithTypes,
        sorts,
        enabled: sorter.enabled,
        isSorted: sorter.isSorted
    };
}
async function createSorter() {
    return {
        create: sorter_create,
        insert: sorter_insert,
        remove: sorter_remove,
        save: sorter_save,
        load: sorter_load,
        sortBy,
        getSortableProperties,
        getSortablePropertiesWithTypes
    };
}

//# sourceMappingURL=sorter.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/tokenizer/index.js + 2 modules
var components_tokenizer = __webpack_require__(89473);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/methods/create.js










function validateComponents(components) {
    const defaultComponents = {
        formatElapsedTime: defaults.formatElapsedTime,
        getDocumentIndexId: defaults.getDocumentIndexId,
        getDocumentProperties: utils/* getDocumentProperties */.JN,
        validateSchema: defaults.validateSchema
    };
    for (const rawKey of hooks/* FUNCTION_COMPONENTS */.mj){
        const key = rawKey;
        if (components[key]) {
            if (typeof components[key] !== 'function') {
                throw (0,errors/* createError */.$)('COMPONENT_MUST_BE_FUNCTION', key);
            }
        } else {
            // @ts-expect-error TSC is unable to resolve this
            components[key] = defaultComponents[key];
        }
    }
    for (const rawKey of Object.keys(components)){
        if (!hooks/* OBJECT_COMPONENTS */.To.includes(rawKey) && !hooks/* FUNCTION_COMPONENTS */.mj.includes(rawKey)) {
            throw (0,errors/* createError */.$)('UNSUPPORTED_COMPONENT', rawKey);
        }
    }
}
async function create_create({ schema , sort , language , components , id , plugins  }) {
    if (!components) {
        components = {};
    }
    if (!id) {
        id = await (0,utils/* uniqueId */.NF)();
    }
    let tokenizer = components.tokenizer;
    let index = components.index;
    let documentsStore = components.documentsStore;
    let sorter = components.sorter;
    if (!tokenizer) {
        // Use the default tokenizer
        tokenizer = await (0,components_tokenizer/* createTokenizer */.e)({
            language: language ?? 'english'
        });
    } else if (!tokenizer.tokenize) {
        // If there is no tokenizer function, we assume this is a TokenizerConfig
        tokenizer = await (0,components_tokenizer/* createTokenizer */.e)(tokenizer);
    } else {
        const customTokenizer = tokenizer;
        tokenizer = customTokenizer;
    }
    if (components.tokenizer && language) {
        // Accept language only if a tokenizer is not provided
        throw (0,errors/* createError */.$)('NO_LANGUAGE_WITH_CUSTOM_TOKENIZER');
    }
    const internalDocumentStore = (0,internal_document_id_store/* createInternalDocumentIDStore */.JA)();
    index ||= await createIndex();
    sorter ||= await createSorter();
    documentsStore ||= await createDocumentsStore();
    // Validate all other components
    validateComponents(components);
    // Assign only recognized components and hooks
    const { getDocumentProperties , getDocumentIndexId , validateSchema , formatElapsedTime  } = components;
    const orama = {
        data: {},
        caches: {},
        schema,
        tokenizer,
        index,
        sorter,
        documentsStore,
        internalDocumentIDStore: internalDocumentStore,
        getDocumentProperties,
        getDocumentIndexId,
        validateSchema,
        beforeInsert: [],
        afterInsert: [],
        beforeRemove: [],
        afterRemove: [],
        beforeUpdate: [],
        afterUpdate: [],
        beforeSearch: [],
        afterSearch: [],
        beforeInsertMultiple: [],
        afterInsertMultiple: [],
        beforeRemoveMultiple: [],
        afterRemoveMultiple: [],
        afterUpdateMultiple: [],
        beforeUpdateMultiple: [],
        afterCreate: [],
        formatElapsedTime,
        id,
        plugins,
        version: getVersion()
    };
    orama.data = {
        index: await orama.index.create(orama, internalDocumentStore, schema),
        docs: await orama.documentsStore.create(orama, internalDocumentStore),
        sorting: await orama.sorter.create(orama, internalDocumentStore, schema, sort)
    };
    for (const hook of AVAILABLE_PLUGIN_HOOKS){
        orama[hook] = (orama[hook] ?? []).concat(await getAllPluginsByHook(orama, hook));
    }
    const afterCreate = orama['afterCreate'];
    if (afterCreate) {
        await (0,hooks/* runAfterCreate */.WQ)(afterCreate, orama);
    }
    return orama;
}
function getVersion() {
    return '2.0.22';
}

//# sourceMappingURL=create.js.map

/***/ })

};
;