import axios from './axios';

export async function validateFirebaseToken() {
    const res = await axios.get('auth/profile');
    return res;
}
