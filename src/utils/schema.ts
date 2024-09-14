export type ProfileSchema = {
    contact?: {
      email?: string; // The user's email address
      linkedin?: string; // it should be a valid url to the user's LinkedIn profile.
    };
    skills: {
      [category: string]: string[]; // An object where keys are skill categories which are to be inferred from data and values are arrays with a minimum length of 1 of skills for each category
    };
    certifications: {
      name?: string; // The name of the certification
    }[] // array of certifications. ;
    personalInfo?: {
      name?: string; // The full name of the user
      title?: string; // The professional title  of the user
      location?: {
        city?: string; // The city where the user is located
        state?: string; // The state where the user is located
        country?: string; // The country where the user is located
      };
      summary?: string; // A brief summary of the user's professional background and expertise
    };
    experience?: {
      company?: string; // The name of the company where the user worked
      title?: string; // The user's job title at the company
      startDate?: string; // The start date of the employment strictly in format "(first 3 characters of the month) 2024" 
      endDate?: string | "Present"; // The end date of the employment or "Present" if currently employed or else date strictly in format "(first 3 characters of the month) 2024" or "Present"
      location?: {
        city?: string; // The city where the company is located
        state?: string; // The state where the company is located
        country?: string; // The country where the company is located
      };
      duration?: string; // The duration of the employment (e.g., "2 months")
      responsibilities: string[]; // An array of responsibilities or tasks performed at the job 
      skills: string[]; // An array of technologies or skills used in the role;  
    }[] // array of experiences. ;;
    education: {
      institution?: string; // The name of the educational institution
      degree?: string; // name of The degree or qualification obtained in the instituiton 
      field: string[]; // The field of study; can be a single string or an array of strings 
      startDate?: string; // The start date of the education (e.g., "2007 or 12 Aug 2007" or a year) 
      endDate?: string; // The end date of the education or "Present" if currently studying 
    }[];
};

export const SchemaAsString = `
{
    contact?: {
      email?: string; // The user's email address
      linkedin?: string; // it should be a valid url to the user's LinkedIn profile.
    };
    skills: {
      [category: string]: string[]; // An object where keys are skill categories which are to be inferred from data and values are arrays with a minimum length of 1 of skills for each category
    };
    certifications: {
      name?: string; // The name of the certification
    }[] // array of certifications. ;
    personalInfo?: {
      name?: string; // The full name of the user
      title?: string; // The professional title  of the user
      location?: {
        city?: string; // The city where the user is located
        state?: string; // The state where the user is located
        country?: string; // The country where the user is located
      };
      summary?: string; // A brief summary of the user's professional background and expertise
    };
    experience?: {
      company?: string; // The name of the company where the user worked
      title?: string; // The user's job title at the company
      startDate?: string; // The start date of the employment strictly in format "(first 3 characters of the month) 2024" 
      endDate?: string | "Present"; // The end date of the employment or "Present" if currently employed or else date strictly in format "(first 3 characters of the month) 2024" or "Present"
      location?: {
        city?: string; // The city where the company is located
        state?: string; // The state where the company is located
        country?: string; // The country where the company is located
      };
      duration?: string; // The duration of the employment (e.g., "2 months")
      responsibilities: string[]; // An array of responsibilities or tasks performed at the job ;;
      skills: string[]; // An array of technologies or skills used in the role; ; 
    }[] // array of experiences. ;;
    education: {
      institution?: string; // The name of the educational institution
      degree?: string; // name of The degree or qualification obtained in the instituiton 
      field: string[]; // The field of study; can be a single string or an array of strings
      startDate?: string; // The start date of the education (e.g., "2007 or 12 Aug 2007" or a year) 
      endDate?: string; // The end date of the education or "Present" if currently studying 
    }[];
};

`
 