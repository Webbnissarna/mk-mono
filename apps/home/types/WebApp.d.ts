interface _WebApp {
  title: string;
  abbreviation: string;
  description: string;
  color: {
    hex: string;
  };
}

export type WebApp = Partial<_WebApp>;
