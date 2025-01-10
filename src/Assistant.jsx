function ParseResponse(response_json) {
    if (!response_json) {
        console.error("Error (ParseResponse): JSON is not valid.");
        return;
    }

    // Check if 'responses' exists and is an array
    if (!response_json.responses || !Array.isArray(response_json.responses)) {
        console.error("Error (ParseResponse): 'responses' is missing or not an array.");
        return;
    }

    // Iterate over and process only the 'assistant' responses
    response_json.responses.forEach((resp) => {
        if (resp.startsWith("assistant >")) {
            const jsonString = resp.replace("assistant >", "").trim();

            try {
                // Parse the JSON string
                const parsedData = JSON.parse(jsonString);

                // If it contains 'parts', log each part
                if (parsedData.parts && Array.isArray(parsedData.parts)) {
                    parsedData.parts.forEach((part, partIndex) => {
                        console.log(`Part ${partIndex + 1}:`);
                        console.log(`  Name: ${part.name}`);
                        console.log(`  Price: $${part.price}`);
                        console.log(`  Link: ${part.link}`);
                        console.log(`  Estimated Wattage: ${part.estimated_wattage}W`);
                    });
                } else {
                    console.error("Error (ParseResponse): No 'parts' found in assistant response.");
                }
            } catch (error) {
                console.error("Error parsing JSON in assistant response:", error);
            }
        }
    });
}

export default ParseResponse;
