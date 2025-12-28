export interface PersonalConfig {
  name: string;
  role: string;
  company: string;
  portfolio: string;
  links: {
    github: string;
    linkedin: string;
    peerlist: string;
    twitter: string;
  };
}

export interface MenuChoice {
  name: string;
  value: Destination;
}

export type Destination = "portfolio" | "github" | "linkedin" | "peerlist" | "twitter" | "exit";

export interface CLIFlags {
  help: boolean;
  noAnim: boolean;
  open?: Destination;
}
