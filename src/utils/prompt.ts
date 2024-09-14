import { SchemaAsString } from "./schema"


export const generateResumePrompt = (LinkedinProfile:string)=>{
    return `
    hi chatgpt, you are a very intelligent and helpful chatbot,
    i'd love your help in a task.


    i have provided you with linkedin profile content of a person delimited in double quotes,
    i want you to fit the data in the typescript schema delimited in triple single quotes and return a valid json only!
    i have added specific comments for every field which you need to consider attentively too

    note: the data should be a properly formatted json
    note: the data is for building the resume of a person so please focus on as much detailing as possible especially on education, skills and experience
    note: do not truncate!

    
    Here are the points for correctly formatting JSON:

    1. Use double quotes for both keys and string values.
    2. No trailing commas after the last item in objects or arrays.
    3. Escape special characters (e.g., double quotes, backslashes) using a backslash (\).
    4. Ensure correct data types:
        i) Strings in double quotes.
        ii) Numbers without quotes.
        iii) Booleans as true or false without quotes.
        iv) Arrays enclosed in square brackets ([]).
        v) Objects enclosed in curly brackets ({}).
    5. No comments allowed in JSON (remove any // or /* */ style comments).
    6. Proper nesting of objects and arrays within each other.
    7. No extra parentheses or symbols outside of valid JSON structure.


    here are some very important instructions which i am sure an intelligent bot like you would not miss.

    1. skills must organized into seperate categories for example
        engineering, machine learning and data science can be organised into a category of domain knowledge.
        git,linux and aws can be organized in a category of devops 
    2. If a particular value is not found assign it null instead
    3. keep the professional title same as the title provided in text which will be somewhere near the name. it's a one liner for example Helping Startups to Scale with MongoDB | Ex - Adobe, Oracle & SAP 
    4. PLEASE! DO NOT TRUNCATE ANYTHING!
    '''
    ${LinkedinProfile} 
    '''
    
    
    
    '''
    ${SchemaAsString} 
    '''



`
}