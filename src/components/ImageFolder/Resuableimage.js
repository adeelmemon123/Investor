export function formatProfilePictureUrl(profilePicture, folderPaths) {
    if (!profilePicture) {
        return null; // or handle the case according to your requirements
    }

    let formattedUrl = `http://localhost:3001/${profilePicture}`;

    if (Array.isArray(folderPaths)) {
        folderPaths.forEach(folderPath => {
            formattedUrl = formattedUrl.replace(folderPath, '');
        });
    } else {
        formattedUrl = formattedUrl.replace(folderPaths, '');
    }

    return formattedUrl;
}


export function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return formattedDate;
  }


export function formatDocumentUrls(documents, folderPath) {
    if (!documents) {
        return null; // or handle the case according to your requirements
    }

    if (!Array.isArray(documents)) {
        documents = documents.split(','); // Convert comma-separated string to array
    }

    const formattedUrls = documents.map(document => {
        if (!document) {
            return null; // or handle the case according to your requirements
        }
        return `http://localhost:3001/${document.trim().replace(folderPath, '')}`;
    });

    return formattedUrls;
}





export function formatInvestorDocumentUrls(documents, folderPaths) {
    if (!documents) {
        return null; // or handle the case according to your requirements
    }

    if (!Array.isArray(documents)) {
        documents = documents.split(','); // Convert comma-separated string to array
    }

    const formattedUrls = documents.map(document => {
        if (!document) {
            return null; // or handle the case according to your requirements
        }
        // Replace each folder path in document string
        let replacedDocument = document.trim();
        if (Array.isArray(folderPaths)) {
            folderPaths.forEach(folderPath => {
                replacedDocument = replacedDocument.replace(folderPath, '');
            });
        } else {
            replacedDocument = replacedDocument.replace(folderPaths, '');
        }
        return `http://localhost:3001/${replacedDocument}`;
    });

    return formattedUrls;
}



export function extractFilenameFromUrls(urls) {
    if (!Array.isArray(urls)) {
        console.error('Invalid input: not an array');
        return null;
    }

    const filenames = [];

    if (urls.length === 0) {
        console.error('No URLs provided');
        return null;
    }

    urls.forEach(url => {
        if (typeof url !== 'string') {
            console.error('Invalid URL:', url);
            return;
        }

        const parts = url.split('/');
        const filenameWithExtension = parts[parts.length - 1];
        const filenameParts = filenameWithExtension.split('.');

        if (filenameParts.length < 2) {
            console.error('Invalid filename format:', filenameWithExtension);
            return;
        }

        filenameParts.pop();
        const filename = filenameParts.join('.');
        filenames.push(filename);
    });

    return filenames.length === 1 ? filenames[0] : filenames;
}



export function ProfilePictureUrls(profilePictures, folderPath) {
    if (!profilePictures) {
        return null; // or handle the case according to your requirements
    }

    let pictureArray = profilePictures.split(',');

    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }
        return `http://localhost:3001/${picture.trim().replace(folderPath, '')}`;
    });

    return formattedUrls;
}


export function InvestordetailsCarosalUrls(profilePictures, folderPaths) {
    if (!profilePictures || !folderPaths || !Array.isArray(folderPaths) || folderPaths.length === 0) {
        return null; // or handle the case according to your requirements
    }

    let pictureArray = profilePictures.split(',');

    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }
        
        let formattedUrl = picture.trim();
        
        for (const folderPath of folderPaths) {
            if (formattedUrl.includes(folderPath)) {
                formattedUrl = formattedUrl.replace(folderPath, '');
                break;
            }
        }
        
        return `http://localhost:3001/${formattedUrl}`;
    });

    return formattedUrls;
}


export function CarosalUrls(profilePictures, folderPath) {
    if (!profilePictures) {
        return null; // or handle the case according to your requirements
    }

    const pictureArray = profilePictures.split(',');

    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }
        const trimmedPicture = picture.trim();
        const fileName = trimmedPicture.substring(trimmedPicture.lastIndexOf('/') + 1); // Extract file name
        const url = `http://localhost:3001/${fileName}`;
        return url.replace(folderPath, ''); // Remove the folder path from the URL
    });

    // Filter the first two images
    const firstTwoImages = formattedUrls.slice(0, 2);

    return firstTwoImages;
}



export function getRandomProfilePictureUrl(profilePicturesString, folderPaths) {
    if (!profilePicturesString || typeof profilePicturesString !== 'string') {
        return null; // or handle the case according to your requirements
    }

    // Split the string by comma to get individual picture URLs
    const profilePictures = profilePicturesString.split(',');

    if (profilePictures.length === 0) {
        return null; // or handle the case according to your requirements
    }

    // Get the first profile picture URL
    const firstProfilePicture = profilePictures[0].trim();

    if (!firstProfilePicture) {
        return null; // or handle the case according to your requirements
    }

    // Remove folder paths from the URL
    let finalUrl = firstProfilePicture;
    folderPaths.forEach(folderPath => {
        finalUrl = finalUrl.replace(folderPath, '');
    });

    return `http://localhost:3001/${finalUrl}`;
}


export function gettransaction(profilePicturesString, ...folderPaths) {
    if (!profilePicturesString || typeof profilePicturesString !== 'string') {
        return null; // or handle the case according to your requirements
    }

    // Split the string by comma to get individual picture URLs
    const profilePictures = profilePicturesString.split(',');

    if (profilePictures.length === 0) {
        return null; // or handle the case according to your requirements
    }

    // Select a random index from the profilePictures array
    const randomIndex = Math.floor(Math.random() * profilePictures.length);

    // Get the profile picture at the random index
    const randomProfilePicture = profilePictures[randomIndex].trim();

    if (!randomProfilePicture) {
        return null; // or handle the case according to your requirements
    }

    // Replace each folderPath in randomProfilePicture
    let finalUrl = randomProfilePicture;
    folderPaths.forEach(folderPath => {
        finalUrl = finalUrl.replace(folderPath, '');
    });

    return `http://localhost:3001/${finalUrl}`;
}



export function InvestorNicmodal(profilePictures, ...folderPaths) {
    if (!profilePictures) {
        return null; // or handle the case according to your requirements
    }

    const pictureArray = profilePictures.split(',');

    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }
        const trimmedPicture = picture.trim();
        const fileName = trimmedPicture.substring(trimmedPicture.lastIndexOf('/') + 1); // Extract file name
        let url = `http://localhost:3001/${fileName}`;
        folderPaths.forEach(folderPath => {
            url = url.replace(folderPath, ''); // Remove each folder path from the URL
        });
        return url;
    });

    // Filter the first two images
    const firstTwoImages = formattedUrls.slice(0, 2);

    return firstTwoImages;
}



export function Checkbook(profilePictures, ...folderPaths) {
    if (!profilePictures) {
        return null; // or handle the case according to your requirements
    }

    const pictureArray = profilePictures.split(',');
    
    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }
        const trimmedPicture = picture.trim();
        const fileName = trimmedPicture.substring(trimmedPicture.lastIndexOf('/') + 1); // Extract file name
        const folderPath = folderPaths.find(path => trimmedPicture.includes(path));
        if (!folderPath) {
            return null; // or handle the case if folder path is not found
        }
        const url = `http://localhost:3001/${fileName}`;
        return url.replace(folderPath, ''); // Remove the folder path from the URL
    }).filter(url => url !== null); // Filter out null values

    return formattedUrls;
}


export function Transactionpropertylogo(profilePictures, ...folderPaths) {
    if (!profilePictures) {
        return null; // or handle the case according to your requirements
    }

    let pictureArray = profilePictures.split(',');

    const formattedUrls = pictureArray.map(picture => {
        if (!picture) {
            return null; // or handle the case according to your requirements
        }

        let finalPath = picture.trim();
        folderPaths.forEach(path => {
            finalPath = finalPath.replace(path, '');
        });

        return `http://localhost:3001/${finalPath}`;
    });

    return formattedUrls;
}


export function formatText(text) {
    const words = text.split('_');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }