export default class StorageHandler {
    constructor() {

    }

    static #localStorageAvailable = false;

    static #checkStorageAvailability(value) { // detect local storage feature (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage)
        let storage;
        try {
            storage = window[value];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    static #verifyLocalStorageFunctionality() {
        localStorage.test = "If you're seeing this, local storage is working!";
        console.debug(localStorage.test);
        localStorage.removeItem("test");
        console.debug("test JSON removed");
    }

    static #initilize() {
        if (StorageHandler.#checkStorageAvailability("localStorage")) {
            console.info("✅ Local storage is available and functional.");
            StorageHandler.#verifyLocalStorageFunctionality();
            StorageHandler.#localStorageAvailable = true;
        } else {
            console.warn("⚠️ Local storage is not functional. This could be due to browser settings, storage limits being exceeded, or other restrictions.");
        }
    }

    static {
        StorageHandler.#initilize();
    }

    static get localStorageAvailable() {
        return StorageHandler.#localStorageAvailable;
    }

    updateTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}