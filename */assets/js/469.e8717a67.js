"use strict";
exports.id = 469;
exports.ids = [469];
exports.modules = {

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

/***/ 51469:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BM25: () => (/* reexport safe */ _components_algorithms_js__WEBPACK_IMPORTED_MODULE_2__.B),
/* harmony export */   boundedLevenshtein: () => (/* reexport safe */ _components_levenshtein_js__WEBPACK_IMPORTED_MODULE_0__.X1),
/* harmony export */   convertDistanceToMeters: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.O6),
/* harmony export */   formatBytes: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.z3),
/* harmony export */   formatNanoseconds: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.j7),
/* harmony export */   getNanosecondsTime: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.He),
/* harmony export */   normalizeToken: () => (/* reexport safe */ _components_tokenizer_index_js__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   safeArrayPush: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   uniqueId: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.NF)
/* harmony export */ });
/* harmony import */ var _components_levenshtein_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49579);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var _components_algorithms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15192);
/* harmony import */ var _components_tokenizer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89473);





//# sourceMappingURL=internals.js.map

/***/ })

};
;