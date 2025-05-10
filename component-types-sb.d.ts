import {StoryblokStory, AssetStoryblok} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}
export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PageStoryblok {
    body?: (
      | PageStoryblok
    )[];
    _uid: string;
    component: "page";
    [k: string]: any;
  }
export interface TeaserStoryblok{
  headline:string;
  component:"teaser";
  [k:string]:any
}
export interface MenuLink{
  name:string;
  link:{
    cached_url:string;
    linktype:string;
    url:string;
  };
  component:"menu_link"
  [k:string]:any
}

export interface Header{
  logo:AssetStoryblok;
  header_menu:Navbar[];
  bell:AssetStoryblok;
  component:"header";
  [k:string]:any;
}
export interface Hero{
  backgroundPic:AssetStoryblok;
  headline:string;
  circleDetails:string;
  component:"hero";
  [k:string]:any;
}
export interface Projects{
  images:AssetStoryblok;
  component:"projects";
  [k:string]:any;
}

export interface AboutSection{
  TeamPic:AssetStoryblok;
  heading:string;
  aboutText:string;
  component:"aboutSection";
  [k:string]:any;
}
export interface Footer{
  component:"footer"
  [k:string]:any
}
export interface AboutPage{
  heading:string;
  teamMembers:teamMembers[];
  component:"aboutPage"
  [k:string]:any
}
export interface teamMembers{
  image:AssetStoryblok;
  member:string;
  component:"teamMembers";
  [k:string]:any
}
export interface ourProjectsPage{
  heading:string;
  component:"ourProjectsPage";
  [k:string]:any
}
export interface singleProject{
  heading:string;
  topIcons:singleProjectIcons[];
  projectDescription:RichtextStoryblok
  pictures:AssetStoryblok
  component:"singleProject";
  [k:string]:any
}
export interface singleProjectIcons{
  date:string;
  location:string;
  component:"singleProjectIcons";
  [k:string]:any
}