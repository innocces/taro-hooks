"use strict";
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 85158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ trackInsertion),
  e: () => (/* binding */ trackRemoval)
});

;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/types.js

const kInsertions = Symbol('orama.insertions');
const kRemovals = Symbol('orama.removals');

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.22/node_modules/@orama/orama/dist/components/sync-blocking-checker.js
var _globalThis_process;

// Web platforms don't have process. React-Native doesn't have process.emitWarning.
const warn = ((_globalThis_process = globalThis.process) === null || _globalThis_process === void 0 ? void 0 : _globalThis_process.emitWarning) ?? function emitWarning(message, options) {
    console.warn(`[WARNING] [${options.code}] ${message}`);
};
function trackInsertion(orama) {
    if (typeof orama[kInsertions] !== 'number') {
        queueMicrotask(()=>{
            orama[kInsertions] = undefined;
        });
        orama[kInsertions] = 0;
    }
    if (orama[kInsertions] > 1000) {
        warn("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.", {
            code: 'ORAMA0001'
        });
        orama[kInsertions] = -1;
    } else if (orama[kInsertions] >= 0) {
        orama[kInsertions]++;
    }
}
function trackRemoval(orama) {
    if (typeof orama[kRemovals] !== 'number') {
        queueMicrotask(()=>{
            orama[kRemovals] = undefined;
        });
        orama[kRemovals] = 0;
    }
    if (orama[kRemovals] > 1000) {
        warn("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.", {
            code: 'ORAMA0002'
        });
        orama[kRemovals] = -1;
    } else if (orama[kRemovals] >= 0) {
        orama[kRemovals]++;
    }
}

//# sourceMappingURL=sync-blocking-checker.js.map

/***/ }),

/***/ 66640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeMultiple: () => (/* binding */ removeMultiple)
/* harmony export */ });
/* harmony import */ var _components_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73000);
/* harmony import */ var _components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51375);
/* harmony import */ var _components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85158);



async function remove(orama, id, language, skipHooks) {
    let result = true;
    const { index , docs  } = orama.data;
    const doc = await orama.documentsStore.get(docs, id);
    if (!doc) {
        return false;
    }
    const docId = (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocumentIdFromInternalId */ .f8)(orama.internalDocumentIDStore, (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .Kj)(orama.internalDocumentIDStore, id));
    const docsCount = await orama.documentsStore.count(docs);
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .VK)(orama.beforeRemove, orama, docId);
    }
    const indexableProperties = await orama.index.getSearchableProperties(index);
    const indexablePropertiesWithTypes = await orama.index.getSearchablePropertiesWithTypes(index);
    const values = await orama.getDocumentProperties(doc, indexableProperties);
    for (const prop of indexableProperties){
        var _orama_index, _orama_index_beforeRemove, _orama_index1, _orama_index_afterRemove;
        const value = values[prop];
        // The document doesn't contain the key
        if (typeof value === 'undefined') {
            continue;
        }
        const schemaType = indexablePropertiesWithTypes[prop];
        await ((_orama_index_beforeRemove = (_orama_index = orama.index).beforeRemove) === null || _orama_index_beforeRemove === void 0 ? void 0 : _orama_index_beforeRemove.call(_orama_index, orama.data.index, prop, docId, value, schemaType, language, orama.tokenizer, docsCount));
        if (!await orama.index.remove(orama.index, orama.data.index, prop, id, value, schemaType, language, orama.tokenizer, docsCount)) {
            result = false;
        }
        await ((_orama_index_afterRemove = (_orama_index1 = orama.index).afterRemove) === null || _orama_index_afterRemove === void 0 ? void 0 : _orama_index_afterRemove.call(_orama_index1, orama.data.index, prop, docId, value, schemaType, language, orama.tokenizer, docsCount));
    }
    const sortableProperties = await orama.sorter.getSortableProperties(orama.data.sorting);
    const sortableValues = await orama.getDocumentProperties(doc, sortableProperties);
    for (const prop of sortableProperties){
        // The document doesn't contain the key
        if (typeof sortableValues[prop] === 'undefined') {
            continue;
        }
        await orama.sorter.remove(orama.data.sorting, prop, id);
    }
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .VK)(orama.afterRemove, orama, docId);
    }
    await orama.documentsStore.remove(orama.data.docs, id);
    (0,_components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_2__/* .trackRemoval */ .e)(orama);
    return result;
}
async function removeMultiple(orama, ids, batchSize, language, skipHooks) {
    let result = 0;
    if (!batchSize) {
        batchSize = 1000;
    }
    const docIdsForHooks = skipHooks ? [] : ids.map((id)=>(0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocumentIdFromInternalId */ .f8)(orama.internalDocumentIDStore, (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .Kj)(orama.internalDocumentIDStore, id)));
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .F_)(orama.beforeRemoveMultiple, orama, docIdsForHooks);
    }
    await new Promise((resolve, reject)=>{
        let i = 0;
        async function _insertMultiple() {
            const batch = ids.slice(i * batchSize, ++i * batchSize);
            if (!batch.length) {
                return resolve();
            }
            for (const doc of batch){
                try {
                    if (await remove(orama, doc, language, skipHooks)) {
                        result++;
                    }
                } catch (err) {
                    reject(err);
                }
            }
            setTimeout(_insertMultiple, 0);
        }
        setTimeout(_insertMultiple, 0);
    });
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .F_)(orama.afterRemoveMultiple, orama, docIdsForHooks);
    }
    return result;
}

//# sourceMappingURL=remove.js.map

/***/ })

};
;