export interface Teacher {
  id: string;
  full_name: string;
  profile_image_url: string;
  bio?: string;
  languages?: string[];
  country_of_birth?: string;
  city_of_birth?: string;
  lesson_rate?: number;
  teaching_levels?: string[];
  years_of_experience?: number;
  rating?: number;
  social_links?: {
    linkedin?: string;
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    facebook?: string;
  };
}
