export class FormService {
    static scriptURL = import.meta.env.VITE_FORM_SCRIPT_URL

    static async sendForm(formData) {
        try {
            const response = await fetch(this.scriptURL, {
                method: 'POST',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            const data = await response.json();
            if (data.result === 'success') {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}
