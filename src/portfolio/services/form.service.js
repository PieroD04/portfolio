export class FormService {
    // Netlify Forms catches POSTs to the site that carry the registered form-name (see index.html)
    static async sendForm(formData) {
        try {
            const response = await fetch('/', {
                method: 'POST',
                body: new URLSearchParams({ 'form-name': 'contact', ...formData }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
}
