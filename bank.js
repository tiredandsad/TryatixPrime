const fs = require('fs');
export default class Bank{
    //connect to data file.
    loadData = () => {
        try{
            const data = JSON.parse(fs.readFileSync('creditUnion.json', 'utf8'));
            return data;
        } catch (error){
            return {};
        }
    }
    saveData = (data) => {
        fs.writeFileSync('creditUnion.json', JSON.stringify(data, null, 4), 'utf8');
    }
    getBalance = (userID, userName) => {
        // Ensure data is an object
        const data = this.loadData();
    
        // Check if the user exists in the data
        if (!data.hasOwnProperty(userID)) {
            // If the user doesn't exist, return an error
            return `User ${userID} does not exist.`;
        }
    
        // Update the username if provided
        if (userName) {
            data[userID].username = userName;
            this.saveData(data);
        }
    
        // Get the user's balance
        const balance = data[userID].balance || 0;
    
        // Return a formatted string
        return `${data[userID].username || userID} has a balance of $${balance}`;
    }    
    userIncome = (userID) => {
        const data = this.loadData();

        if (!data[userID]) {
            // If the user doesn't exist, create a new entry with a balance of 1
            data[userID] = {
                balance: 1,
                username: `${userID}` // You can set a default username or modify as needed
            };
        } else {
            // If the user exists, increment the balance by 1
            data[userID].balance = (data[userID].balance || 0) + 1;
        }

        // Save the updated data back to the file
        this.saveData(data);

        console.log(`Income added for user with ID: ${userID}`);
    }
}




//JSON EXAMPLE

// {
//     "222196413273079810": {
//       "balance": 0,
//       "username: SpecificMills" 
//     },
// }