export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Capa {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Aula {
  id: number;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  curso: number;
  ordem: number;
  titulo: string;
  descricao: string;
}

export interface CourseDTO {
  id: number;
  descricao: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  titulo: string;
  nomeDoAutor: string;
  descricaoDoAutor: string;
  horas: number;
  slug: string;
  capa: Capa;
  aulas: Aula[];
}
