
// function storageAvailable(type) {
//     let storage;
//     try {
//         storage = window[type];
//         const x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch (e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

// if (storageAvailable('localStorage')) {
//     // Yippee! We can use localStorage awesomeness
//     console.log("Working")
// }
// else {
//     // Too bad, no localStorage for us
//     console.log("bad")
// }

/*
 * local_storage.js establishes communication with the local storage by 
 * providing reading and writing capabilities 
 */

/**
 * Update/add project in local storage with new project object
 * @param {*} proj 
 */
function updateStorage(proj) {
    localStorage.setItem(proj.name, JSON.stringify(proj));
}

/**
 * Real all projects from local storage and add them to Projects object
 * @param {*} Projects 
 */
function readAll(Projects) {
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.charAt(0) != "_"){   
            Projects.addProject(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    }
}

/**
 * Read and return the project object from local storage associated with the projName
 * @param {*} projName 
 * @returns 
 */
function readProj(projName) {
    return JSON.parse(localStorage.getItem(projName));
}

/**
 * remove the project from local storage
 * @param {*} projName 
 */
function removeProject(projName) {
    localStorage.removeItem(projName);
}

export {updateStorage, readAll, readProj, removeProject};

