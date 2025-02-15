import _ from "lodash";

export default {
    validateUrl: (value: any) => {
        try {
            let inputUrl = value.trim();
    
            if (!/^https?:\/\//i.test(inputUrl)) {
                inputUrl = `https://${inputUrl}`;
            }

            const validUrl = new URL(inputUrl);

            return validUrl.href;
        } catch (error) {
            throw new Error("Invalid URL");
        }
        
        
    }
}