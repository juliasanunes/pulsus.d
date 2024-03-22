const fetch = require('node-fetch');

module.exports = async (req, res) => {
    try {
        const apiToken = 'SFWLzKwTcwfgZ9P6dCxPuXmHhXWiRDCm2KtsCWztDovBj7bAJMRPqHmcs4de'; // Seu token de API da Pulsus
        const url = 'https://api.pulsus.mobi/v2/signal_strengths?page=1&per_page=500&device_id=1';

        const response = await fetch(url, {
            headers: {
                'accept': 'application/json',
                'ApiToken': apiToken
            }
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar os dados da API da Pulsus:', error);
        res.status(500).json({ error: 'Erro ao buscar os dados da API da Pulsus' });
    }
};
