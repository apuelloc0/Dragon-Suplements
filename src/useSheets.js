// ----------------------------------------------------------------------------------------------------------------
// import { useEffect, useState } from 'react';

// const useGoogleSheets = (apiKey, spreadsheetId, range, filter) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadGapi = () => {
//             return new Promise((resolve) => {
//                 window.gapi.load('client', () => {
//                     resolve();
//                 });
//             });
//         };

//         const initializeGapiClient = async () => {
//             try {
//                 await loadGapi();
//                 await window.gapi.client.init({
//                     apiKey: apiKey,
//                     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//                 });
//                 console.log('GAPI client initialized.');
//                 fetchData();
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         const fetchData = async () => {
//             try {
//                 const response = await window.gapi.client.sheets.spreadsheets.values.get({
//                     spreadsheetId: spreadsheetId,
//                     range: range,
//                 });
//                 const rows = response.result.values;
//                 const mappedData = rows.map(row => ({
//                     img: row[0],
//                     name: row[1],
//                     type: row[2],
//                     description: row[3],
//                     price: row[4],
//                 }));
//                 // Filtrar los datos según el filtro proporcionado
//                 const filteredData = mappedData.filter(product => 
//                     product.type.toLowerCase().includes(filter.toLowerCase()) ||
//                     product.name.toLowerCase().includes(filter.toLowerCase())
//                 );
//                 setData(filteredData);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         initializeGapiClient();
//     }, [apiKey, spreadsheetId, range, filter]);

//     return { data, loading, error };
// };

// export default useGoogleSheets;









// ----------------------------------------------------------------------------------------------------------------
// AUTENTICACION CON BOTON PARA AUTORIZAR FUNCIONA
// import { useState, useEffect } from 'react';
// import { gapi } from 'gapi-script';

// const CLIENT_ID = '998757493551-clg7dtumku5oeba5mnmni2gkn6hlo9tv.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg';
// const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
// const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// const useGoogleSheets = () => {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [content, setContent] = useState('');
//   const [tokenClient, setTokenClient] = useState(null);

//   useEffect(() => {
//     const initializeGapiClient = async () => {
//       await gapi.client.init({
//         apiKey: API_KEY,
//         discoveryDocs: [DISCOVERY_DOC],
//       });
//       setIsAuthorized(true);
//     };

//     const gapiLoaded = () => {
//       gapi.load('client', initializeGapiClient);
//     };

//     const gisLoaded = () => {
//       const client = google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: '', // defined later
//       });
//       setTokenClient(client);
//     };

//     const loadScripts = () => {
//       const script1 = document.createElement('script');
//       script1.src = 'https://apis.google.com/js/api.js';
//       script1.onload = gapiLoaded;
//       document.body.appendChild(script1);

//       const script2 = document.createElement('script');
//       script2.src = 'https://accounts.google.com/gsi/client';
//       script2.onload = gisLoaded;
//       document.body.appendChild(script2);
//     };

//     loadScripts();
//   }, []);

//   const handleAuthClick = () => {
//     tokenClient.callback = async (resp) => {
//       if (resp.error !== undefined) {
//         throw (resp);
//       }
//       setIsAuthorized(true);
//       await listMajors();
//     };

//     if (gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: 'consent' });
//     } else {
//       tokenClient.requestAccessToken({ prompt: '' });
//     }
//   };

//   const handleSignoutClick = () => {
//     const token = gapi.client.getToken();
//     if (token !== null) {
//       google.accounts.oauth2.revoke(token.access_token);
//       gapi.client.setToken('');
//       setContent('');
//       setIsAuthorized(false);
//     }
//   };

//   const listMajors = async () => {
//     let response;
//     try {
//       response = await gapi.client.sheets.spreadsheets.values.get({
//         spreadsheetId: '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
//         range: 'Hoja1!A2:G',
//       });
//     } catch (err) {
//       setContent(err.message);
//       return;
//     }
//     const range = response.result;
//     if (!range || !range.values || range.values.length === 0) {
//       setContent('No values found.');
//       return;
//     }
//     const output = range.values.reduce(
//       (str, row) => `${str}${row[0]}, ${row[4]}\n`,
//       'Name, Major:\n'
//     );
//     setContent(output);
//   };

//   return {
//     isAuthorized,
//     content,
//     handleAuthClick,
//     handleSignoutClick,
//   };
// };

// export default useGoogleSheets;











// ----------------------------------------------------------------------------------------------------------------
// CUSTOMHOOK DONDE SE ELIMINA EL BOTON DE AUTORIZACION(DEBERIA AUTORIZAR AUTOMATICAMENTE) NO SIRVIO EN PRIMERAS
// import { useState, useEffect } from 'react';
// import { gapi } from 'gapi-script';

// const CLIENT_ID = '998757493551-clg7dtumku5oeba5mnmni2gkn6hlo9tv.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg';
// const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
// const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// const useGoogleSheets = () => {
//   const [content, setContent] = useState('');
//   const [tokenClient, setTokenClient] = useState(null);

//   useEffect(() => {
//     const initializeGapiClient = async () => {
//       await gapi.client.init({
//         apiKey: API_KEY,
//         discoveryDocs: [DISCOVERY_DOC],
//       });
//       handleAuthClick();
//     };

//     const gapiLoaded = () => {
//       gapi.load('client', initializeGapiClient);
//     };

//     const gisLoaded = () => {
//       const client = google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: '', // defined later
//       });
//       setTokenClient(client);
//     };

//     const loadScripts = () => {
//       const script1 = document.createElement('script');
//       script1.src = 'https://apis.google.com/js/api.js';
//       script1.onload = gapiLoaded;
//       document.body.appendChild(script1);

//       const script2 = document.createElement('script');
//       script2.src = 'https://accounts.google.com/gsi/client';
//       script2.onload = gisLoaded;
//       document.body.appendChild(script2);
//     };

//     loadScripts();
//   }, []);

//   const handleAuthClick = () => {
//     tokenClient.callback = async (resp) => {
//       if (resp.error !== undefined) {
//         throw (resp);
//       }
//       await listMajors();
//     };

//     if (gapi.client.getToken() === null) {
//       tokenClient.requestAccessToken({ prompt: 'consent' });
//     } else {
//       tokenClient.requestAccessToken({ prompt: '' });
//     }
//   };

//   const listMajors = async () => {
//     let response;
//     try {
//       response = await gapi.client.sheets.spreadsheets.values.get({
//         spreadsheetId: '1jjFklr_CvTKJfxZZJyIZvxRyofNdmHVTNMp1TtjPmCc',
//         range: 'Hoja1!A2:G',
//       });
//     } catch (err) {
//       setContent(err.message);
//       return;
//     }
//     const range = response.result;
//     if (!range || !range.values || range.values.length === 0) {
//       setContent('No values found.');
//       return;
//     }
//     const output = range.values.reduce(
//       (str, row) => `${str}${row[0]}, ${row[4]}\n`,
//       'Name, Major:\n'
//     );
//     setContent(output);
//   };

//   return {
//     content,
//   };
// };

// export default useGoogleSheets;















// ----------------------------------------------------------------------------------------------------------------
// CUSTOM HOOK ORIGINAL(NO BORRAR)
// import { useEffect, useState } from 'react';

// const useGoogleSheets = (apiKey, spreadsheetId, range, filter, id) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadGapi = () => {
//             return new Promise((resolve) => {
//                 window.gapi.load('client', () => {
//                     resolve();
//                 });
//             });
//         };

//         const initializeGapiClient = async () => {
//             try {
//                 await loadGapi();
//                 await window.gapi.client.init({
//                     apiKey: apiKey,
//                     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//                 });
//                 console.log('GAPI client initialized.');
//                 fetchData();
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         const fetchData = async () => {
//             try {
//                 const response = await window.gapi.client.sheets.spreadsheets.values.get({
//                     spreadsheetId: spreadsheetId,
//                     range: range,
//                 });
//                 const rows = response.result.values;
//                 const mappedData = rows.map(row => ({
//                     img: row[0],
//                     name: row[1],
//                     type: row[2],
//                     description: row[3],
//                     price: row[4],
//                 }));
//                 // Filtrar los datos según el filtro proporcionado
                
//                 const filteredData = mappedData.filter(product => 
//                     product.type.toLowerCase().includes(filter.toLowerCase()) ||
//                     product.name.toLowerCase().includes(filter.toLowerCase())
//                 ); 
                
//                 setData(filteredData);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         initializeGapiClient();
//     }, [apiKey, spreadsheetId, range, filter]);

//     return { data, loading, error };
// };

// export default useGoogleSheets;









// GOOGLESHEETS QUE ESTOY USANDO
// import { useEffect, useState } from 'react';

// const useGoogleSheets = (apiKey, spreadsheetId, range, filter, id) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadGapi = () => {
//             return new Promise((resolve) => {
//                 window.gapi.load('client', () => {
//                     resolve();
//                 });
//             });
//         };

//         const initializeGapiClient = async () => {
//             try {
//                 await loadGapi();
//                 await window.gapi.client.init({
//                     apiKey: apiKey,
//                     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//                 });
//                 console.log('GAPI client initialized.');
//                 fetchData();
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         const fetchData = async () => {
//             try {
//                 const response = await window.gapi.client.sheets.spreadsheets.values.get({
//                     spreadsheetId: spreadsheetId,
//                     range: range,
//                 });
//                 const rows = response.result.values;
//                 const mappedData = rows.map((row, index) => ({
//                     id: index + 1, // Asignar el índice de la fila
//                     img: row[0],
//                     name: row[1],
//                     type: row[2],
//                     description: row[3],
//                     price: row[4],
//                 }));

//                 let filteredData;
//                 if (id) {
//                     // Filtrar por índice si se proporciona un id
//                     filteredData = mappedData.filter(product => product.id === parseInt(id));
//                 } else {
//                     // Filtrar los datos según el filtro proporcionado
//                     filteredData = mappedData.filter(product => 
//                         product.type.toLowerCase().includes(filter.toLowerCase()) ||
//                         product.name.toLowerCase().includes(filter.toLowerCase())
//                     );
//                 }

//                 setData(filteredData);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         initializeGapiClient();
//     }, [apiKey, spreadsheetId, range, filter, id]);

//     return { data, loading, error };
// };

// export default useGoogleSheets;






// ESTA ES LA QUE TIENE EL RETRYCOUNT Y EL DELAY
import { useEffect, useState } from 'react';

const useGoogleSheets = (apiKey, spreadsheetId, range, filter, id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGapi = () => {
            return new Promise((resolve) => {
                window.gapi.load('client', () => {
                    resolve();
                });
            });
        };

        const initializeGapiClient = async () => {
            try {
                await loadGapi();
                await window.gapi.client.init({
                    apiKey: apiKey,
                    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                });
                console.log('GAPI client initialized.');
                fetchProducts();
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        const fetchProducts = async (retryCount = 3, delay = 1000) => {
            try {
                const response = await window.gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: spreadsheetId,
                    range: range,
                });
                const rows = response.result.values;
                const mappedData = rows.map((row, index) => ({
                    id: index + 1, // Asignar el índice de la fila
                    img: row[0],
                    name: row[1],
                    type: row[2],
                    description: row[3],
                    price: row[4],
                }));

                let filteredData;
                if (id) {
                    // Filtrar por índice si se proporciona un id
                    filteredData = mappedData.filter(product => product.id === parseInt(id));
                } else {
                    // Filtrar los datos según el filtro proporcionado
                    filteredData = mappedData.filter(product => 
                        product.type.toLowerCase().includes(filter.toLowerCase()) ||
                        product.name.toLowerCase().includes(filter.toLowerCase())
                    );
                }

                setData(filteredData);
            } catch (err) {
                if (retryCount > 0) {
                    console.warn(`Retrying... (${3 - retryCount + 1})`);
                    setTimeout(() => fetchProducts(retryCount - 1, delay), delay);
                } else {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        initializeGapiClient();
    }, [apiKey, spreadsheetId, range, filter, id]);

    return { data, loading, error };
};

export default useGoogleSheets;
