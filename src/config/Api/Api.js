import ky from 'ky'

const api = ky.create(
    {prefixUrl:'https://mebeldb-4hku.onrender.com/'}
);

export default api