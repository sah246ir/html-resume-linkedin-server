export type LinkedInProfile = {
    contact: {
      email: string;
      linkedin: string;
    };
    skills: string[];
    certifications: { name: string }[];
    personalInfo: {
      name: string;
      title: string;
      location: {
        city: string;
        state: string;
        country: string;
      };
      summary: string;
    };
    technicalSkills: {
      languages: string[];
      databases: string[];
      apiFrameworks: string[];
      stacks: string[];
      devOps: string[];
    };
    experience: {
      company: string;
      title: string;
      startDate: string;
      endDate: string | "Present";
      location: {
        city: string;
        state: string;
        country: string;
      };
      duration: string;
    }[];
    education: {
      institution: string;
      degree: string;
      field: string | string[];
      startDate: number | string;
      endDate: number | string;
    }[];
  };
  