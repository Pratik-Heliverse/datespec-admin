import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { fStorage } from 'contexts/FirebaseContext';

export async function handleFirebaseUpload({ file, setPercent }) {
    if (!file) {
        throw new Error('No files provided!');
    }
    return new Promise((resolve, reject) => {
        const storageRef = ref(fStorage, `/admin/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                if (setPercent) {
                    const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                    // update progress
                    setPercent(percent);
                }
            },
            (err) => {
                reject(err);
            },
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    resolve(url);
                });
            }
        );
    });
}
